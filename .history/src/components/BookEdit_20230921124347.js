import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styled from "styled-components";

const TaskEditBar = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
`;

function TaskEdit(props) {
  const [formTask, setFormTask] = useState({
    title: props.task.title,
    description: props.task.description,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormTask({ ...formTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(props.task.id, formTask.title, formTask.description);
  };

  return (
    <TaskEditBar onSubmit={handleSubmit}>
      <TextField
        name="title"
        value={formTask.title}
        onChange={handleChange}
        fullWidth
        placeholder="Please edit the task title"
      />
      <TextField
        name="description"
        value={formTask.description}
        onChange={handleChange}
        fullWidth
        placeholder="Please edit the task description"
      />
      <Button type="submit" variant="contained">
        Save
      </Button>
    </TaskEditBar>
  );
}

export default TaskEdit;
