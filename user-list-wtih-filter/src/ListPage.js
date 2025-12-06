import axios from "axios";
import React, { useState, useEffect } from "react";

const ListPage = () => {
  const [users, setUsers] = useState([]);
  const [serachInput, setSearchInput] = useState("");
  const [filterUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await axios.get("https://dummyjson.com/user");
        if (resp.status === 200) {
          setUsers(resp.data.users);
          console.log(resp.data.users);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleFilter = (e) => {
    e.preventDefault();

    const value = e.target.value;
    setSearchInput(value);
    if (!value.trim()) {
      setFilteredUsers(users);
    } else {
      const filterd = users.filter((user) =>
        user.firstName.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredUsers(filterd);
    }
  };

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);
  return (
    <>
      <input
        value={serachInput}
        onChange={handleFilter}
        placeholder="Type here to search"
      />

      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>FirstName</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {filterUsers &&
            filterUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.address.address}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListPage;
