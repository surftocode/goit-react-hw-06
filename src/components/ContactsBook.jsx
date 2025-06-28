import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addContact,
  contactsSlice,
  deleteContact,
  loadContacts,
} from "../redux/constactsSlice";

import { Field, Form, Formik } from "formik";
import Contact from "./Contact";
const ContactsBook = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const initialValues = {
    name: " ",
    number: " ",
  };
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      dispatch(loadContacts(storedContacts));
    }
  }, []);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          const newContact = {
            id: Date.now(),
            name: values.name,
            phone: values.number,
          };
          dispatch(addContact(newContact));
          actions.resetForm();
        }}
      >
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name"></Field>
          <label htmlFor="number">Phone Number</label>
          <Field type="text" name="number" id="number"></Field>
          <button type="submit">Add Contact</button>
        </Form>
      </Formik>
      <div>
        <ul>
          {contacts.map((contact) => (
            <Contact
              key={contact.id}
              id={contact.id}
              name={contact.name}
              phone={contact.phone}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactsBook;
