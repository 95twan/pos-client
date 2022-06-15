import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import {useEffect, useState} from "react";
import usePromise from "../../lib/usePromise";
import axios from "axios";
import {API_HOST} from "../../lib/env";
import {Oval} from "react-loader-spinner";

const CategoryListBlock = styled.div`
  height: 120px;
  line-height: 120px;
  background: #CB78FE;
  padding-right: 30px;
  padding-left: 30px;
`;

const LoaderBlock = styled.div`
  height: 120px;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const CategoryList = ({setSelectedCategory}) => {
    const [categories, setCategories] = useState([])
    const [loading, response, error] = usePromise(() => {
        return axios.get(`${API_HOST}/categories/`);
    }, [])
    useEffect(() => {
        if (response) {
            if (response.data.length !== 0) {
                const categories = response.data.map(category => ({
                    ...category,
                    checked: false
                }))
                categories[0].checked = true
                setSelectedCategory(categories[0])
                setCategories(categories)
            }
        }
    }, [response, setSelectedCategory])

    const loader = (
        <LoaderBlock>
            <Oval color="#CB78FE" secondaryColor="#F9D2FF" height={50} width={50} strokeWidth={4}/>
        </LoaderBlock>
    )

    const onClick = (id) => {
        setCategories(categories =>
            categories.map(category => category.id === id ? {...category, checked: true} : {
                ...category,
                checked: false
            })
        );
        setSelectedCategory(categories.find(category => category.id === id))
    };

    return (
        <>
            {loading || !response || error ? loader :
                <CategoryListBlock>
                    {categories.map(category => (
                        <CategoryItem key={category.id} category={category} onClick={onClick}/>
                    ))}
                </CategoryListBlock>}
        </>
    );
};

export default CategoryList;
