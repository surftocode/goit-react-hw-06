import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterContact } from "../redux/filtersSlice";
import { deleteContact } from "../redux/constactsSlice";

const SearchBox = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  const search = useSelector((state) => state.filter.name);
  const filtered = contacts.filter((contact) =>
    (contact.name || " ").toLowerCase().includes((search || "").toLowerCase())
  );
  return (
    <div>
      <p>Find Contacts by name</p>
      <input
        type="text"
        name="filter"
        value={search}
        placeholder="Search contacts..."
        onChange={(e) => dispatch(filterContact(e.target.value))}
      />
      <button type="submit">Find</button>
      <ul>
        {filtered.map((contact) => (
          <li key={contact.id}>
            {contact.name}-{contact.phone}
            <button
              onClick={() => dispatch(deleteContact(contact.id))}
              style={{ marginLeft: "10px", backgroundColor: "transparent" }}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBox;
