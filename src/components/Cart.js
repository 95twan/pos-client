import styled from "styled-components";
import CartItem from "./CartItem";

const CartListBlock = styled.div`
  height: ${props => props.height};
  background: #F9D2FF;
  box-sizing: border-box;
  padding-left: 20px;
  padding-top: 20px;
  padding-right: 20px;
  overflow-y: scroll;
`;
const PriceBlock = styled.div`
  height: 132px;
  box-sizing: border-box;
  padding: 20px;
  background: #ffffff;

  .price-block {
    height: 20px;
    margin-bottom: 10px;
    position: relative;

    .title {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 18px;
    }

    .price {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 18px;
      font-weight: bold;
    }
  }

  .total-price-block {
    height: 28px;
    position: relative;

    .title {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 24px;
      font-weight: bold;
    }

    .price {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 24px;
      font-weight: bold;
      color: #ff0000;
    }
`;

const Cart = ({cart, addCount, minusCount, cartListSize}) => {
    const cartListHeight = cartListSize.height;

    const orderedCost = cart.reduce((prev, current) => prev + (current.price * current.count), 0);
    const discountCost = 0;
    const totalCost = orderedCost - discountCost;

    return (
        <>
            <CartListBlock height={cartListHeight}>
                {cart.map(cartItem => (
                    <CartItem key={cartItem.id} addCount={addCount} minusCount={minusCount} cartItem={cartItem}/>
                ))}
            </CartListBlock>
            <PriceBlock>
                <div className="price-block">
                    <div className="title">주문금액</div>
                    <div className="price">{orderedCost.toLocaleString('ko-KR')}원</div>
                </div>
                <div className="price-block">
                    <div className="title">할인금액</div>
                    <div className="price">{discountCost.toLocaleString('ko-KR')}원</div>
                </div>
                <div className="total-price-block">
                    <div className="title">총 결제금액</div>
                    <div className="price">{totalCost.toLocaleString('ko-KR')}원</div>
                </div>
            </PriceBlock>
        </>
    );
}

export default Cart;
