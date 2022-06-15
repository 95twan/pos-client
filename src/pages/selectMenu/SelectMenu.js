import styled from "styled-components";
import CategoryList from "./CategoryList";
import MenuGrid from "./MenuGrid";
import SlideBar from "./SlideBar";
import OrderBar from "./OrderBar";
import {useCallback, useEffect, useState} from "react";
import usePromise from "../../lib/usePromise";
import axios from "axios";
import {API_HOST} from "../../lib/env";
import {Oval} from "react-loader-spinner";

const SelectMenuBlock = styled.div`
  height: 1110px;
`;

const LoaderBlock = styled.div`
  height: 830px;
  margin-bottom: 20px;
  position: relative;

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SelectMenu = ({cart, addCount, minusCount, addCart, showModal, hideModal}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [menusWithDummy, setMenusWithDummy] = useState([])
    const [menus, setMenus] = useState([]);
    const [page, setPage] = useState(0);
    const [menuPerPageCount] = useState(16);
    const [totalPage, setTotalPage] = useState(1)
    const [loading, response, error] = usePromise(() => {
        if (selectedCategory) {
            return axios.get(`${API_HOST}/categories/${selectedCategory.id}/menus?page=${page}&size=${menuPerPageCount}/`);
        }
    }, [selectedCategory, page, menuPerPageCount])
    const addDummyMenu = useCallback((data) => {
        const menusWithDummy = [...data];
        let id = 1;
        if (menusWithDummy.length !== 0) {
            id = menusWithDummy[menusWithDummy.length - 1].id;
        }
        for (let i = menusWithDummy.length; i !== menuPerPageCount; i++) {
            menusWithDummy.push({
                id: ++id,
                imageUrl: '',
                name: '',
                price: '',
            });
        }
        return menusWithDummy;
    }, [menuPerPageCount]);

    useEffect(() => {
        if (response) {
            setMenus(response.data.content)
            setTotalPage(response.data.totalPages === 0 ? 1 : response.data.totalPages)
        }
    }, [response])

    useEffect(() => {
        setMenusWithDummy(addDummyMenu(menus))
    }, [menus, addDummyMenu])

    const prevPage = () => {
        if (page > 0) setPage(page - 1);
    };

    const nextPage = () => {
        if (totalPage - 1 > page) setPage(page + 1);
    };

    const loader = (
        <LoaderBlock>
            <Oval color="#CB78FE" secondaryColor="#F9D2FF" height={150} width={150} strokeWidth={4}/>
        </LoaderBlock>
    )

    return (
        <SelectMenuBlock>
            <CategoryList setSelectedCategory={setSelectedCategory}/>
            {loading || !response || error ? loader : <MenuGrid addCart={addCart} menus={menusWithDummy}/>}
            <SlideBar totalPage={totalPage} currentPage={page} prevPage={prevPage} nextPage={nextPage}/>
            <OrderBar cart={cart} addCount={addCount} minusCount={minusCount} showModal={showModal}
                      hideModal={hideModal}/>
        </SelectMenuBlock>
    )
};

export default SelectMenu;
