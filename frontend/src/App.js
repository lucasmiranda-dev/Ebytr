import React, { useState } from 'react';
import fetchTodo from '../src/utils/fetchTodo';
import './App.css';
import Notes from './components/notes';

function App() {
  const [title, setTitles] = useState('');
  const [notes, setNotes] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetchTodo.post('/', {
      title,
      notes,
      priority: false,
    });
    setTitles('');
    setNotes('');
  }
  return (
    <>
      <header>To-do-Ebytr</header>
      <form onSubmit={handleSubmit}>
        <div className='input-block'>
          <label htmlFor='title'>Titulo</label>
          <input
            required
            value={title}
            onChange={(e) => setTitles(e.target.value)}
          />
        </div>
        <div className='input-block'>
          <label htmlFor='notes'>Anotações</label>
          <textarea
            required
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>
        </div>
        <button type='submit'>Salvar</button>
      </form>
      <ul>
        <Notes />
      </ul>
    </>
  );
}

export default App;
