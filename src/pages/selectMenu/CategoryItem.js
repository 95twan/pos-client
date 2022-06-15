import styled from "styled-components";

const CategoryItemBlock = styled.div`
  display: inline-block;
  width: 80px;
  height: 70px;
  line-height: 70px;
  background: #F9D2FF;
  vertical-align: bottom;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }

  &.checked {
    background: #ffffff;
  }
  
  .title {
    text-align: center;
  }
`;

const CategoryItem = ({category, onClick}) => {
    const {id, name, checked} = category

    return (
        <CategoryItemBlock className={checked ? 'checked' : ''} onClick={() => onClick(id)}>
            <div className="title">{name}</div>
        </CategoryItemBlock>
    );
};

export default CategoryItem;

