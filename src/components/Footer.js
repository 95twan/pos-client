import styled from "styled-components";
import {Icon} from '@iconify/react';
import {Link} from "react-router-dom";

const FooterBlock = styled.div`
  box-sizing: border-box;
  height: 50px;
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  background: #838383;
`;

const BackBtnBlock = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  width: 90px;
  height: 35px;
  color: #000000;

  svg {
    background: white;
    width: 35px;
    height: 35px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    border-radius: 17.5px;
    transform: translateY(-50%);
  }

  .text {
    display: inline-block;
    width: 50px;
    color: #ffffff;
    font-size: 18px;
    text-align: right;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translateY(-50%);
  }
`;

const Footer = ({showStandBy}) => {
    return (
        <FooterBlock>
            <Link to="/" style={{textDecoration: 'none'}}>
                <BackBtnBlock onClick={showStandBy}>
                    <Icon icon="bi:arrow-left-circle-fill" height="32"/>
                    <div className="text">나가기</div>
                </BackBtnBlock>
            </Link>
        </FooterBlock>
    );
};

export default Footer;
