import { default as React } from "react";
import ColorButton from "../components/ColorButton";
import LIAula from "./aula";

export default function LIAula04(props) {
    return (
        <LIAula num='04' videoID='gEAq31Gx7QA' {...props}>
            <p>Após assistir a aula entre no grupo VIP do WhatsApp</p>
            <ColorButton style={ColorButton.blue} href="/vip" target="_blank">
                Entrar no grupo VIP do WhatsApp
            </ColorButton>
        </LIAula>
    );
}

