import {
  Backdrop,
  Button,
  CircularProgress,
  TextField,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import theme from "assets/js/theme";
import { useRouter } from "next/router";
import React, { useState } from "react";
import mailchimp from "services/mailchimp";

const useStyles = makeStyles((theme) => ({
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

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  async function onSubmit(event) {
    event.preventDefault();
    setBackdrop(!backdrop);

    let form = {
      email,
      tag: props.tag,
    };

    try {
      await mailchimp.post("/subscribe", form);

      router.push("/obrigado?email=" + email);
    } catch (error) {
      console.log(error);
      setBackdrop(false);
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
      <Backdrop className={classes.backdrop} open={backdrop}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </form>
  );
}

Form.defaultProps = {
  tag: "NEWSLETTER",
};
