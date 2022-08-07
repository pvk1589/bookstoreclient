import React, { useEffect } from 'react';
import { Box, Paper, TextField, Typography ,Button} from '@material-ui/core';
import * as yup  from 'yup';
import makeStyle from './LoginStyle';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {loginAction} from '../../module/user/userActions';
import { getUserPromise } from '../../module/user/userSelector';
import {useSnackbar} from 'notistack';
import {useNavigate} from 'react-router-dom';


const validationSchema = yup.object({
    email:yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
    password:  yup
    .string('Enter your password')
    .min(8,'Password minimum of 8 characters')
    .required('Password required.')
});

const Login = () => {
    const classes = makeStyle();
    const dispatch = useDispatch();
    const loginPromise = useSelector(getUserPromise);
    const {enqueueSnackbar} = useSnackbar();
    const navigate = useNavigate();

    useEffect(()=>{
        if(loginPromise.isErrorOcurred) {
            enqueueSnackbar('Username and password wrong!',{
                variant: 'error'
            });
        } else if(loginPromise.isFulfilled) {
            enqueueSnackbar('Login success',{
                variant: 'success'
            });
            navigate('/');
        }

    },[loginPromise,enqueueSnackbar,navigate ]);


    const formik = useFormik({
        initialValues: {
            email:'',
            password:''
        },
        validationSchema : validationSchema,
        onSubmit: (values) => {
            dispatch(loginAction(values.email, values.password))
        }
    }) 

    return (
        <form autoComplete='off' noValidate onSubmit={formik.handleSubmit}>
            <Box className={classes.wrapper}>
                <Paper className={classes.paper}>
                    <Typography varient='h4'>Book Store Login</Typography>
                    <TextField 
                    className={classes.topMargin}
                        name='email'
                        id='email'
                        data-testid='email-testid'
                        label = "Enter email address"
                        variant='outlined'
                        placeholder='Enter email address'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        helperText={formik.touched.email && formik.errors.email}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                    />
                     <TextField 
                      className={classes.topMargin}
                        name='password'
                        id='password'
                        data-testid='password-testid'
                        label = "Enter password"
                        variant='outlined'
                        placeholder='Enter password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        helperText={formik.touched.password && formik.errors.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}

                    />
                    <Button type='submit'  className={classes.topMargin}
                    variant="contained" 
                    color="primary"
                    disabled={loginPromise.isPending}
                    >Login</Button>

                </Paper>
            </Box>
        </form>
    );
}

export default Login;