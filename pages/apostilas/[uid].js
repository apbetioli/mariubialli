import { Button, Container, Grid, Link, makeStyles } from "@material-ui/core";
import PrismicClient from "lib/prismic";
import { useRouter } from "next/router";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import React from "react";
import ImageGallery from "react-image-gallery";
import useUser from "../../lib/useUser";

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

function DownloadButton({ className, loggedIn, url, children }) {
  const router = useRouter();

  return loggedIn ? (
    <Button
      id="download"
      className={className}
      variant="contained"
      color="primary"
      size="large"
      href={url}
      target="_blank"
      rel="noopener"
    >
      {children}
    </Button>
  ) : (
    <Button
      id="download"
      className={className}
      variant="contained"
      color="primary"
      size="large"
      href={"/login?redirect=" + router.asPath}
    >
      {children}
    </Button>
  );
}

const Apostila = ({ apostila }) => {
  const classes = useStyles();
  const router = useRouter();
  const { user } = useUser();

  if (user?.isLoggedIn && router.query.redirect) {
    window.open(apostila.data.download.url);
  }

  const renderVideo = (item) => {
    const embedUrl =
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
      <article>
        {RichText.render(apostila.data.title)}
        <Grid container spacing={3}>
          <Grid item lg={6} xs={12}>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <DownloadButton
              className={classes.downloadButton}
              loggedIn={user?.isLoggedIn}
              url={apostila.data.download.url}
            >
              Download
            </DownloadButton>
            {RichText.render(apostila.data.description)}
          </Grid>
        </Grid>
      </article>
    </Container>
  );
};

export async function getStaticProps(context) {
  const apostila = await PrismicClient.getByUID("post", context.params.uid);

  const title = RichText.asText(apostila.data.title);

  return { props: { apostila, title }, revalidate: 1 };
}

export async function getStaticPaths() {
  const posts = await PrismicClient.query(
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
