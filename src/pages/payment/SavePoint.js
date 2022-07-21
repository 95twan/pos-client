import styled from "styled-components";
import NumberPad from "../../components/NumberPad";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import YesOrNo from "./YesOrNo";
import PointView from "./PointView";
import axios from "axios";
import {API_HOST} from "../../lib/env";

const SavePointBlock = styled.div`
  background: #FFFFFF;
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    position: relative;
    height: 60px;
    margin-bottom: 10px;

    .title-text {
      position: absolute;
      text-align: center;
      font-size: 24px;

      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
    }
  }

  .phoneNumber-block {
    position: relative;
    height: 60px;

    .phoneNumber {
      position: absolute;
      box-sizing: border-box;
      border: 1px solid #000000;
      border-radius: 10px;
      text-align: center;
      line-height: 60px;
      font-size: 28px;
      height: 60px;
      width: 360px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ExitButtonBlock = styled.div`
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid red;
  background-color: lightgray;
  background-image: url("img/exit.png");
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`

const SavePoint = ({hideModal, showModal, orderNumber, point}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    const pointData = {
        point: point
    }

    const userData = {
        phoneNumber: phoneNumber
    }

    const numberPadClick = (n) => {
        if (phoneNumber.length < 13) {
            setPhoneNumber(phoneNumber.concat(n));
        }
    }

    useEffect(() => {
        if (phoneNumber.length === 3 || phoneNumber.length === 8) {
            setPhoneNumber(phoneNumber.concat('-'));
        }
        if (phoneNumber.length === 13) {
            setActive(true);
        } else {
            setActive(false);
        }
    }, [phoneNumber])

    const closePointModel = () => {
        hideModal();
        navigate('/order-complete', {state: orderNumber});
    }

    const registerUser = () => {
        axios.post(`${API_HOST}/users/`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                savePoint(res.data.data.id)
            })
            .catch(() => {
                console.log('error')
            })
    }

    const savePoint = (id) => {
        axios.patch(`${API_HOST}/users/${id}/point/`, pointData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            showModal(<PointView hideModal={hideModal} orderNumber={orderNumber} userId={id} point={point}/>);
        }).catch(() => {
            setPhoneNumber('');
        });
    }

    const onClickComplete = () => {
        axios.get(`${API_HOST}/users/?phoneNumber=${phoneNumber}`)
            .then((res) => {
                savePoint(res.data.data.id);
            })
            .catch(() => {
                showModal(<YesOrNo hideModal={hideModal}
                                   showModal={showModal}
                                   title={"가입되지 않은 번호입니다.\n가입하시겠습니까"}
                                   onClickOk={registerUser}
                                   onClickCancel={closePointModel}/>)
            })
    }

    const backspace = () => {
        if (phoneNumber.length !== 0) {
            let index = phoneNumber.length - 1;
            if (phoneNumber[index] === '-') {
                index--;
            }
            setPhoneNumber(phoneNumber.slice(0, index));
        }
    }

    return (
        <SavePointBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <ExitButtonBlock onClick={closePointModel}/>
            <div className="title">
                <div className="title-text">핸드폰 번호 입력</div>
            </div>
            <div className="phoneNumber-block">
                <div className="phoneNumber">{phoneNumber}</div>
            </div>
            <NumberPad active={active} numberPadClick={numberPadClick} onClickComplete={onClickComplete}
                       onClickCancel={backspace}/>
        </SavePointBlock>
    );
};

export default SavePoint;
