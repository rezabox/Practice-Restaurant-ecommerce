import { Timestamp, addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { db, storage } from '../../../firebase/config';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';

const categories = [
    {id: 1, name:"همبرگر"},
    {id: 2, name:"پیتزا"},
    {id: 3, name:"ساندویچ"},
    {id: 4, name:"نوشیدنی"}
];
const initialState = {
    name: "",
    imageURL: "",
    price: 0,
    category:"",
    desc:"",
}


const AddProduct = () => { 
  return (
    <div className='product'>
       <h2>reza</h2>
       
    </div>
  )
}

export default AddProduct;
