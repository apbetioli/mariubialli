import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";

export default function Courses({ id = "courses", courses }) {
  return (
    <section id={id}>
      <Container sx={{ pb: 5}}>
        <Grid container spacing={2}>
          {courses.map((course) => {
            return (
              <Grid item xs={12} sm={4} key={course.title}>
                <Card>
                  <CardMedia
                    component="img"
                    sx={{ height: 200 }}
                    image={course.image.url}
                    alt={course.title}
                  />
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {course.title}
                    </Typography>
                    <Typography variant="subtitle1" paragraph>
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </section>
  );
}
