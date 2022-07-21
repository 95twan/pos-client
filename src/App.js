import Header from "./components/Header";
import SelectMenu from "./pages/selectMenu/SelectMenu";
import Footer from "./components/Footer";
import styled from "styled-components";
import {useCallback, useEffect, useState} from "react";
import Standby from "./components/Standby";
import {Route, Routes} from "react-router-dom"
import OrderCheck from "./pages/orderCheck/OrderCheck";
import SelectPay from "./pages/selectPay/SelectPay";
import CreditCard from "./pages/payment/CreditCard";
import OrderComplete from "./pages/orderComplete/OrderComplete";
import Modal from "./components/Modal";
import ModalCart from "./components/ModalCart";
import AdminLogin from "./components/AdminLogin";
import {POS_PASSWORD} from "./lib/env";

const Template = styled.div`
  background: #ffffff;
  margin-left: auto;
  margin-right: auto;
  width: 600px;
  height: 1200px;
`;

const App = () => {
    const [standby, setStandBy] = useState(true);
    const [modal, setModal] = useState(false);
    const [modalChildren, setModalChildren] = useState(null);
    const [cart, setCart] = useState([]);
    const [lock, setLock] = useState(true)
    const [currentPassword, setCurrentPassword] = useState(POS_PASSWORD);

    const hideModal = () => {
        setModal(false);
    };
    const showModal = (children) => {
        setModalChildren(children)
        setModal(true);
    };
    const showStandBy = () => {
        setStandBy(true);
    };
    const hideStandBy = () => {
        setStandBy(false);
    };
    const loginSuccess = (password) => {
        if (currentPassword === password) {
            setLock(false);
        }
    }

    const addCart = (menu) => {
        let exist = false;
        const newCart = cart.map(cartItem => {
            if (cartItem.id === menu.id) {
                exist = true
                return {
                    ...cartItem,
                    count: cartItem.count + 1
                }
            }
            return cartItem
        })
        if (!exist) {
            setCart([
                ...newCart,
                {
                    id: menu.id,
                    name: menu.name,
                    count: 1,
                    imageUrl: menu.imageUrl,
                    price: menu.price
                }
            ]);
        } else {
            setCart(newCart);
        }
    };

    const addCount = useCallback((menuId) => {
        setCart(cart.map(cartItem =>
            cartItem.id === menuId ? {
                ...cartItem,
                count: cartItem.count + 1
            } : cartItem
        ));
    }, [cart]);

    const minusCount = useCallback((menuId) => {
        const findCardItem = cart.find(cartItem => cartItem.id === menuId);
        findCardItem.count -= 1

        if (findCardItem.count === 0) {
            setCart(cart.filter(cartItem => cartItem.id !== menuId))
        } else {
            setCart(cart.map(cartItem =>
                cartItem.id === menuId ? {
                    ...findCardItem
                } : cartItem
            ));
        }
    }, [cart]);

    useEffect(() => {
        setModalChildren(<ModalCart cart={cart} addCount={addCount} minusCount={minusCount}/>);
    }, [cart, addCount, minusCount])

    return (
        <Template>
            <Header showModal={showModal} hideModal={hideModal} currentPassword={currentPassword}
                    setCurrentPassword={setCurrentPassword}/>
            <Routes>
                <Route path="/" element={<SelectMenu cart={cart} addCount={addCount} minusCount={minusCount}
                                                     addCart={addCart} showModal={showModal} hideModal={hideModal}/>}/>
                <Route path="/order-check"
                       element={<OrderCheck cart={cart} addCount={addCount} minusCount={minusCount}/>}/>
                <Route path="/select-pay" element={<SelectPay/>}/>
                <Route path="/credit-card"
                       element={<CreditCard cart={cart} showModal={showModal} hideModal={hideModal}/>}/>
                <Route path="/order-complete" element={<OrderComplete showStandBy={showStandBy} setCart={setCart}/>}/>
            </Routes>
            <Footer showStandBy={showStandBy}/>
            {modal && <Modal hideModal={hideModal} children={modalChildren}/>}
            {standby && <Standby hideStandby={hideStandBy}/>}
            {lock && <Modal
                children={<AdminLogin login={true} hideModal={hideModal} currentPassword={currentPassword}
                                      title="관리자 암호 입력" success={loginSuccess}/>}/>}
        </Template>
    );
}

export default App;
