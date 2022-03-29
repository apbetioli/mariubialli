import { Box, Container, Grid } from "@mui/material";
import Column from "./Column";

export default function Section({ id, cssClass, columns = [], children }) {
  return (
    <Box component="section" id={id} className={cssClass ?? ""}>
      <Container>
        <Grid container spacing={3}>
          {columns.map((column, index) => {
            return (
              <Column key={index} {...column}>
                {index == 0 && children}
              </Column>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
