import { Box, Container, Grid } from "@mui/material";
import Column from "./Column";

export default function Section({
  id,
  color,
  backgroundColor,
  columns = [],
  sx = {},
}) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        backgroundColor: backgroundColor.hex,
        color: color.hex,
        ...sx,
      }}
    >
      <Container>
        <Grid container spacing={3}>
          {columns.map((column, index) => {
            return <Column key={index} {...column} />;
          })}
        </Grid>
      </Container>
    </Box>
  );
}

Section.defaultProps = {
  backgroundColor: { hex: "#FFF" },
  color: { hex: "#000" },
};
