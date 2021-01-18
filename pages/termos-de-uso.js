import { Container, Grid, makeStyles } from "@material-ui/core";
import classnames from "classnames";
import PrismicClient from "lib/prismic";
import { RichText } from "prismic-reactjs";
import React from "react";
import Layout from "../components/Layout";

const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
    },
    content: {
        textAlign: "justify",
    },
}));

export default function PoliticaDePrivacidade(props) {
    const classes = useStyles();
    const { content } = props;
    return (
        <Layout {...props}>
            <Container className={classnames("fullHeight", classes.root)}>
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} className={classes.content}>
                        {RichText.render(content.data.content)}
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export async function getStaticProps() {
    const content = await PrismicClient.getSingle("terms_of_use");
    return { props: { content }, revalidate: 1 };
}
