import styled from "styled-components";

const ModalBlock = styled.div`
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 1200px;
  top: 0;
  left: auto;
`;

const Modal = ({hideModal, children}) => {
    return (
        <ModalBlock onClick={hideModal}>
            {children}
        </ModalBlock>
    );
};

export default Modal;
