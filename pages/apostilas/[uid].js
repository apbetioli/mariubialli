import { Button, Container, Grid, Link, makeStyles } from "@material-ui/core";
import { client } from "lib/prismic";
import { useRouter } from "next/router";
import Prismic from "prismic-javascript";
import { Date, RichText } from "prismic-reactjs";
import React from "react";
import ImageGallery from "react-image-gallery";

const useStyles = makeStyles((theme) => ({
  downloadButton: {
    width: "100%",
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  videoWrapper: {
    position: "relative",
    paddingBottom: "56.25%",
    paddingTop: 25,
    height: 0,
  },
}));

const Apostila = ({ apostila }) => {
  const classes = useStyles();
  const router = useRouter();

  const renderVideo = (item) => {
    let embedUrl =
      item.embedUrl.replace(
        "https://youtu.be/",
        "https://www.youtube.com/embed/"
      ) + "?rel=0";

    return (
      <div className={classes.videoWrapper}>
        <iframe
          className={classes.video}
          src={embedUrl}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    );
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const images = apostila.data.images.map((image) => ({
    original: image.image.url,
    thumbnail: image.image.url,
  }));

  images.unshift({
    embedUrl: apostila.data.youtube_url.embed_url,
    original: apostila.data.youtube_url.thumbnail_url,
    thumbnail: apostila.data.youtube_url.thumbnail_url,
    renderItem: renderVideo.bind(this),
  });

  return (
    <Container className="fullHeight">
      <Link href="/apostilas">&lt; Voltar para apostilas</Link>
      {RichText.render(apostila.data.title)}
      Publicada em{" "}
      <span>{Date(apostila.data.datetime).toLocaleDateString()}</span>
      <Grid container spacing={3}>
        <Grid item lg={6} xs={12}>
          <ImageGallery
            items={images}
            showFullscreenButton={false}
            showPlayButton={false}
          />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Button
            className={classes.downloadButton}
            variant="contained"
            color="primary"
            size="large"
            href={apostila.data.download.url}
          >
            Download grátis
          </Button>
          {RichText.render(apostila.data.description)}
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getStaticProps(context) {
  const apostila = await client.getByUID("post", context.params.uid);
  return { props: { apostila }, unstable_revalidate: 1 };
}

export async function getStaticPaths() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "post"),
    { orderings: "[my.post.datetime desc]" }
  );

  const paths = posts.results.map((post) => ({
    params: { uid: post.uid },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default Apostila;
