import styled from "styled-components";
import MenuGridRow from "./MenuGridRow";

const MenuGridBlock = styled.div`
  height: 810px;
  padding: 20px 20px 0 20px;
  margin-bottom: 20px;
`;

const MenuGrid = ({menus, addCart}) => {
    const menuPerRowCount = 4;
    const menuPerRow = [];
    for (let i = 0; i < menus.length; i += menuPerRowCount) menuPerRow.push(menus.slice(i, i + menuPerRowCount));

    return (
        <MenuGridBlock>
            {menuPerRow.map((menus, index) => (
                <MenuGridRow addCart={addCart} key={index} menus={menus}/>
            ))}
        </MenuGridBlock>
    );
};

export default MenuGrid;
