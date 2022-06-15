import styled from "styled-components";
import MenuItem from "./MenuItem";

const MenuGridRowBlock = styled.div`
  height: 195px;

  & + & {
    margin-top: 10px;
  }
`;

const MenuGridRow = ({addCart, menus}) => {
    return (
        <MenuGridRowBlock>
            {menus.map(menu => (
                <MenuItem addCart={addCart} key={menu.id} menu={menu}/>
            ))}
        </MenuGridRowBlock>
    );
};

export default MenuGridRow;
