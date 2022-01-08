import { makeStyles } from "@material-ui/core";
import defaultImage from "assets/img/li/banner-mbf.webp"

const useStyles = makeStyles((theme) => ({
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    sectionPrimary: {
        backgroundColor: "#49bbc6",
        color: "#FFF",
    },
    photo: {
        maxWidth: "100%",
    },
}));

export default function Banner({image, alt}) {
    const classes = useStyles();
    return (
        <div className={classes.sectionPrimary}>
            <div className={classes.centered}>
                <img className={classes.photo} src={image || defaultImage} alt={alt} />
            </div>
        </div>
    );
}

Banner.defaultProps = {
    alt: "Minissérie Bonequeira de Feltro"
}