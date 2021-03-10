import { Fab, Link, makeStyles, Tooltip, useScrollTrigger, Zoom } from "@material-ui/core";
import { WhatsApp } from "@material-ui/icons";
import ColorButton from "./ColorButton";

const useStyles = makeStyles((theme) => ({
    whatsapp: {
        bottom: theme.spacing(2),
        backgroundColor: "#25d366",
        color: "white",
        position: "fixed",
        right: theme.spacing(2),
        zIndex: 10,
        "&:hover": {
            backgroundColor: "#075e54",
        }
    },
}));

export default function BotaoWhats({ phone, message, buttonText, float }) {
    const msgWhats = encodeURIComponent(message);
    const linkWhats = `https://api.whatsapp.com/send?phone=55${phone}&text=${msgWhats}`;
    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 300,
    });

    if (float) {
        return (
            <Zoom in={trigger}>
                <Link target="_blank" rel="noopener" href={linkWhats}>
                    <Tooltip title="Dúvidas? Fale conosco">
                        <Fab className={classes.whatsapp} size="medium" aria-label="Dúvidas? Fale conosco.">
                            <WhatsApp />
                        </Fab>
                    </Tooltip>
                </Link>
            </Zoom>
        );
    }

    return (
        <ColorButton style={ColorButton.whatsapp} target="_blank" rel="noopener" href={linkWhats}>
            <WhatsApp /><span>&nbsp;{buttonText}</span>
        </ColorButton>
    )
}

BotaoWhats.defaultProps = {
    float: true,
    phone: "44920024218",
    buttonText: "(44) 92002-4218",
    message: "Oi, gostaria de saber mais sobre o Curso Bonecas Joias Raras"
}