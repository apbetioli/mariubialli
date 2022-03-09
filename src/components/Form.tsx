import {
  Backdrop,
  CircularProgress,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { sha256 } from "js-sha256";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import subscribe from "../lib/subscribe";
import MyButton from "./MyButton";

export default function Form(props) {
  const router = useRouter();

  const [backdrop, setBackdrop] = useState(false);

  const [values, setValues] = React.useState({
    email: "",
    name: "",
    ddd: "",
    phone: "",
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  async function onSubmit(event) {
    event.preventDefault();
    setBackdrop(!backdrop);

    const phone = values.phone ? values.phone.trim() : "";
    const ddd = phone.substring(0, 2);
    const phone_number = phone.substring(2);
    const email = values.email.trim().toLowerCase();
    const name = values.name;

    const form = {
      email,
      tag: props.tag,
      name,
      phone,
    };

    const source = window.localStorage.getItem("utm_source");
    if (source) {
      form["source"] = source;
    }

    try {
      await subscribe(form);

      let redirectTo = props.redirectTo;
      if (redirectTo.includes("?")) redirectTo += "&";
      else redirectTo += "?";

      redirectTo += "redirect=true";

      if (props.checkout) {
        redirectTo += "&email=" + encodeURIComponent(email);
        if (values.name) redirectTo += "&name=" + name + "&nome=" + name;
        if (ddd) redirectTo += "&phoneac=" + ddd;
        if (phone_number)
          redirectTo +=
            "&phonenumber=" + phone_number + "&cel=" + ddd + phone_number;
        if (router.query.hideBillet) redirectTo += "&hideBillet=1";
      } else {
        redirectTo += "&em=" + sha256(email);
        if (values.name) redirectTo += "&fn=" + sha256(name);
        if (ddd) redirectTo += "&ph=" + sha256(phone);
      }

      router.push(redirectTo);
    } catch (error) {
      console.error(error);
      setBackdrop(false);
      alert("Ops! Tente novamente mais tarde.");
    }
  }

  return (
    <form onSubmit={onSubmit.bind(this)}>
      <TextField
        label="Email"
        type="email"
        placeholder={props.emailPlaceholder}
        fullWidth
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={values.email}
        onChange={handleChange("email")}
      />

      {props.showName && (
        <TextField
          label="Nome"
          type="text"
          placeholder="Nome completo"
          fullWidth
          required={props.requireName}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={values.name}
          onChange={handleChange("name")}
        />
      )}

      {props.showPhone && (
        <NumberFormat
          customInput={TextField}
          format="###########"
          id="phone"
          label="WhatsApp"
          placeholder="DDD + Número"
          fullWidth
          margin="normal"
          required={props.requirePhone}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={values.phone}
          onChange={handleChange("phone")}
        />
      )}

      {props.children}

      {props.showTerms && (
        <p>
          <Typography variant="body2" color="textSecondary" component="span">
            Ao continuar você concorda com nossa{" "}
            <Link
              href="/politica-de-privacidade"
              target="_blank"
              rel="noopener"
            >
              política de privacidade
            </Link>
            .
          </Typography>
        </p>
      )}

      <MyButton type="submit">{props.buttonText}</MyButton>

      <Backdrop open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
}

Form.defaultProps = {
  buttonText: "Entrar",
  checkout: false,
  redirectTo: "/",
  tag: "LOGIN",
  showName: false,
  showPhone: false,
  showTerms: true,
  requireName: true,
  requirePhone: true,
  emailPlaceholder: "Digite o seu melhor email...",
};
