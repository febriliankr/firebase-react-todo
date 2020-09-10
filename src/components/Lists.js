import React from 'react'
import { List, ListItem, ListItemText } from '@material-ui/core'
import './Lists.styles.css'
import db from '../config/firebaseConfig'
import DeleteIcon from '@material-ui/icons/Delete';

function Lists(props) {


    const handleClick = (event) => {
        console.log(props.todo.id);
        db.collection('todos').doc(props.todo.id).delete();
    }

    return (
        <List>
            <ListItem className="todo-list">
                <ListItemText primary={props.todo.todo} secondary={props.todo.timestamp} />
                <DeleteIcon onClick={handleClick} />
            </ListItem>
        </List>
    )
}

export default Lists
