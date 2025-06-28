import React from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import ContactsBook from './components/ContactsBook';
import SearchBox from './components/SearchBox';

const App = () => {
  

  return (
    <div>
       <h1>Phonebook</h1>
       <SearchBox/>
       <ContactsBook />
       

    </div>
  )
}

export default App