import { Button } from "@mui/material";

export default function MyButton(props) {
  return <Button {...props}>{props.children}</Button>;
}

MyButton.defaultProps = {
  color: "primary",
  size: "large",
  variant: "contained",
};
