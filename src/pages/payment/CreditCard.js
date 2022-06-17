import styled from "styled-components";
import OrderProgressBar from "../../components/OrderProgressBar";
import {useNavigate} from "react-router-dom";
import YesOrNo from "./YesOrNo";
import SavePoint from "./SavePoint";
import axios from "axios";
import {API_HOST} from "../../lib/env";

const CreditCardBlock = styled.div`
  width: 600px;
  height: 1110px;

  .creditCard {
    position: relative;
    width: 600px;
    height: 910px;

    .text {
      position: absolute;
      width: 308px;
      height: 84px;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
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

const CreditCard = ({cart, showModal, hideModal}) => {
    const navigate = useNavigate();

    const menus = cart.map(menu => ({
        id: menu.id,
        price: menu.price,
        count: menu.count
    }))

    const price = menus.reduce((prev, current) => prev + (current.price * current.count), 0);

    const orderData = {
        menus: JSON.stringify(menus),
        payWith: "credit-card",
        price: price
    }

    const onClickCancel = (orderNumber) => {
        hideModal();
        navigate('/order-complete', {state: orderNumber});
    }

    const onClickOk = (orderNumber) => {
        showModal(<SavePoint hideModal={hideModal} showModal={showModal} orderNumber={orderNumber} point={parseInt(price/100)}/>);
    }

    const showPointSaveOrNot = () => {
        axios.post(`${API_HOST}/orders/`, orderData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                showModal(<YesOrNo title={"포인트 적립을 하시겠습니까?"}
                                   onClickCancel={() => onClickCancel(res.data.data.id)}
                                   onClickOk={() => onClickOk(res.data.data.id)}/>);
            })
            .catch(() => {
                console.log('error')
            })
    };

    return (
        <CreditCardBlock>
            <OrderProgressBar progressStage={3}/>
            <div className="creditCard">
                <div className="text" onClick={showPointSaveOrNot}>신용카드를<br/>투입구에 꽂아주세요</div>
            </div>
            <div className="buttons">
                <div className="button prev" onClick={() => navigate('/select-pay')}>이전</div>
            </div>
        </CreditCardBlock>
    );
};

export default CreditCard;
