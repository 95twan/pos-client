import styled from "styled-components";
import {Icon} from '@iconify/react';
import ModalCart from "../../components/ModalCart";
import TakeOutOrEatIn from "./TakeOutOrEatIn";
import {useEffect, useState} from "react";

const OrderBarBlock = styled.div`
  height: 60px;
  padding: 0 20px;
  margin-bottom: 10px;
`;

const CartBtnBlock = styled.div`
  display: inline-block;
  cursor: pointer;
  width: 117px;
  height: 60px;
  margin-right: 10px;
  border: 1px solid #CB78FE;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  text-align: center;
  padding-top: 10px;

`;
const OrderBtnBlock = styled.div`
  display: inline-block;

  width: 430px;
  height: 60px;

  border-radius: 10px;
  overflow: hidden;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 22px;

  &.activate {
    cursor: pointer;
    background: #CB78FE;
  }

  &.deactivate {
    cursor: none;
    pointer-events: none;
    background: #7a7a7a;
  }
`;

const OrderBar = ({cart, addCount, minusCount, showModal, hideModal}) => {
    const showCart = () => {
        showModal();
        showModal(<ModalCart cart={cart} addCount={addCount} minusCount={minusCount}/>);
    };

    const showTakeOutOrEatIn = () => {
        showModal(<TakeOutOrEatIn hideModal={hideModal}/>);
    };

    const [activeOrderBtn, setActivateBtn] = useState(false)

    useEffect(() => {
        if (cart.length === 0) setActivateBtn(false);
        else setActivateBtn(true);
    }, [cart])

    return (
        <OrderBarBlock>
            <CartBtnBlock onClick={showCart}>
                <Icon icon="emojione-monotone:shopping-cart" height="40" hFlip={true}/>
            </CartBtnBlock>
            <OrderBtnBlock className={activeOrderBtn ? "activate" : "deactivate"} onClick={showTakeOutOrEatIn}>
                결재하기
            </OrderBtnBlock>
        </OrderBarBlock>
    );
};

export default OrderBar;
