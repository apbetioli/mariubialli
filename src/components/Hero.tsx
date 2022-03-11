import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Box, Button, Grid, IconButton } from "@mui/material";
import Image from "next/image";
import MyButton from "./MyButton";
import ScrollTo from "./ScrollTo";

export default function Hero({
  id = "hero",
  title,
  subtitle,
  cta,
  scrollTo,
  image,
  backgroundImage,
}) {
  return (
    <div id={id}>
      {backgroundImage && (
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            opacity: 0.1,
          }}
        >
          <Image
            src={backgroundImage.url}
            alt={title}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </Box>
      )}
      <Grid
        container
        sx={{
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
          height: {
            xs: "100%",
            sm: "100vh",
          },
        }}
      >
        {image && (
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: { sm: "none", xs: "block" } }}
          >
            <Image
              src={image.url}
              width={image.width}
              height={image.height}
              alt={title}
              layout="responsive"
            />
          </Grid>
        )}

        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            p: {
              xs: 2,
              sm: 5,
            },
          }}
        >
          <Box
            sx={{
              fontSize: {
                xs: "1em",
                sm: "1.5em",
              },
            }}
          >
            <h1>{title}</h1>
          </Box>
          <Box
            sx={{
              fontSize: {
                xs: "1em",
                sm: "1em",
              },
            }}
          >
            <p>{subtitle}</p>
          </Box>

          <ScrollTo target={scrollTo}>
            <MyButton>{cta}</MyButton>
          </ScrollTo>
        </Grid>

        <Grid
          item
          xs={12}
          lg={6}
          sx={{
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={title}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: { sm: "block", xs: "none" }, textAlign: "center" }}
        >
          <KeyboardDoubleArrowDownIcon
            sx={{ fontSize: "5em", position: "absolute", bottom: 5 }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
