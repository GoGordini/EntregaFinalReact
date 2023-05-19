import { List, ListItem, ListItemText } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

const NavListDrawer = () => {
  return (
    <Box sx={{ width: 250, bgcolor: "#cdfcf6" }}>
      <nav>
        <List>
          <ListItem>
            <NavLink to="/category/Guashas">
              <ListItemText primary="GUASHAS" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/category/Rollers">
              <ListItemText primary="ROLLERS" />
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="/category/Sets">
              <ListItemText primary="SETS" />
            </NavLink>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default NavListDrawer;
