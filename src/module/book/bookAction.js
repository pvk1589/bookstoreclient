import { getBooksSerive, getBooksByTitleService } from "./bookService";


export const getBooksByTitle = (title) => async (dispatch) => {
    try {
        dispatch({ type: 'BOOKLISTPENDING' });
        const books = await getBooksByTitleService(title);
        dispatch({
            type: 'BOOKSBYTITLE',
            payload: books.data
        });
        dispatch({ type: 'BOOKLISTFULFILLED' });

    } catch (error) {
        console.log(error);
        dispatch({ type: 'BOOKLISTERROR' });
    }

}

export const getBooksAction = () => async (dispatch) => {

    try {
        dispatch({ type: 'BOOKLISTPENDING' });
        const books = await getBooksSerive();
        dispatch({
            type: 'BOOKLIST',
            payload: books.data
        });
        dispatch({ type: 'BOOKLISTFULFILLED' });
    } catch (error) {
        console.log(error);
        dispatch({ type: 'BOOKLISTERROR' });
    }
}