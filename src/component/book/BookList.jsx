import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import BookListItem, { boookPropTypes } from './BookListItem';
import makeStyles from './BookStyle';


const propTypes = {
    books: PropTypes.arrayOf(boookPropTypes).isRequired
};

const BookList = ({ books }) => {
    const classes = makeStyles();

    return (

        <Box className={classes.BookList} ml={5}>

            {books.map((book) => {

                return <BookListItem book={book} key={book.id} />

            })}
        </Box>

    )
}

BookList.propTypes = propTypes;

export default BookList