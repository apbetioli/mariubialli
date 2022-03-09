import { Box, Grid } from "@mui/material";
import Image from "next/image";
import CheckoutDialog from "./CheckoutDialog";

export default function Column({
  content,
  image,
  cta,
  size,
  checkoutTag,
  checkoutUrl
}) {
  return (
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
      {content && <div dangerouslySetInnerHTML={{ __html: content.html }} />}
      {image && (
        <Box
          sx={{
            alignItems: "center",
          }}
        >
          <Image
            src={image.url}
            alt="Section image"
            height={image.height}
            width={image.width}
            layout="responsive"
          />
        </Box>
      )}
      {cta && (
        <CheckoutDialog
          cta={cta}
          checkoutTag={checkoutTag}
          checkoutUrl={checkoutUrl}
        />
      )}
    </Grid>
  );
}
