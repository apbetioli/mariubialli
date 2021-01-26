import { Container } from "@material-ui/core";
import Form from "components/Form";
import { useRouter } from "next/router";
import React from "react";
import Layout from "../components/Layout";

export default function Login() {
  const router = useRouter();
  const { redirect, tag } = router.query;
  return (
    <Layout>
      <Container className="fullHeight" maxWidth="sm">
        <h1>Entre com seu email</h1>
        <Form redirectTo={redirect} tag={tag}/>
      </Container>
    </Layout>
  );
}
