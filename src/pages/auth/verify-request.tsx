import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function VerifyRequest() {
  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Image
        src="/logo.webp"
        alt="Logo"
        width={128}
        height={128}
        layout="fixed"
      />
      <h1>Confira seu email</h1>
      <p>Um link com o acesso foi enviado para seu email</p>
      <Link href="/">Ir para página inicial</Link>
    </Box>
  );
}
