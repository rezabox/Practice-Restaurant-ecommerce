import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../../Components/admin/navbar/Navbar";
import Home from "../../Components/admin/home/Home";
import ViewProduct from "../../Components/admin/viewProducts/ViewProduct";
import AddProduct from "../../Components/admin/addProduct/AddProduct";
import Order from "../../Components/admin/orders/Order";
import styles from './Admin.module.scss';

const Admin = () => {
    return(
        <div className={styles.admin}>
            <div className={styles.navbar}>
                <Navbar/>
            </div>
            <div className={styles.content}>
              <Routes>
                 <Route path="home" element={<Home/>} />
                 <Route path="all-products" element={<ViewProduct/>} />
                 <Route path="add-product/ADD" element={<AddProduct/>}/>
                 <Route path="orders" element={<Order/>} />
              </Routes>                  
            </div>
        </div>
    )
}
export default Admin;