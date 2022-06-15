import styled from "styled-components";

const StandbyBlcok = styled.div`
  background: #ffffff;
  cursor: pointer;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 1200px;
  top: 0;
  left: auto;
  
  .promotion {
    background: #F9D2FF;
    width: 600px;
    height: 940px;
  }
  
  .please-touch {
    width: 600px;
    height: 260px;
    text-align: center;
    line-height: 260px;
    font-size: 36px;
  }
`;

const Standby = ({hideStandby}) => {
    return (
        <StandbyBlcok onClick={hideStandby}>
            <div className="promotion">

            </div>
            <div className="please-touch">
                화면을 터치해주세요
            </div>
        </StandbyBlcok>
    );
};

export default Standby;
