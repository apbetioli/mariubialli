import {
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import HomeIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  desktopButtons: {
    height: "100%",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  drawer: {
    paddingRight: theme.spacing(3),
  },
  logo: {
    height: "100px",
  },
  logoWrapper: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  leftButtons: {
    flexGrow: 1,
    height: "100%",
    alignItems: "center",
  },
  menuButton: {
    height: "100%",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  rightButtons: {
    height: "100%",
    alignItems: "center",
  },
  toolbar: {
    height: "100px",
    backgroundColor: theme.palette.secondary.main,
  },
  toolbarButton: {
    color: theme.palette.primary.main,
    height: "100%",
    marginRight: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Header(props) {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  function handleDrawerToggle() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <div className={classes.leftButtons}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerToggle}
            >
              <List component="nav" className={classes.drawer}>
                <ListItemLink button href="/">
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Início" />
                </ListItemLink>

                <ListItemLink button href="/apostilas">
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Apostilas" />
                </ListItemLink>

                <Divider />

                <ListItemLink
                  button
                  href="http://www.instagram.com/mariubialli"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemIcon>
                    <InstagramIcon />
                  </ListItemIcon>
                  <ListItemText primary="Instagram" />
                </ListItemLink>

                <ListItemLink
                  button
                  href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemIcon>
                    <YouTubeIcon />
                  </ListItemIcon>
                  <ListItemText primary="YouTube" />
                </ListItemLink>

                <ListItemLink
                  button
                  href="http://www.facebook.com/mariubialli"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemIcon>
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText primary="Facebook" />
                </ListItemLink>

                <ListItemLink button href="mailto:contato@mariubialli.com">
                  <ListItemIcon>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="Contato" />
                </ListItemLink>
              </List>
            </Drawer>

            <nav className={classes.desktopButtons}>
              <Button
                component={Link}
                href="/apostilas"
                className={classes.toolbarButton}
              >
                Apostilas
              </Button>
            </nav>
          </div>

          <Link className={classes.logoWrapper} href="/">
            <img className={classes.logo} src="/logo.png" alt="" />
          </Link>

          <div className={classes.rightButtons}>
            <nav className={classes.desktopButtons}>
              <Button
                component={Link}
                href="http://www.instagram.com/mariubialli"
                target="_blank"
                rel="noopener"
                className={classes.toolbarButton}
              >
                <InstagramIcon />
              </Button>
              <Button
                component={Link}
                href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA"
                target="_blank"
                rel="noopener"
                className={classes.toolbarButton}
              >
                <YouTubeIcon />
              </Button>
              <Button
                component={Link}
                href="http://www.facebook.com/mariubialli"
                target="_blank"
                rel="noopener"
                className={classes.toolbarButton}
              >
                <FacebookIcon />
              </Button>
              <Button
                component={Link}
                href="mailto:contato@mariubialli.com"
                className={classes.toolbarButton}
              >
                <MailIcon />
              </Button>
            </nav>
          </div>
        </Toolbar>
      </AppBar>
      <div id="scrollTop" />
    </>
  );
}
