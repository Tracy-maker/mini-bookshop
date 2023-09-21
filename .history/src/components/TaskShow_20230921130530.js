import * as React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import ChipDeleteIcon from "@mui/material/ChipDelete";

import styled from "styled-components";
import { Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TaskEdit from "./TaskEdit";

const TaskItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-style: solid;
  border-width: 1px;
  margin: 2%;
  border-radius: 17px;
  border-color: lightgray;
`;

const TaskContent = styled(Box)`
  display: flex;
  margin: auto;
  width: 80%;
  padding: 10px;
  align-items: center;
  gap: 20px;
`;

const TaskInformation = styled(Typography)`
  text-decoration: ${({ isDeleted }) => (isDeleted ? "line-through" : "none")};
`;

function TaskShow(props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEdit = () => {
    setShowEdit(!showEdit);
  };

  const handleSubmit = (id, newTitle, newDescription) => {
    setShowEdit(false);
    props.onEdit(id, newTitle, newDescription);
  };

  let content;

  if (showEdit) {
    content = <TaskEdit onSubmit={handleSubmit} task={props.task} />;
  } else {
    console.log(props.task);
    content = (
      <>
        <TaskInformation variant="h5" isDeleted={props.task.status === "done"}>
          {props.task.title}
        </TaskInformation>
        <TaskInformation variant="h7" isDeleted={props.task.status === "done"}>
          {props.task.description}
        </TaskInformation>
      </>
    );
  }

  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  const handleCheckboxChange = () => {
    props.toggleCheckedBoxById(props.task.id);
  };

  return (
    <TaskItem>
      <Checkbox
        checked={props.task.status === "done"}
        onChange={handleCheckboxChange}
      />
      <TaskContent>{content}</TaskContent>

      <Box>
        <Chip
          variant="soft"
          color="success"
          onClick={handleEdit}
          endDecorator={<EditIcon />}
        />
        <Chip
          variant="soft"
          color="danger"
          endDecorator={<ChipDeleteIcon onClick={handleDelete} />}
        />
      </Box>
    </TaskItem>
  );
}

export default TaskShow;
