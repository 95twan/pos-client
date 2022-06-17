import styled from "styled-components";
import AdminLogin from "./AdminLogin";

const AdminMenuListBlock = styled.div`
  width: 360px;
  height: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AdminMenuItem = styled.div`
  cursor: pointer;
  height: 50px;
  width: 360px;
  background: #F9D2FF;
  border-radius: 10px;
  font-size: 24px;
  text-align: center;
  line-height: 50px;
  
  &.last {
    position: absolute;
    bottom: 0;
    background: white;
    border: 2px solid #F9D2FF;
    box-sizing: border-box;
  }
`

const AdminMenuList = ({showModal, hideModal, currentPassword, setCurrentPassword}) => {
    const changePassword = (password) => {
        setCurrentPassword(password)
        hideModal()
    }

    const successLogin = (password) => {
        if (currentPassword === password) {
            showModal(<AdminLogin hideModal={hideModal} title="새로운 암호 입력" success={changePassword}/>)
        }
    }

    const onClickChangePasswordBtn = () => {
        showModal(<AdminLogin hideModal={hideModal} title="기존 암호 입력" success={successLogin}/>)
    }

    return (
        <AdminMenuListBlock>
            <AdminMenuItem onClick={onClickChangePasswordBtn}>
                비밀번호 변경
            </AdminMenuItem>
            <AdminMenuItem className="last" onClick={hideModal}>
                나가기
            </AdminMenuItem>
        </AdminMenuListBlock>
    )
};

export default AdminMenuList
