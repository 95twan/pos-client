import styled from "styled-components";
import NumberPad from "../../components/NumberPad";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import YesOrNo from "./YesOrNo";
import PointView from "./PointView";

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
    height: 100px;

    .title-text {
      position: absolute;
      text-align: center;
      font-size: 24px;

      left: 50%;
      top: 52%;
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

const SavePoint = ({hideModal, showModal, orderNumber}) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const numberPadClick = (n) => {
        if (phoneNumber.length < 13) {
            setPhoneNumber(phoneNumber.concat(n));
        }
    }

    useEffect(() => {
        if (phoneNumber.length === 3 || phoneNumber.length === 8) {
            setPhoneNumber(phoneNumber.concat('-'));
        }
    }, [phoneNumber])

    const onClickCancel = () => {
        hideModal();
        navigate('/order-complete', {state: orderNumber});
    }

    const onClickOk = () => {
        showModal(<PointView hideModal={hideModal} orderNumber={orderNumber}/>)
    }

    const onClickComplete = () => {
        showModal(<YesOrNo hideModal={hideModal}
                           showModal={showModal}
                           title={"가입되지 않은 번호입니다.\n가입하시겠습니까"}
                           onClickOk={onClickOk}
                           onClickCancel={onClickCancel}/>)
        // hideModal();
        // navigate('/order-complete');
    }

    return (
        <SavePointBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <div className="title">
                <div className="title-text">핸드폰 번호 입력</div>
            </div>
            <div className="phoneNumber-block">
                <div className="phoneNumber">{phoneNumber}</div>
            </div>
            <NumberPad numberPadClick={numberPadClick} onClickComplete={onClickComplete}/>
        </SavePointBlock>
    );
};

export default SavePoint;