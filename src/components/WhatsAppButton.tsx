import { WhatsApp } from "@mui/icons-material";
import { Fab, Link, Tooltip, useScrollTrigger, Zoom } from "@mui/material";

const whatsapp = {
  bottom: 20,
  backgroundColor: "#25d366",
  color: "white",
  position: "fixed",
  right: 20,
  zIndex: 10,
  "&:hover": {
    backgroundColor: "#075e54",
  },
};

export default function WhatsAppButton({ phone, message, tooltip }) {
  const msgWhats = encodeURIComponent(message);
  const linkWhats = `https://api.whatsapp.com/send?phone=${phone}&text=${msgWhats}`;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 500,
  });

  return (
    <Zoom in={trigger}>
      <Link target="_blank" rel="noopener" href={linkWhats}>
        <Tooltip title={tooltip}>
          <Fab sx={{ ...whatsapp }} size="large" aria-label={tooltip}>
            <WhatsApp />
          </Fab>
        </Tooltip>
      </Link>
    </Zoom>
  );
}
