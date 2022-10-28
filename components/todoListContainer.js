import React from 'react'
import { makeStyles, Box } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  container: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection:"column",
    alignItems: "center",
    width: '18rem',
    height: "22rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
  }
}));

const TodoListContainer = ({ children }) => {
  const { container } = useStyle()
  return (
    <Box className={container}>
      {children && children}
    </Box>
  )
}

export default TodoListContainer