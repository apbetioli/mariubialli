import {
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FacebookIcon from "@material-ui/icons/Facebook";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import InstagramIcon from "@material-ui/icons/Instagram";
import LockIcon from "@material-ui/icons/Lock";
import MenuIcon from "@material-ui/icons/Menu";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import YouTubeIcon from "@material-ui/icons/YouTube";
import useUser from "lib/useUser";
import { useRouter } from "next/router";
import React from "react";

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
  loginButton: {
    color: "white",
    height: "100%",
    marginRight: theme.spacing(3),
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Header(props) {
  const classes = useStyles();
  const { user, mutateUser } = useUser();
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const router = useRouter();

  const logout = async (event) => {
    event.preventDefault();
    await mutateUser(fetch("/api/logout"));
    setDrawerOpen(false);
    router.push("/");
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const userButton = user?.isLoggedIn ? (
    <Tooltip title="Sair">
      <Button className={classes.toolbarButton} onClick={logout}>
        <AccountCircleIcon />
      </Button>
    </Tooltip>
  ) : (
    <Tooltip title="Entrar">
      <Button className={classes.loginButton} href="/login">
        <LockIcon />
      </Button>
    </Tooltip>
  );

  const userListItem = user?.isLoggedIn ? (
    <ListItemLink button onClick={logout}>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Sair" />
    </ListItemLink>
  ) : (
    <ListItemLink button href="/login">
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>
      <ListItemText primary="Entrar" />
    </ListItemLink>
  );

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

                <ListItemLink button href="/about">
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText primary="Sobre" />
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
                  href="http://www.facebook.com/mariubialliart"
                  target="_blank"
                  rel="noopener"
                >
                  <ListItemIcon>
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText primary="Facebook" />
                </ListItemLink>

                <Divider />

                {userListItem}
              </List>
            </Drawer>

            <nav className={classes.desktopButtons}>
              <Button href="/apostilas" className={classes.toolbarButton}>
                Apostilas
              </Button>
              <Button href="/about" className={classes.toolbarButton}>
                Sobre
              </Button>
            </nav>
          </div>

          <Link className={classes.logoWrapper} href="/">
            <img className={classes.logo} src="/logo.png" alt="" />
          </Link>

          <div className={classes.rightButtons}>
            <nav className={classes.desktopButtons}>
              <Tooltip title="Siga-me no instagram">
                <Button
                  href="http://www.instagram.com/mariubialli"
                  target="_blank"
                  rel="noopener"
                  className={classes.toolbarButton}
                >
                  <InstagramIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Inscreva-se no meu canal">
                <Button
                  href="https://www.youtube.com/channel/UC8YxukVEnCQLNmbExz-ViAA"
                  target="_blank"
                  rel="noopener"
                  className={classes.toolbarButton}
                >
                  <YouTubeIcon />
                </Button>
              </Tooltip>
              <Tooltip title="Curta minha página">
                <Button
                  href="http://www.facebook.com/mariubialli"
                  target="_blank"
                  rel="noopener"
                  className={classes.toolbarButton}
                >
                  <FacebookIcon />
                </Button>
              </Tooltip>
              {userButton}
            </nav>
          </div>
        </Toolbar>
      </AppBar>
      <div id="scrollTop" />
    </>
  );
}
