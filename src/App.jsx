import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import ContactsBook from './components/ContactsBook';
import SearchBox from './components/SearchBox';
import css from "./App.module.css"
const App = () => {
  

  return (
    <div>
       <h1 className={css.title}>Phonebook</h1>
       <SearchBox className={css.search}/>
       <ContactsBook />
       

    </div>
  )
}

export default App