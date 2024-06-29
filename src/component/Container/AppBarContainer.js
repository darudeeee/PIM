import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
// Todo 아이콘임 // import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
const AppBarContainer = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List id="user">
        {[
          {
            Category: "Home",
            Link: "/Home",
            Icon: <HomeIcon />,
          },
          {
            Category: "MyPage",
            Link: "/MyPage",
            Icon: <PersonIcon />,
          },
        ].map((obj, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => {
									window.location.href = obj.Link
								}}>
              <ListItemIcon> {obj.Icon}</ListItemIcon>
              <ListItemText primary={obj.Category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
	  <List id="study">
        {[
          {
            Category: "Note",
            Link: "/Note",
            Icon: <BorderColorIcon />,
          },
          {
            Category: "Search",
            Link: "/Search",
            Icon: <ContentPasteSearchIcon />,
          },
        ].map((obj, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => {
									window.location.href = obj.Link
								}}>
              <ListItemIcon> {obj.Icon}</ListItemIcon>
              <ListItemText primary={obj.Category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
	  <List id="life">
        {[
          {
            Category: "Schedule",
            Link: "/Schedule",
            Icon: <CalendarMonthIcon />,
          },
          {
            Category: "Budget",
            Link: "/Budget",
            Icon: <AttachMoneyIcon />,
          },
        ].map((obj, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => {
									window.location.href = obj.Link
								}}>
              <ListItemIcon> {obj.Icon}</ListItemIcon>
              <ListItemText primary={obj.Category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
	  <List id="health">
        {[
          {
            Category: "Menstruation",
            Link: "/Menstruation",
            Icon: <FavoriteIcon />,
          },
          {
            Category: "Exercise",
            Link: "/Exercise",
            Icon: <FitnessCenterIcon />,
          },
        ].map((obj, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => {
									window.location.href = obj.Link
								}}>
              <ListItemIcon> {obj.Icon}</ListItemIcon>
              <ListItemText primary={obj.Category} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["LogOut"].map((text, index) => (
          <ListItem key={text} disablePadding> 
            <ListItemButton>
              <ListItemIcon>
               <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  // AppBar의 Children들에겐 아래 return
  return (
    <>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">
          <Toolbar style={{backgroundColor: "lightblue"}}>
            <IconButton
              size="medium"
              edge="start"
              color="inherit" 
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
			Personal Information Management
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
        {children}
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </Box>
    </>
  );
};

export default AppBarContainer;
