import { Box, Card, CardContent, CardMedia, Grid } from "@mui/material";
import Image from "next/image";
import CheckoutDialog from "./CheckoutDialog";

export default function Column({
  content,
  image,
  cta,
  size,
  isCard = false,
  children,
}) {
  return (
    <>
      <Grid
        item
        xs={12}
        sm={size}
        sx={{
          display: "flex",
          alignItems: "justify",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        {isCard && (
          <>
            <Card elevation={5} className="card">
              <CardMedia
                component="img"
                sx={{ height: 200 }}
                image={image.url}
                alt=""
              ></CardMedia>
              <CardContent>
                {content && (
                  <div dangerouslySetInnerHTML={{ __html: content.html }} />
                )}
              </CardContent>
            </Card>
          </>
        )}
        {!isCard && (
          <>
            {content && (
              <div dangerouslySetInnerHTML={{ __html: content.html }} />
            )}
            {children}
            {image && (
              <Box
                sx={{
                  alignItems: "center",
                }}
              >
                <Image
                  src={image.url}
                  alt=""
                  height={image.height}
                  width={image.width}
                  layout="responsive"
                />
              </Box>
            )}
            {cta && cta.checkout && (
              <CheckoutDialog
                cta={cta.button}
                checkoutTag={cta.tag}
                checkoutUrl={cta.url}
              />
            )}
          </>
        )}
      </Grid>
    </>
  );
}
