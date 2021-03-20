import {
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    makeStyles,
    TextField
} from "@material-ui/core"
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import CloseIcon from '@material-ui/icons/Close'
import Head from "next/head"
import React from "react"
import ColorButton from "../../components/ColorButton"

const API_URL = `${process.env.NEXT_PUBLIC_DOMAIN}/api/webhook/transaction`

const useStyles = makeStyles({
    button: {
        width: "100%",
    },
    table: {
        minWidth: 650,
    },
})

const post = async (transaction) => {
    return await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
    })
}

export default function Recupera(props) {
    const classes = useStyles()

    const [transactions, setTransactions] = React.useState(props.transactions)
    const [open, setOpen] = React.useState(false)
    const [selected, setSelected] = React.useState({})
    let [obs, setObs] = React.useState('')

    const handleChange = (prop) => (event) => {
        setObs(event.target.value)
        selected[prop] = event.target.value
    }

    const handleClickOpen = (transaction) => {
        setSelected(transaction)
        setObs(transaction.obs)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await post(selected)
        console.log(res)

        setOpen(false)
    }

    const handleArchive = async (transaction) => {
        transaction.archived = true
        setSelected(transaction)

        const res = await post(transaction)
        console.log(res)

        setTransactions(await list())
    }

    return (
        <>
            <Head>
                <meta name="robots" content="noindex,nofollow"></meta>
            </Head>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    Editar
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <form onSubmit={onSubmit.bind(this)}>
                        <TextField
                            id="filled-full-width"
                            label="Obs"
                            type="text"
                            placeholder="..."
                            fullWidth
                            required
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                            value={obs}
                            onChange={handleChange("obs")}
                        />
                        <ColorButton
                            variant="contained"
                            type="submit"
                            className={classes.button}
                        >
                            Salvar
                        </ColorButton>
                    </form>

                </DialogContent>
                <DialogActions>
                </DialogActions>

            </Dialog>
            <Container maxWidth="xl">
                <h1>Recuperar</h1>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Data</TableCell>
                                <TableCell>Produto</TableCell>
                                <TableCell>Pagamento</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Obs</TableCell>
                                <TableCell>Nome</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Celular</TableCell>
                                <TableCell>Celular checkout</TableCell>
                                <TableCell>Checkout Boleto</TableCell>
                                <TableCell>Arquivar</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.transactions.map((transaction) => {

                                if (transaction.archived)
                                    return <div key={transaction._id}></div>

                                const text = `Oi ${transaction.first_name}. Sou Alexandre do suporte da Mari Ubialli. Identificamos interesse no *${transaction.prod_name}*. Estou entrando em contato para te ajudar caso tenha alguma dúvida.`
                                const checkoutId = transaction.prod_name == "Curso Bonecas Joias Raras" ? "B46628840G" : "D49033705A"
                                const checkoutUrl = `https://pay.hotmart.com/${checkoutId}?checkoutMode=10&email=${transaction.email}&name=${transaction.name}&doc=${transaction.doc}&phonenumber=${transaction.phone_checkout_number}&phoneac=${transaction.phone_checkout_local_code}`

                                if (["expired", "waiting_payment", "canceled", "billet_printed"].includes(transaction.status)) {
                                    return (
                                        <TableRow key={transaction._id}>
                                            <TableCell>{new Date(transaction.purchase_date).toLocaleString()}</TableCell>
                                            <TableCell>{transaction.prod_name}</TableCell>
                                            <TableCell>{transaction.payment_type}</TableCell>
                                            <TableCell>{transaction.status}</TableCell>
                                            <TableCell><span onClick={() => handleClickOpen(transaction)}>{transaction.obs || '...'}</span></TableCell>
                                            <TableCell>{transaction.name}</TableCell>
                                            <TableCell>{transaction.email}</TableCell>
                                            <TableCell>
                                                <a href={`http://wa.me/55${transaction.phone_local_code}${transaction.phone_number}?text=${text}`} target="_blank">
                                                    {transaction.phone_local_code + '' + transaction.phone_number}
                                                </a>
                                            </TableCell>
                                            <TableCell>
                                                <a href={`http://wa.me/55${transaction.phone_checkout_local_code}${transaction.phone_checkout_number}?text=${text}`} target="_blank">
                                                    {transaction.phone_checkout_local_code + '' + transaction.phone_checkout_number}
                                                </a>
                                            </TableCell>
                                            <TableCell><a href={checkoutUrl} target="_blank">Boleto</a></TableCell>
                                            <TableCell><a href="#" onClick={(e) => { e.preventDefault(); handleArchive(transaction) }}>Arquivar</a></TableCell>
                                        </TableRow>
                                    )
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    )
}

async function list() {
    const res = await fetch(API_URL)
    return await res.json()
}

export async function getServerSideProps(context) {

    const transactions = await list()
    console.log(transactions[0])

    return {
        props: {
            transactions
        },
    }
}