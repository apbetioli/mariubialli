import { useRouter } from "next/router";
import { useEffect } from "react";
import JoiasRarasEspera from "./joiasraras/espera";

function populateUtmSource() {
    const router = useRouter();
    useEffect(() => {
        if (router.query.utm_source)
            window.localStorage.setItem("utm_source", router.query.utm_source);
        else
            window.localStorage.setItem("utm_source", "instagram");
    });
}

export default function Espera(props) {
    populateUtmSource();

    return (
        <JoiasRarasEspera {...props} />
    );
}
