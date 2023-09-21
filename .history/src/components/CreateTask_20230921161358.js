import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { styled } from "@mui/material";

const Input = styled(TextField)`
  padding:2%;
  width: 80%;
`;

const AddButton = styled(Button)`
  margin: auto;
  width: 20%;
  padding: 9px;
  text-align: center;
  margin-right: 15px;
`;

function CreateTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() !== "" || description.trim() !== "") {
      props.onCreate( title, description );
      setTitle("");
      setDescription("");
    }
  };

  return (
    <Stack onSubmit={handleSubmit} component="form" direction="row">
      <Input
        name="title"
        value={title}
        onChange={handleChange}
        placeholder="Add a title"
        variant="filled"
      />
      <Input
        name="description"
        value={description}
        onChange={handleChange}
        placeholder="Add description"
        variant="filled"
      />
      <AddButton type="submit" variant="contained">
        Add Task
      </AddButton>
    </Stack>
  );
}

export default CreateTask;
