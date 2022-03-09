import { Button } from "@mui/material";

export default function MyButton(props) {
  return (
    <Button
      color="inherit"
      size="large"
      variant="contained"
      {...props}
      sx={{
        mt: 2,
        mb: 2,
        p: 2,
        backgroundColor: (theme) => theme.palette.primary.dark,
        color: (theme) => theme.palette.primary.contrastText,
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
}
