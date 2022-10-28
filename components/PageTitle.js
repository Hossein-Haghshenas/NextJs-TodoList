import { Typography } from '@material-ui/core'

const PageTitle = ({ children, ...rest }) => {
    return (
        <Typography {...rest}>
            {children}
        </Typography>
    )
}

export default PageTitle