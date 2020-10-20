import { Button, TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import theme from "assets/js/theme";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Api from "services/apis";

const MyTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiOutlinedInput-root": {
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
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();

    let form = {
      email,
      tag: "NEWSLETTER",
    };

    try {
      await Api.post("/subscribe", form);

      router.push("/obrigado?email=" + email);
    } catch (error) {
      console.log(error);
      alert("Ocorreu um erro ao se inscrever. Tente novamente mais tarde.");
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
      <Button variant="contained" color="primary" type="submit">
        Quero receber as apostilas em meu email
      </Button>
    </form>
  );
}
