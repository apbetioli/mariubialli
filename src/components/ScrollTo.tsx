export default function ScrollTo(props) {
  const { children } = props;

  const handleClick = () => {
    const anchor = document.querySelector(props.target);

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <span onClick={handleClick} role="presentation" {...props}>
      {children}
    </span>
  );
}
