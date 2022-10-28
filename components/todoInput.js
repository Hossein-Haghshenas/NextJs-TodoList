import { TextField, makeStyles, Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  inputContainer: {
    display: "flex",
    alignItems: "center",
    gap:"0.5rem",
    paddingBottom: "1rem",
    borderBottom:"0.2px solid #bdbdbd",
    "& svg": {
      cursor: "pointer"
  }
  },
  input: {
    width: "12rem",
  }
}));


function TextInput({ inputIcon, className, ...rest }) {
  const { inputContainer, input } = useStyles();

  return (
    <Box className={inputContainer} >
      {inputIcon && inputIcon}
      <TextField className={`${input} ${className && className}`} {...rest} />
    </Box>
  )
}

export default TextInput