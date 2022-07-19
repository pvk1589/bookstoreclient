import React from 'react'
import axios from 'axios';
import baseUrl from './config';

const App = () => {

axios(`${baseUrl}/api/v1/books`).then(books => {
    console.log("books",books)

})

    return (<div>Vijay</div>);
}

export default App;