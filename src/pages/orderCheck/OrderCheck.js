import styled from "styled-components";
import Cart from "../../components/Cart";
import OrderProgressBar from "../../components/OrderProgressBar";
import {Link, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const OrderCheckBlock = styled.div`
  width: 600px;
  height: 1110px;

  .buttons {
    width: 600px;
    height: 100px;

    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;

    box-sizing: border-box;

    .button {
      cursor: pointer;
      display: inline-block;
      text-align: center;
      line-height: 80px;
      color: #ffffff;
      font-size: 30px;
      font-weight: bold;
      width: 275px;
      height: 80px;
      border-radius: 10px;
    }

    .prev {
      background: #000000;
      margin-right: 10px;
    }

    .activate {
      cursor: pointer;
      background: #CB78FE;
    }

    .deactivate {
      cursor: none;
      pointer-events: none;
      background: #7a7a7a;
    }
  }
`;

const OrderCheck = ({cart, addCount, minusCount}) => {
    const navigate = useNavigate();

    const [activePayBtn, setActivePayBtn] = useState(true)

    useEffect(() => {
        if (cart.length === 0) setActivePayBtn(false);
        else setActivePayBtn(true);
    }, [cart])

    const cartListSize = {
        height: "798px"
    }

    const onClickPayBtn = () => {
        navigate('/select-pay')
    }
    return (
        <OrderCheckBlock>
            <OrderProgressBar progressStage={1}/>
            <Cart cart={cart} addCount={addCount} minusCount={minusCount} cartListSize={cartListSize}/>
            <div className="buttons">
                <div className="button prev" onClick={() => navigate('/')}>이전</div>
                <div className={'button ' + (activePayBtn ? 'activate' : 'deactivate')} onClick={onClickPayBtn}>결제</div>
            </div>
        </OrderCheckBlock>
    );
};

export default OrderCheck;
