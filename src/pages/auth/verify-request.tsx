import { Container, Paper } from "@mui/material";
import { textAlign } from "@mui/system";
import Image from "next/image";
import Link from "next/link";

export default function VerifyRequest() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 2,
          textAlign: "center",
        }}
      >
        <Image src="/logo.webp" alt="Logo" width={128} height={128} />
        <h1>Confira seu email</h1>
        <p>Um link com o acesso foi enviado para seu email</p>
        <Link href="/">Ir para página inicial</Link>
      </Paper>
    </Container>
  );
}
