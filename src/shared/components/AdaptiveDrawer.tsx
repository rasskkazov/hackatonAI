import {
  Toolbar,
  List,
  Box,
  AppBar,
  IconButton,
  Typography,
  Drawer,
  Divider,
} from "@mui/material";
import { ReactNode, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { ClearChat } from "@/features";

const drawerWidth = 260;

interface Props {
  header: ReactNode;
}

export const AdaptiveDrawer = ({ header }: Props) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <>
      <Toolbar>
        <Typography variant="h5">Бухгалтерская отчетность МТС</Typography>
      </Toolbar>
      <Divider />

      <List
        sx={{
          pl: "24px",
        }}
      >
        <ClearChat />
      </List>
    </>
  );

  return (
    <>
      <AppBar
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },

          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {header}
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
