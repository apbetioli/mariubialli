import { Button } from "@mui/material";

export default function MyButton(props) {
  return (
    <Button
      color="inherit"
      size="large"
      variant="contained"
      {...props}
      sx={{
        p: 2,
        ...props.sx,
      }}
    >
      {props.children}
    </Button>
  );
}
