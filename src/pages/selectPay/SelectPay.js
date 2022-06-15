import styled from "styled-components";
import OrderProgressBar from "../../components/OrderProgressBar";
import {useNavigate} from "react-router-dom";

const SelectPayBlock = styled.div`
  width: 600px;
  height: 1110px;

  .selectPayGrid {
    position: relative;
    width: 600px;
    height: 910px;

    .title {
      position: absolute;
      left: 33.33%;
      top: 11.73%;
      text-align: center;
      font-size: 36px;
      font-weight: bold;

      .red {
        color: #ff0000;
      }
    }

    .selectPayItem {
      position: absolute;
      cursor: pointer;
      left: 25%;
      top: 31.17%;
      height: 338px;
      width: 300px;
      text-align: center;

      .payImage {
        height: 300px;
        width: 300px;
        text-align: center;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .payTitle {
        font-weight: bold;
        font-size: 24px;
        color: #000000;
      }
    }
  }

  .buttons {
    width: 600px;
    height: 120px;
    padding: 20px;
    box-sizing: border-box;

    .button {
      cursor: pointer;
      display: inline-block;
      text-align: center;
      line-height: 80px;
      color: #ffffff;
      font-size: 30px;
      font-weight: bold;
      width: 560px;
      height: 80px;
      border-radius: 10px;
    }

    .prev {
      background: #000000;
      margin-right: 10px;
    }
  }
`;

const SelectPay = () => {
    const navigate = useNavigate();

    return (
        <SelectPayBlock>
            <OrderProgressBar progressStage={2}/>
            <div className="selectPayGrid">
                <div className="title">
                    <div className="red">결재수단을</div>
                    <div>선택해주세요</div>
                </div>
                <div className="selectPayItem" onClick={() => navigate('/credit-card')}>
                    <div className="payImage">
                        <img alt="신용카드" src="img/credit-card.png"/>
                    </div>
                    <div className="payTitle">신용카드</div>
                </div>
            </div>
            <div className="buttons">
                <div className="button prev" onClick={() => navigate('/order-check')}>이전</div>
            </div>
        </SelectPayBlock>
    );
};

export default SelectPay;
