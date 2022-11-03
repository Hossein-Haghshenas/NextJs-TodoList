import { makeStyles, Box } from '@material-ui/core';

const useStyle = makeStyles(() => ({
  containerStyles: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: '18rem',
    height: "22rem",
    margin: "1rem",
    padding: "1rem",
    borderRadius: "10px",
    overflow: "auto",
    '&::-webkit-scrollbar': {
      display: "none"
    },
  }
}));

const Container = ({ children, className, ...rest }) => {
  const { containerStyles } = useStyle()
  return (
    <Box className={`${containerStyles} ${className ? className : ''}`} {...rest}>
      {children && children}
    </Box>
  )
}

export default Container