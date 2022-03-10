import { Button } from "@mui/material";

export default function MyButton(props) {
  return (
    <Button color="inherit" size="large" variant="contained" {...props}>
      {props.children}
    </Button>
  );
}
