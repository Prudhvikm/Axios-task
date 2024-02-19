import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../Global";
import CardDetails from "./CardDetails";

export default function UserCards() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios.get(`${API}`).then((response) => setUsers(response.data));
    // console.log(response)
  };

  useEffect(() => getUsers(), []); //call only once due to empty dependency

  //console.log(users)

  const handleDelete = (id) => {
    console.log("Delete ID is ", id);
    axios.delete(`${API}/${id}`).then(() => getUsers());
  };

  const navigate = useNavigate();

  return (
    <div className="user-cards">
      {users.map((user, index) => (
        <CardDetails
          key={index}
          user={user}
          id={user.id}
          deleteButton={
            <IconButton
              color="secondary"
              aria-label="Edit user details"
              onClick={() => handleDelete(user.id)}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton
              color="error"
              aria-label="Delete user"
              onClick={() => navigate(`/users/edit/${user.id}`)}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
