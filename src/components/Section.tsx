import { Box, Container, Grid, Skeleton } from "@mui/material";
import Image from "next/image";

export default function Section({
  id = null,
  title,
  content,
  image = null,
  children = null,
  sx = {},
  textRight = false,
  color = null,
  backgroundColor = null,
}) {
  const text = (
    <Grid
      item
      xs={12}
      sm={8}
      sx={{
        display: "flex",
        textAlign: "justify",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </Grid>
  );

  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor.hex : "#FFF",
        color: color ? color.hex : "#000",
        pt: 5,
        pb: 5,
        ...sx,
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {!textRight && text}
          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {image ? (
              <Image src={image.url} alt={title} height={image.height} width={image.width} layout="intrinsic"/>
            ) : (
              <Skeleton variant="rectangular" width={300} height={300} />
            )}

            {children}
          </Grid>
          {textRight && text}
        </Grid>
      </Container>
    </Box>
  );
}
