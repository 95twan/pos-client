import styled from "styled-components";
import Cart from "./Cart";

const ModalCartBlock = styled.div`
  width: 500px;
  height: 750px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


const ModalCart = ({cart, addCount, minusCount}) => {
    const cartListSize = {
        height: "618px"
    }
    return (
        <ModalCartBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <Cart cart={cart} addCount={addCount} minusCount={minusCount} cartListSize={cartListSize}/>
        </ModalCartBlock>
    );
};

export default ModalCart;
