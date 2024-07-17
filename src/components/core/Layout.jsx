import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = [
  {
    id: "nav-item-001",
    title: "Home",
    path: "/",
  },
  {
    id: "nav-item-002",
    title: "Counter",
    path: "/counter",
  },
];

export default function Layout({ children }) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              App
            </Typography>
            {navItems.map(({ id, title, path }) => (
              <Link key={id} to={path}>
                <Button
                  color="inherit"
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  {title}
                </Button>
              </Link>
            ))}
          </Toolbar>
        </AppBar>
      </Box>
      <div>{children}</div>
    </>
  );
}
