import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Box } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import BookFilter from "./BookFilter";
import styles from './BookStyle'
import { getBooksSelector, getBookPromiseSelector } from "./bookSelector";
import { getBooksAction } from "../../module/book/bookAction"; import { useEffect } from "react";
import BookList from "./BookList";




const BookContainer = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooksAction());
    }, [dispatch]);

    const books = useSelector(getBooksSelector);
    const bookPromise = useSelector(getBookPromiseSelector);
    const classes = styles();
    return (
        <Box className={classes.bookContainer}>
            <BookFilter />
            <Box className={classes.bookList}>
                {
                    bookPromise.isPending && (
                        <Box ml={5}>
                            <Skeleton
                                data-testid='book-loader' variant='rect' animation='pulse' with="80%"
                                height={200} />
                        </Box>
                    )
                }
                {
                    bookPromise.isErrorOcurred && (<div data-testid='book-error-message'> Error message ...</div>)
                }
                {
                    bookPromise.isFulfilled && <BookList books={books} />
                }

            </Box>
        </Box>
    )

}

export default BookContainer;