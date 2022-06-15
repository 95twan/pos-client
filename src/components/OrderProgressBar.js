import styled from "styled-components";

const OrderProgressBarBlock = styled.div`
  width: 600px;
  height: 80px;
  background: #CB78FE;
`;

const OrderProgressItem = styled.div`
  background: #ffffff;
  display: inline-block;
  width: 148.5px;
  height: 80px;
  line-height: 80px;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
  
  & + & {
    margin-left: 2px;  
  }
  
  &.active {
    background: #E2B3FF;
  }
`;

const OrderProgressBar = ({progressStage}) => {
    return (
        <OrderProgressBarBlock>
            <OrderProgressItem className={ progressStage >= 1 ? 'active' : ''}>주문확인</OrderProgressItem>
            <OrderProgressItem className={ progressStage >= 2 ? 'active' : ''}>결재수단선택</OrderProgressItem>
            <OrderProgressItem className={ progressStage >= 3 ? 'active' : ''}>결재</OrderProgressItem>
            <OrderProgressItem className={ progressStage >= 4 ? 'active' : ''}>주문완료</OrderProgressItem>
        </OrderProgressBarBlock>
    );
};

export default OrderProgressBar;
