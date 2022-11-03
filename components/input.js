import { TextField, makeStyles, Box } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    paddingBottom: "1rem",
    borderBottom: "0.2px solid #bdbdbd",
    "& svg": {
      cursor: "pointer"
    }
  },
  input: {
    width: "12rem",
  }
}));


function Input({ leftIcon, rightIcon, className, ...rest }) {
  const { inputContainer, input } = useStyles();

  return (
    <Box className={inputContainer} >
      {leftIcon && leftIcon}
      <TextField className={`${input} ${className ? className : ''}`} {...rest} />
      {rightIcon && rightIcon}
    </Box>
  )
}

export default Input