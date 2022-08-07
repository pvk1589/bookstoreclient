import React,{ useEffect } from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { getUserToken } from '../../module/user/userSelector';
import BookContainer from '../book/BookContainer';

const Auth = () => {
    const navigate = useNavigate();
    const token = useSelector(getUserToken);

    useEffect(()=>{
        if(!token) {
            navigate("/login");
        } else {
            return <BookContainer />;
        }

    },[navigate]);


    const getView = () =>{
        if(!token) {
            navigate("/login");
        } else {
            return <BookContainer />;
       
        }
    }
       

    return <>{getView()}</>
}

export default Auth;
