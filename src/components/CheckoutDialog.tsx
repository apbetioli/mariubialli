import { Close, Https } from "@mui/icons-material";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography
} from "@mui/material";
import { useRouter } from "next/router";
import React from "react";
import Form from "./Form";
import MyButton from "./MyButton";

export default function CheckoutDialog({ cta, checkoutTag, checkoutUrl }) {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClick = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  let checkout = checkoutUrl;
  const router = useRouter();
  if (router.query.utm_source)
    checkout += "&utm_source=" + router.query.utm_source;
  if (router.query.utm_medium)
    checkout += "&utm_medium=" + router.query.utm_medium;
  if (router.query.utm_campaign)
    checkout += "&utm_campaign=" + router.query.utm_campaign;

  return (
    <>
      <MyButton onClick={handleClick}>{cta}</MyButton>

      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Inscreva-se
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Form
            buttonText="Continuar"
            tag={checkoutTag}
            redirectTo={checkout}
            emailPlaceholder="Seu email de acesso"
            checkout={true}
            showName={true}
            showPhone={true}
          ></Form>
          <Typography variant="body2" color="textSecondary">
            <Https /> <b>Compra segura</b>. Você será redirecionada para a Eduzz
            para concluir o pagamento.
          </Typography>
        </DialogContent>
      </Dialog>
    </>
  );
}
