import React, { useState } from 'react'
import { Box, Paper, TextField, Typography, Button } from '@material-ui/core'
import { useDispatch } from "react-redux/es/exports";
import styles from './BookStyle';
import { getBooksByTitle } from '../../module/book/bookAction';

const BookFilter = () => {
  const classes = styles();
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchText(event.target.value)
  }
  const handleSearchClick = () => {
    dispatch(getBooksByTitle(searchText))
  }
  return (
    <Box className={classes.bookFilter}>
      <Paper className={classes.bookFilterPapper}>
        <Typography>Search Book Filters</Typography>
        <Box paddingTop={3} marginBottom={2}>
          <TextField placeholder='Enter book titile'
            id='book-search'
            data-testid='book-title-input'
            label='Enter book titile'
            variant='outlined'
            value={searchText}
            onChange={handleSearchChange}
          />
        </Box>
        <Button onClick={handleSearchClick}
          variant="contained"
          color='primary'>
          Search
        </Button>
      </Paper>
    </Box>
  )
}

export default BookFilter