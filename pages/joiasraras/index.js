import React from "react";
import JoiasRarasVendas from "./vendas";

export default class JoiasRaras extends React.Component {

    async componentDidMount() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });
            console.log("optimize.activate");
        }
        this.intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                const variant = window.google_optimize.get("_O3ZF-sVRhWDUSE3AV_xjA");
                console.log("Optimize variant " + variant);
                this.setState({ variant });
                clearInterval(this.intervalId);
            }
        }, 100);
    }

    render() {
        return <JoiasRarasVendas variant={this.state.variant} />
    }
}
