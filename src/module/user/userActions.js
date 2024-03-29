import { login } from "./userService"


export const loginAction = (email, password) => async (dispatch) => {

    try {
        dispatch({ type: 'USER_PENDING' });
        const response = await login(email, password);
        window.localStorage.setItem('bookstore-token', response.data.token);
        //localStorage.setItem('bookstore-token', response.data.token);

        dispatch({
            type: 'USER_LOGIN',
            payload: response.data
        });
        dispatch({ type: 'USER_SUCCESS' });
    } catch {
        dispatch({ type: 'USER_ERROR' });
    }


}