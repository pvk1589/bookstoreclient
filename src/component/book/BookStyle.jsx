import { makeStyles, createStyles } from "@material-ui/core";

export default makeStyles(() => createStyles({

    bookContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bookFilter: {
        width: '20%',
        height: '500px'
    },
    bookFilterPapper: {
        width: '100%',
        height: '100%',
        textAlign:'center'
    },
    bookList: {
        width: '80%'
    },
    bookListItemPaper: {
        padding: '10px',
        display: 'flex',
        widht: '80%'

    },
    bookImage:{
        widht: '180px',
        height: '200px'

    }
}));