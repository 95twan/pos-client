import styled from "styled-components";
import AdminMenuList from "./AdminMenuList";

const AdminBlock = styled.div`
  background: #FFFFFF;
  width: 400px;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Admin = ({showModal, hideModal, currentPassword, setCurrentPassword}) => {
    return (
        <AdminBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <AdminMenuList showModal={showModal} hideModal={hideModal} currentPassword={currentPassword}
                           setCurrentPassword={setCurrentPassword}/>
        </AdminBlock>
    );
};

export default Admin;
