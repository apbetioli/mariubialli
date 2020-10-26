import { Container } from "@material-ui/core";
import Form from "components/Form";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const router = useRouter();
  const { redirect } = router.query;
  return (
    <Container className="fullHeight" maxWidth="sm">
      <h1>Entre com seu email</h1>
      <Form redirectTo={redirect} />
    </Container>
  );
}
