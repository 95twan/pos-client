import styled from "styled-components";

const MenuItemBlock = styled.div`
  display: inline-block;
  width: 132.5px;
  height: 195px;
  cursor: pointer;
  border: 1px solid #CB78FE;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  
  &:active {
    background-color: rgba(226, 179, 255, 0.7);
  }

  & + & {
    margin-left: 10px;
  }
  
  .menu-image {
    height: 125px;
    text-align: center;
    img {
      width:100%;
      height:100%;
      object-fit: scale-down;
    }
  }
  
  .menu-detail {
    height: 42px;
    text-align: center;
    overflow: hidden;
    padding-top: 14px;
    
    .menu-title {
      font-size: 14px;
    }
    .menu-price {
      font-size: 18px;
    }
  }
`;

const MenuItem = ({addCart, menu}) => {
    const {imageUrl, name, price} = menu;
    const clickMenu = () => {
        if(name !== '') addCart(menu)
    }
    return (
        <MenuItemBlock onClick={clickMenu}>
            <div className="menu-image">
                {imageUrl !== '' ? <img alt={name} src={imageUrl}/> : null}
            </div>
            <div className="menu-detail">
                <div className="menu-title">
                    {name}
                </div>
                <div className="menu-price">
                    {price.toLocaleString('ko-KR')}
                </div>
            </div>
        </MenuItemBlock>
    );
};

export default MenuItem;
