import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
    text: {
        color: "blue",
        writingMode: "vertical- rl",
        textOrientation: "upright",
        transform: "rotate(90deg)", /* IE 9 */
        marginTop: "70px !important"
    },
    style: {
        // marginRight: "700px"
    }

}));