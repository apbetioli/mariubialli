import {
  Backdrop,
  Button,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import theme from "assets/js/theme";
import mailchimp from "lib/mailchimp";
import useUser from "lib/useUser";
import { useRouter } from "next/router";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
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

  const [email, setEmail] = useState("");
  const [backdrop, setBackdrop] = useState(false);
  const { user, mutateUser } = useUser();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const login = async (form) => {
    await mutateUser(
      fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
    );
  };

  async function onSubmit(event) {
    event.preventDefault();
    setBackdrop(!backdrop);

    const form = {
      email,
      tag: props.tag,
    };

    try {
      await mailchimp.post("/subscribe", form);
      await login(form);

      router.push(props.redirectTo + "?redirect=true");
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
        placeholder="Digite o seu melhor email..."
        fullWidth
        required
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={email}
        onChange={handleEmailChange.bind(this)}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={classes.button}
      >
        {props.buttonText}
      </Button>
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
}

Form.defaultProps = {
  buttonText: "Entrar",
  redirectTo: "/",
  tag: "LOGIN",
};
