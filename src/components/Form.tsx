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

const buildRedirectURL = (
  redirectTo: string,
  checkout: boolean,
  email: string,
  name: string,
  phone: string
): URL => {
  const url = new URL(redirectTo, process.env.NEXT_PUBLIC_BASE_URL);

  const params = url.searchParams;

  if (!checkout) {
    params.append("em", sha256(email));
    if (name) params.append("fn", sha256(name));
    if (phone) params.append("ph", sha256(phone));
    return url;
  }

  params.append("email", email);

  if (name) {
    params.append("name", name);
    params.append("nome", name);
  }

  if (phone) {
    const ddd = phone.substring(0, 2);
    const phone_number = phone.substring(2);
    params.append("phoneac", ddd);
    params.append("phonenumber", phone_number);
    params.append("cel", phone);
  }

  return url;
};

export default function Form(props) {
  const router = useRouter();

  const [backdrop, setBackdrop] = useState(false);

  const [values, setValues] = useState({
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
    setBackdrop(true);

    const form = {
      email: values.email.trim().toLowerCase(),
      name: values.name?.trim(),
      phone: values.phone?.trim(),
      tag: props.tag,
      source: window.localStorage.getItem("utm_source"),
    };

    try {
      await subscribe(form);

      const redirectURL = buildRedirectURL(
        props.redirectTo,
        props.checkout,
        form.email,
        form.name,
        form.phone
      );

      router.push(redirectURL.toString());
    } catch (error) {
      console.error(error);
      setBackdrop(false);
      alert("Ocorreu um erro! Tente novamente mais tarde.");
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
          <Typography
            color="textSecondary"
            component="span"
            sx={{ fontSize: "1rem" }}
          >
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
