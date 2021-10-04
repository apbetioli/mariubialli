import { makeStyles } from "@material-ui/core";
import image from "assets/img/li/banner-mac.webp"

const useStyles = makeStyles((theme) => ({
    centered: {
        alignSelf: "center",
        textAlign: "center",
        width: "100%",
    },
    sectionSobreMim: {
        backgroundColor: "#FE6B8B",
        color: "#FFF",
    },
    foto: {
        maxWidth: "100%",
    },
}));

export default function Banner({image, alt}) {
    const classes = useStyles();
    return (
        <div className={classes.sectionSobreMim}>
            <div className={classes.centered}>
                <img className={classes.foto} src={image} alt={alt} />
            </div>
        </div>
    );
}

Banner.defaultProps = {
    image: image,
    alt: "Maratona Artesã Criativa"
}