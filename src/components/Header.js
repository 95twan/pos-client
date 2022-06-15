import styled from "styled-components";
import {useEffect, useState} from "react";
import AdminLogin from "./AdminLogin";
import Admin from "./Admin";

const HeaderBlock = styled.div`
  height: 40px;
  background: #838383;
  padding: 0 20px;
  line-height: 40px;

  .time {
    cursor: pointer;
    color: #ffffff;
    text-align: right;
  }
`;

const Header = ({showModal, hideModal, currentPassword, setCurrentPassword}) => {
    const [date, setDate] = useState(new Date())

    const tick = () => {
        setDate(new Date())
    }

    const loginSuccess = (password) => {
        if (currentPassword === password) {
            showModal(<Admin showModal={showModal} hideModal={hideModal} currentPassword={currentPassword}
                             setCurrentPassword={setCurrentPassword}/>)
        }
    }

    useEffect(() => {
        const timer = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timer)
        }
    })

    const showAdmin = () => {
        showModal(<AdminLogin currentPassword={currentPassword} title="관리자 암호 입력" success={loginSuccess}/>);
    }

    return (
        <HeaderBlock>
            <div className="time" onDoubleClick={showAdmin}>{date.toLocaleTimeString()}</div>
        </HeaderBlock>
    );
};

export default Header;
