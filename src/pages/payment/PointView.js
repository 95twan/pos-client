import styled from "styled-components";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {API_HOST} from "../../lib/env";

const PointViewBlock = styled.div`
  background: #FFFFFF;
  height: 300px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const TitleBlock = styled.div`
  width: 500px;
  height: 94px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    font-size: 36px;
    text-align: center;

    .text-red {
      color: red;
    }
  }
`;

const PointView = ({hideModal, orderNumber, point, userId}) => {
    const [totalPoint, setTotalPoint] = useState(0)

    const navigate = useNavigate();

    setTimeout(() => {
        hideModal();
    }, 4000);

    useEffect(() => {
        axios.get(`${API_HOST}/users/${userId}/point/`)
            .then((res) => {
                setTotalPoint(res.data.data.point)
            })
            .catch(() => {
                console.log('error')
            })
    }, [userId])

    useEffect(() => {
        return () => {
            navigate("/order-complete", {state: orderNumber});
        }
    }, [orderNumber, navigate]);

    return (
        <PointViewBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <TitleBlock>
                <div className="title">적립된 포인트: <span className="text-red">{point}점</span></div>
                <div className="title">총 포인트: <span className="text-red">{totalPoint}점</span></div>
            </TitleBlock>

        </PointViewBlock>
    );
};

export default PointView;
