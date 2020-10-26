import { Container } from "@material-ui/core";
import React from "react";
import Form from "../components/Form";

export default function Login() {
  return (
    <Container className="fullHeight" maxWidth="sm">
      <h1>Entre com seu email</h1>
      <Form />
    </Container>
  );
}
