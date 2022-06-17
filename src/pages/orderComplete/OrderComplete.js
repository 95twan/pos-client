import styled from "styled-components";
import OrderProgressBar from "../../components/OrderProgressBar";
import {useLocation, useNavigate} from "react-router-dom";
import {useEffect} from "react";

const OrderCompleteBlock = styled.div`
  width: 600px;
  height: 1110px;
  
  .orderComplete {
    position: relative;
    width: 600px;
    height: 1030px;

    .text-block {
      position: absolute;
      height: 117px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      
      .text {
        text-align: center;
        font-size: 36px;
        font-weight: bold;
      }
      
      .number {
        text-align: center;
        color: #ff0000;
        font-size: 64px;
        font-weight: bold;
      }
    }
  }
`;

const OrderComplete = ({showStandBy, setCart}) => {

    const { state: orderNumber } = useLocation();

    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/");
    }, 4000);

    useEffect(() => {
        return () => {
            setCart([]);
            showStandBy()
        };
    }, []);

    return (
        <OrderCompleteBlock>
            <OrderProgressBar progressStage={4}/>
            <div className="orderComplete">
                <div className="text-block">
                    <div className="text">주문번호</div>
                    <div className="number">{ orderNumber }</div>
                </div>
            </div>
        </OrderCompleteBlock>
    );
};

export default OrderComplete;
