import styled from "styled-components";
import {Icon} from '@iconify/react';

const SlideBarBlock = styled.div`
  height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;

  .slide-status {
    display: inline-block;
    width: 400px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    overflow: hidden;

    .slide-status-dots {
      display: inline-block;
      width: 110px;
      height: 20px;
      line-height: 20px;
      overflow: hidden;
    }
  }
`;

const ArrowBtnBlock = styled.div`
  display: inline-block;
  width: 80px;
  height: 50px;
  border: 1px solid #CB78FE;
  box-sizing: border-box;
  border-radius: 10px;
  overflow: hidden;
  color: #CB78FE;

  &.active {
    background: #CB78FE;
    cursor: pointer;

    svg {
      color: #ffffff
    }
  }
`;

const DotBlock = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  box-sizing: border-box;
  border: 1px solid #CB78FE;

  &.active {
    background: #CB78FE;
  }

  & + & {
    margin-left: 10px;
  }
`;

const SlideBar = ({prevPage, nextPage, currentPage, totalPage}) => {

    const dotsRender = () => {
        const dots = [];
        for (let i = 0; i < totalPage; i++) {
            if (currentPage === i) dots.push(<DotBlock key={i} className="active"/>);
            else dots.push(<DotBlock key={i}/>)
        }
        return dots
    };

    return (
        <SlideBarBlock>
            <ArrowBtnBlock className={currentPage === 0 ? '' : 'active'} onClick={prevPage}>
                <Icon icon="bi:arrow-left" height="100%" width="100%"/>
            </ArrowBtnBlock>
            <div className="slide-status">
                <div className="slide-status-dots">
                    {dotsRender()}
                </div>
            </div>
            <ArrowBtnBlock className={totalPage - 1 === currentPage ? '' : 'active'} onClick={nextPage}>
                <Icon icon="bi:arrow-right" height="100%" width="100%"/>
            </ArrowBtnBlock>
        </SlideBarBlock>
    );
};

export default SlideBar;
