import {
  Backdrop,
  CircularProgress,

  Link,

  TextField,
  Typography
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import theme from "assets/js/theme";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NumberFormat from "react-number-format";
import subscribe from "../lib/subscribe";
import ColorButton from "./ColorButton";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  justify: {
    textAlign: "justify",
  }
}));

const MyTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",

      "& fieldset": {
        borderColor: theme.palette.error.main,
      },
      "&:hover fieldset": {
        borderColor: "gray",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
  },
})(TextField);

export default function Form(props) {
  const classes = useStyles();
  const router = useRouter();

  const [backdrop, setBackdrop] = useState(false);

  const [values, setValues] = React.useState({
    email: '',
    name: '',
    ddd: '',
    phone: ''
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

    const form = {
      email: values.email.toLowerCase(),
      tag: props.tag,
      name: values.name,
      phone
    };

    const source = window.localStorage.getItem("utm_source");
    if (source) {
      form.source = source;
    }

    try {
      subscribe(form);

      let redirectTo = props.redirectTo;
      if (redirectTo.includes("?"))
        redirectTo += "&";
      else
        redirectTo += "?";

      redirectTo += "redirect=true";

      if (props.checkout) {
        redirectTo += "&email=" + values.email.toLowerCase();
        if (values.name)
          redirectTo += "&name=" + values.name;
        if (ddd)
          redirectTo += "&phoneac=" + ddd;
        if (phone_number)
          redirectTo += "&phonenumber=" + phone_number;
        if (router.query.hideBillet) {
          redirectTo += "&hideBillet=1";
        }
      }

      router.push(redirectTo);

    } catch (error) {
      console.error(error);
      setBackdrop(false);
      alert("Ops! Algo de errado não está certo. Tente novamente mais tarde.");
    }
  }

  return (
    <form onSubmit={onSubmit.bind(this)}>

      <MyTextField
        id="filled-full-width"
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

      {props.showName &&
        <MyTextField
          id="filled-full-width"
          label="Nome"
          type="text"
          placeholder="Nome completo"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={values.name}
          onChange={handleChange("name")}
        />
      }

      {props.showPhone &&
        <NumberFormat
          customInput={MyTextField}
          format="###########"
          id="phone"
          label="Celular / WhatsApp"
          placeholder="DDD + Número"
          fullWidth
          margin="normal"
          required
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          value={values.phone}
          onChange={handleChange("phone")}
        />
      }

      {props.children}

      <p className={classes.justify}>
        <Typography variant="body2" color="textSecondary" component="span">
          Ao continuar você concorda com nossa <Link className={classes.link} href="/politica-de-privacidade" target="_blank" rel="noopener">política de privacidade</Link>.
        </Typography>
      </p>

      <ColorButton
        variant="contained"
        type="submit"
        className={classes.button}
        style={props.buttonStyle}
      >
        {props.buttonText}
      </ColorButton>
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
}

Form.defaultProps = {
  buttonStyle: ColorButton.defaultStyle,
  buttonText: "Entrar",
  checkout: false,
  redirectTo: "/",
  tag: "LOGIN",
  showName: false,
  showPhone: false,
  emailPlaceholder: "Digite o seu melhor email..."
};
