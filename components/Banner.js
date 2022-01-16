import { makeStyles } from "@material-ui/core";
import defaultImage from "assets/img/li/banner-mbf.webp"

const useStyles = makeStyles((theme) => ({
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    sectionPrimary: {
        backgroundColor: "#151515",
        backgroundImage: "linear-gradient(135deg, rgba(254, 107, 139, 0.8), #151515)",
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