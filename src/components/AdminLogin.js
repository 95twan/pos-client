import styled from "styled-components";
import {useState} from "react";
import NumberPad from "./NumberPad";

const PasswordBlock = styled.div`
  background: #FFFFFF;
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    position: relative;
    height: 100px;

    .title-text {
      position: absolute;
      text-align: center;
      font-size: 24px;

      left: 50%;
      top: 52%;
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

const PasswordNumber = styled.div`
  display: inline-block;
  height: 60px;
  width: 60px;
  background: #C4C4C4;
  border-radius: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 60px;
  font-size: 28px;

  & + & {
    margin-left: 10px;
  }
`;

const AdminLogin = ({title, success}) => {
    const [password, setPassword] = useState(['', '', '', ''])
    const numberPadClick = (n) => {
        for (let i = 0; i < 4; i++) {
            if (password[i] === '') {
                const newPassword = []
                newPassword.push(...password.slice(0, i))
                newPassword.push(n)
                newPassword.push(...password.slice(i + 1))
                setPassword(newPassword);
                break;
            }
        }
    }

    const onClickComplete = (password) => {
        success(password);
        setPassword(['', '', '', ''])
    }

    return (
        <PasswordBlock onClick={(e) => {
            e.stopPropagation();
        }}>
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
            <NumberPad numberPadClick={numberPadClick} onClickComplete={() => onClickComplete(password.join(''))}/>
        </PasswordBlock>
    );
};

export default AdminLogin;
