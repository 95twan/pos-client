import styled from "styled-components";

const YesOrNoBlock = styled.div`
  background: #FFFFFF;
  height: 300px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .title {
    white-space: pre-line;
    width: 434px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 16.67%;
    font-size: 36px;
    text-align: center;
  }

  .btn {
    cursor: pointer;
    height: 60px;
    width: 120px;
    border-radius: 10px;
    font-size: 36px;
    color: #ffffff;
    text-align: center;
    line-height: 60px;
  }

  .ok {
    background: #FF0000;
    position: absolute;
    left: 11%;
    top: 57.33%;
  }

  .cancel {
    position: absolute;
    left: 65%;
    top: 57.33%;
    background: #000000;
  }
`;

const YesOrNo = ({title, onClickOk, onClickCancel}) => {

    return (
        <YesOrNoBlock onClick={(e) => {
            e.stopPropagation();
        }}>
            <div className="title">{title}</div>
            <div className="ok btn" onClick={onClickOk}>예</div>
            <div className="cancel btn" onClick={onClickCancel}>아니오</div>
        </YesOrNoBlock>
    );
};

export default YesOrNo;
