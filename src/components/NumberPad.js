import styled from "styled-components";

const NumberPadBlock = styled.div`
  height: 340px;
  padding: 20px;
  box-sizing: border-box;
  
  .number-grid {
    height: 300px;

    .number-row {
      height: 67.5px;

      .number {
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        line-height: 67.5px;
        display: inline-block;
        height: 67.5px;
        width: 113.33333587646484px;
        border-radius: 10px;
        border: 2px solid #CB78FE;
        font-size: 30px;
      }

      .number + .number {
        margin-left: 10px;
      }
      
      .btn {
        background: #F9D2FF;
      }
    }
    .number-row + .number-row {
      margin-top: 10px;
    }
  }
`;

const NumberPad = ({numberPadClick, onClickComplete, onClickCancel}) => {

    return (
        <NumberPadBlock>
            <div className="number-grid">
                <div className="number-row">
                    <div className="number" onClick={()=>numberPadClick(7)}>7</div>
                    <div className="number" onClick={()=>numberPadClick(8)}>8</div>
                    <div className="number" onClick={()=>numberPadClick(9)}>9</div>
                </div>
                <div className="number-row">
                    <div className="number" onClick={()=>numberPadClick(4)}>4</div>
                    <div className="number" onClick={()=>numberPadClick(5)}>5</div>
                    <div className="number" onClick={()=>numberPadClick(6)}>6</div>
                </div>
                <div className="number-row">
                    <div className="number" onClick={()=>numberPadClick(1)}>1</div>
                    <div className="number" onClick={()=>numberPadClick(2)}>2</div>
                    <div className="number" onClick={()=>numberPadClick(3)}>3</div>
                </div>
                <div className="number-row">
                    <div className="number btn" onClick={onClickCancel}>취소</div>
                    <div className="number" onClick={()=>numberPadClick(0)}>0</div>
                    <div className="number btn" onClick={onClickComplete}>완료</div>
                </div>
            </div>
        </NumberPadBlock>
    );
};

export default NumberPad;