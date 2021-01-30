import JoiasRarasEspera from "./espera";
import JoiasRarasVendas from "./vendas";

const lancamento = new Date("2021-02-08 07:00:00")

export default function JoiasRaras() {

    let today = Date()
    if (today >= lancamento)
        return <JoiasRarasVendas />
    else
        return <JoiasRarasEspera />

}
