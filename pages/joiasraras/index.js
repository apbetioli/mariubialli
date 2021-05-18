import React from "react";
import JoiasRarasVendas from "./vendas";
import JoiasRarasVendasB from "./vendasb";

export default class JoiasRaras extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            variant: 0
        }
    }

    async componentDidMount() {
        if (window.dataLayer) {
            await window.dataLayer.push({ event: "optimize.activate" });
            console.log("optimize.activate");
        }
        this.intervalId = setInterval(() => {
            if (window.google_optimize !== undefined) {
                const variant = window.google_optimize.get(process.env.NEXT_PUBLIC_OPTIMIZE_EXPERIMENT_ID);
                console.log("Optimize variant " + variant);
                this.setState({ variant });
                clearInterval(this.intervalId);
            }
        }, 100);
    }

    render() {
        if(this.state.variant == 1)
            return <JoiasRarasVendasB variant={this.state.variant} />

        return <JoiasRarasVendas variant={this.state.variant} />
    }
}