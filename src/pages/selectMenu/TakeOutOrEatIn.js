import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

const TakeOutOrEatInBlock = styled.div`
  background: #FFFFFF;
  width: 400px;
  height: 450px;
  position: absolute;
  padding: 45px 20px;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  .select-title {
    height: 35px;
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 32px;
  }

  .select-list {
    width: 360px;
    height: 200px;
    margin-bottom: 33px;

    .select-block {
      display: inline-block;
      width: 180px;
      height: 200px;
      box-sizing: border-box;
      padding: 18px 40px 32px 40px;

      .select {
        width: 100px;
        height: 150px;
        cursor: pointer;

        .select-name {
          height: 28px;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
`;

const SelectImage = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 22px;

  &.eat-in {
    filter: ${props => props.howToEat === '' || props.howToEat === 'takeOut' ? "grayscale(100%)" : "none"};
  }

  &.take-out {
    filter: ${props => props.howToEat === '' || props.howToEat === 'eatIn' ? "grayscale(100%)" : "none"};
  }
`;

const PayButton = styled.div`
  height: 60px;
  width: 360px;
  line-height: 60px;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 10px;

  &.deactivate {
    cursor: none;
    pointer-events: none;
    background: #7a7a7a;
  }

  &.activate {
    cursor: pointer;
    background: #CB78FE;
  }
`;

const TakeOutOrEatIn = ({hideModal}) => {
    const navigate = useNavigate();
    const [select, setSelect] = useState(false)
    const [howToEat, setHowToEat] = useState('');

    const clickOrderButton = () => {
        hideModal();
        navigate("/order-check");
    }
    const selectTakeOut = () => {
        setSelect(true);
        setHowToEat('takeOut');
    }
    const selectEatIn = () => {
        setSelect(true);
        setHowToEat('eatIn');
    }

    return (
        <TakeOutOrEatInBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <div className="select-title">선택해주세요</div>
            <div className="select-list">
                <div className="select-block" onClick={() => selectEatIn()}>
                    <div className="select">
                        <SelectImage className="select-image eat-in" howToEat={howToEat}>
                            <img alt="매장식사" src="img/eat-in.png" height="100px"/>
                        </SelectImage>
                        <div className="select-name">매장식사</div>
                    </div>
                </div>
                <div className="select-block take-out" onClick={() => selectTakeOut()}>
                    <div className="select">
                        <SelectImage className="select-image take-out" howToEat={howToEat}>
                            <img alt="포장" src="img/take-out.png" height="100px"/>
                        </SelectImage>
                        <div className="select-name">포장</div>
                    </div>
                </div>
            </div>
            <PayButton className={select === true ? 'activate' : 'deactivate'}
                       onClick={() => clickOrderButton()}>결제하기</PayButton>
        </TakeOutOrEatInBlock>
    );
};

export default TakeOutOrEatIn;
