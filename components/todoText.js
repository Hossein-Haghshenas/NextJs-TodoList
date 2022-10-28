import { Typography, makeStyles, Box } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    todoBox: {
        display: "flex",
        alignItems: "center",
        width: "14rem",
        height: "2.5rem",
        padding: "0.5rem",
        margin: "1rem 0 0",
        border: "1px solid #bdbdbd",
        borderRadius: "14px",
        backgroundColor: "#fafafa"
    },
    todoBody: {
        width: "80%",
        height: "100%",
        overflow: "auto",
        '&::-webkit-scrollbar': {
            display: "none"
        },
    },
    todoIcons: {
        display: "flex",
        justifyContent: "center",
        gap: "0 0.4rem",
        width: "20%",
        "& > *": {
            cursor: "pointer"
        }
    }
}));


function TodoText({ todoText, todoIcon, ...rest }) {
    const { todoBox, todoBody, todoIcons } = useStyles();

    return (
        <Box className={todoBox} {...rest} >
            <Typography className={todoBody} >{todoText}</Typography>
            <Box className={todoIcons} >
                {todoIcon}
            </Box>
        </Box>
    )
}

export default TodoText