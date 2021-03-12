import {
    Container,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
    makeStyles,
    TextField
} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Head from "next/head";
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import ColorButton from "../../components/ColorButton";

const useStyles = makeStyles({
    button: {
        width: "100%",
    },
    table: {
        minWidth: 650,
    },
});

export default function Recupera(props) {
    const classes = useStyles()

    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = React.useState({
        obs: ''
    });

    const handleChange = (prop) => (event) => {
        setSelected({...selected, [prop]: event.target.value});
    };

    const handleClickOpen = (transaction) => {
        setSelected(transaction)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (e) => {

        const res = await fetch('/api/webhook/transaction', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(selected)
        })
        console.log(res);

        setOpen(false);
    };

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
                            value={selected.obs}
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
                                <TableCell>Whats</TableCell>
                                <TableCell>Boleto</TableCell>
                                <TableCell>Checkout</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.transactions.map((transaction) => {

                                const text = `Oi ${transaction.first_name}. Sou Alexandre do time dos cursos da Mari Ubialli. Identificamos tentativa de compra do *${transaction.prod_name}*. Estou entrando em contato para te ajudar caso tenha alguma dúvida.`;

                                if (["expired", "waiting_payment", "canceled"].includes(transaction.status)) {
                                    return (
                                        <TableRow key={transaction._id}>
                                            <TableCell>{new Date(transaction.purchase_date).toLocaleString()}</TableCell>
                                            <TableCell>{transaction.prod_name}</TableCell>
                                            <TableCell>{transaction.payment_type}</TableCell>
                                            <TableCell>{transaction.status}</TableCell>
                                            <TableCell><span onClick={() => handleClickOpen(transaction)}>{transaction.obs || '...'}</span></TableCell>
                                            <TableCell>{transaction.name}</TableCell>
                                            <TableCell>{transaction.email}</TableCell>
                                            <TableCell><a href={`http://wa.me/55${transaction.phone_local_code}${transaction.phone_number}?text=${text}`} target="_blank">Whats</a></TableCell>
                                            <TableCell>{transaction.billet_url && <a href={transaction.billet_url} target="_blank">Boleto</a>}</TableCell>
                                            <TableCell><a href={`https://pay.hotmart.com/B46628840G?checkoutMode=10&email=${transaction.email}&name=${transaction.name}&doc=${transaction.doc}&phonenumber=${transaction.phone_number}&phoneac=${transaction.phone_local_code}`} target="_blank">Checkout</a></TableCell>

                                        </TableRow>
                                    )
                                }
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}

export async function getServerSideProps(context) {

    const res = await fetch('https://mariubialli.com/api/webhook/transaction')
    const transactions = await res.json()
    transactions.reverse()
    console.log(transactions[0]);

    return {
        props: {
            transactions
        },
    }
}