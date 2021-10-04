import { makeStyles } from "@material-ui/core";

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

export default function Banner() {
    const classes = useStyles();
    return (
        <div className={classes.sectionSobreMim}>
            <div className={classes.centered}>
                <img className={classes.foto} src={require("assets/img/li/banner-mac.webp")} alt="Maratona Artesã Criativa" />
            </div>
        </div>
    );
}