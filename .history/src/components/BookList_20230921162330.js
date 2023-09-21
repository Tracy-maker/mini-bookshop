import React from "react";
import TaskShow from "./BookItem";
import { Box } from "@mui/material";
import styled from "styled-components";

const Reminder = styled(Box)`
  text-align: center;
  padding: ${(props) => (props.noTasks ? "25%" : "0")};
`;

function TaskList(props) {
  const renderedTasksList = props.tasks.map((task) => {
    return (
      <TaskShow
        key={task.id}
        task={task}
        onDelete={props.onDelete}
        onEdit={props.onEdit}
        toggleCheckedBoxById={props.toggleCheckedBoxById}
      />
    );
  });

  return (
    <>
      <Reminder noTasks={props.tasks.length === 0}>
        {props.tasks.length === 0 && "Add a new book...🍄💪🌟"}
      </Reminder>
      {renderedTasksList}
    </>
  );
}

export default TaskList;
