import { AccountCircle, AccountCircleOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { Tooltip } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import logo from "../../public/logo.webp";

const pages = ["Apostilas", "Aulas gratuitas", "Clube", "Links"];
const links = ["/apostilas", "/aulas", "/clube", "/bio"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const { data: session } = useSession();

  const handleOpenNavMenu = (event: React.MouseEvent) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page, i) => (
                  <MenuItem key={page}>
                    <Link href={links[i]} passHref>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <Image src={logo} width={80} height={80} alt="Logo" />
            </Typography>

            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 3, display: { xs: "none", md: "flex" } }}
            >
              <Image src={logo} width={80} height={80} alt="Logo" />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page, i) => (
                <Link href={links[i]} passHref key={page}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                    <Typography textAlign="center">{page}</Typography>
                  </Button>
                </Link>
              ))}
            </Box>

            {session && (
              <Button
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => signOut()}
                aria-label="Sair"
              >
                <Tooltip title="Sair">
                  <AccountCircleOutlined />
                </Tooltip>
              </Button>
            )}
            {/* {!session && (
              <IconButton
                sx={{ my: 2, color: "white", display: "block" }}
                onClick={() => signIn()}
                aria-label="Entrar"
              >
                <Tooltip title="Entrar">
                  <AccountCircle />
                </Tooltip>
              </IconButton>
            )} */}
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}
