import styled from "styled-components";
import {useEffect, useState} from "react";
import NumberPad from "./NumberPad";

const PasswordBlock = styled.div`
  background: #FFFFFF;
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .top-margin {
    height: 30px;
  }

  .title {
    position: relative;
    height: 60px;
    margin-bottom: 10px;

    .title-text {
      position: absolute;
      text-align: center;
      font-size: 24px;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .password-block {
    position: relative;
    height: 60px;

    .password {
      position: absolute;
      height: 60px;
      width: 270px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const ExitButtonBlock = styled.div`
  height: 30px;
  width: 30px;
  cursor: pointer;
  margin-left: auto;
  margin-right: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid red;
  background-color: lightgray;
  background-image: url("img/exit.png");
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
`

const PasswordNumber = styled.div`
  display: inline-block;
  height: 60px;
  width: 60px;
  background: #C4C4C4;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  font-size: 28px;

  & + & {
    margin-left: 10px;
  }
`;

const AdminLogin = ({login, hideModal, title, success}) => {
    const [password, setPassword] = useState(['', '', '', '']);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(password[3] !== '') setActive(true);
        else setActive(false);
    }, [password])

    const numberPadClick = (n) => {
        if (password[3] !== '') return;
        for (let i = 0; i < 4; i++) {
            if (password[i] === '') {
                const newPassword = [];
                newPassword.push(...password.slice(0, i));
                newPassword.push(n);
                newPassword.push(...password.slice(i + 1));
                setPassword(newPassword);
                break;
            }
        }
    }

    const onClickComplete = (password) => {
        success(password);
        setPassword(['', '', '', ''])
    }

    const onClickCancel = () => {
        if (password[0] === '') return;
        for (let i = 3; i >= 0; i--) {
            if (password[i] !== '') {
                const newPassword = []
                newPassword.push(...password.slice(0, i))
                newPassword.push('')
                newPassword.push(...password.slice(i + 1))
                setPassword(newPassword);
                break;
            }
        }
    }

    return (
        <PasswordBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <div className="top-margin">
                {!login && <ExitButtonBlock onClick={hideModal}/>}
            </div>
            <div className="title">
                <div className="title-text">{title}</div>
            </div>
            <div className="password-block">
                <div className="password">
                    {password.map((number, index) => (
                        <PasswordNumber key={index}>{number}</PasswordNumber>
                    ))}
                </div>
            </div>
            <NumberPad active={active} numberPadClick={numberPadClick} onClickComplete={() => onClickComplete(password.join(''))}
                       onClickCancel={onClickCancel}/>
        </PasswordBlock>
    );
};

export default AdminLogin;
