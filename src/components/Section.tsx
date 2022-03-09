import { Box, Container, Grid } from "@mui/material";
import Column from "./Column";

export default function Section({
  id,
  color,
  backgroundColor,
  columns = [],
  sx = {},
  checkoutTag,
  checkoutUrl,
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor: backgroundColor ? backgroundColor.hex : "#FFF",
        color: color ? color.hex : "#000",
        ...sx,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {columns.map((column, index) => {
            return (
              <Column
                key={index}
                {...column}
                checkoutTag={checkoutTag}
                checkoutUrl={checkoutUrl}
              />
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
