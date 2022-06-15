import styled from "styled-components";
import {Icon} from '@iconify/react';

const CartItemBlock = styled.div`
  height: 240px;
  background: #ffffff;
  box-sizing: border-box;
  padding: 20px;

  & + & {
    margin-top: 10px;
  }

  .menu-detail-block {
    height: 90px;
    margin-bottom: 10px;
    position: relative;

    .menu-name {
      position: absolute;
      width: 200px;
      font-size: 18px;
      top: 0;
      left: 0;
    }

    .menu-img {
      position: absolute;
      width: 90px;
      height: 90px;
      text-align: center;
      top: 0;
      right: 0;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .menu-price {
      position: absolute;
      width: 200px;
      bottom: 0;
      left: 0;
      font-size: 18px;
      color: #ff0000;
    }
  }

  .line-black {
    border: 1px solid black;
    margin-bottom: 20px;
  }

  .menu-count-block {
    height: 20px;
    margin-bottom: 20px;
    position: relative;

    .menu-count-title {
      font-size: 18px;
      position: absolute;
      top: 0;
      left: 0;
    }

    .menu-counter {
      position: absolute;
      background: #F3F3F3;
      width: 100px;
      height: 20px;
      top: 0;
      right: 0;
      border-radius: 5px;
      overflow: hidden;

      .menu-counter-plus-btn {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: relative;
        top: 0;
        left: 0;
      }

      .menu-counter-number {
        display: inline-block;
        width: 60px;
        height: 20px;
        text-align: center;
        top: 0;
        font-size: 18px;
        position: relative;
        overflow: hidden;
      }

      .menu-counter-minus-btn {
        display: inline-block;
        width: 20px;
        height: 20px;
        cursor: pointer;
        position: relative;
        top: 0;
        right: 0;
      }
    }
  }

  .menu-total-price-block {
    height: 20px;
    position: relative;

    .menu-total-price-title {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 18px;
      font-weight: bold;
      line-height: 21px;
    }

    .menu-total-price {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 18px;
      color: #ff0000;
      font-weight: bold;
      text-align: right;
      line-height: 21px;
    }
  }
`;

const CartItem = ({addCount, minusCount, cartItem}) => {
    const {id, name, imageUrl, price, count} = cartItem;
    return (
        <CartItemBlock>
            <div className="menu-detail-block">
                <div className="menu-name">{name}</div>
                <div className="menu-img"><img alt="징거버거" src={imageUrl}/></div>
                <div className="menu-price">{price}</div>
            </div>
            <div className="line-black"/>
            <div className="menu-count-block">
                <div className="menu-count-title">수량</div>
                <div className="menu-counter">
                    <div className="menu-counter-plus-btn" onClick={() => addCount(id)}>
                        <Icon icon="bi:plus-square-fill" height="20"/>
                    </div>
                    <div className="menu-counter-number">{count}</div>
                    <div className="menu-counter-minus-btn" onClick={() => minusCount(id)}>
                        <Icon icon="bi:dash-square-fill" height="20"/>
                    </div>
                </div>
            </div>
            <div className="line-black"/>
            <div className="menu-total-price-block">
                <div className="menu-total-price-title">합계금액</div>
                <div className="menu-total-price">{(count * price).toLocaleString('ko-KR')}</div>
            </div>
        </CartItemBlock>
    );
};

export default CartItem;
