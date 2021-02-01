import { useEffect } from "react";
import JoiasRarasEspera from "./joiasraras/espera";

function populateUtmSource() {
    useEffect(() => {
        const source = window.localStorage.getItem("utm_source");
        if (!source) {
            window.localStorage.setItem("utm_source", "instagram");
        }
    });
}

export default function Espera() {
    populateUtmSource();

    return (
        <JoiasRarasEspera />
    );
}
