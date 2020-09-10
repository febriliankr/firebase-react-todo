import React, { useState, useEffect } from 'react';
import { Container, FormControl } from '@material-ui/core'
import { Input, InputLabel } from '@material-ui/core';
import Lists from './components/Lists'
import db from './config/firebaseConfig'
import firebase from 'firebase/app';
import 'firebase/firestore';

function App() {

  //react hooks
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  //when the app loads, we need to listen to the database and fetch new todos as they get added/removed
  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      //console.log(snapshot.docs.map(doc => doc.data().todo));
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todo: doc.data().todo
      })
      ));
    })
  }, [input])
  //everytime the input loads, useEffect will run again


  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    //console.log(input);
    setInput('');
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    //console.log(input)
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <h1>Group Chat</h1>

        <form onSubmit={handleSubmit}>
          <FormControl >
            <InputLabel htmlFor="my-input">Say something...</InputLabel>
            <Input value={input} onChange={handleChange} id="my-input" aria-describedby="my-helper-text" />
            {/*<Button disabled={!input} type="submit" onClick={handleSubmit} variant="outlined">Add Todo</Button>*/}
          </FormControl>
        </form>
        <ul>
          {todos && todos.map((todo) => (
            <Lists todo={todo} key={todo.id} />
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default App;