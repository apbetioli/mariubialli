import { Container, TextField } from "@mui/material";
import { getCsrfToken } from "next-auth/react";
import Image from "next/image";
import MyButton from "../../components/MyButton";

export default function SignIn({ csrfToken }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Image src="/logo.webp" alt="Logo" width={128} height={128} />
      <form method="post" action="/api/auth/signin/email">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <TextField
          id="email"
          type="email"
          name="email"
          label="Email"
          placeholder="Digite seu email"
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <MyButton type="submit">Fazer login</MyButton>
      </form>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const csrfToken = await getCsrfToken(context);
  return {
    props: { csrfToken },
  };
}
