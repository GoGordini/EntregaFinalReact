import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import logoHappySkin from "../../assets/images/logohappyskin.png";
import { Outlet, Link } from "react-router-dom";

import { Button, Drawer } from "@mui/material";
import { useState } from "react";
import NavListDrawer from "./NavListDrawer";

// const Navbar = () => {
//   return (
//     <div>
//       <div className={styles.containerNavbar}>
//         <Link to="/">
//           <img
//             className={`${styles.image} `}
//             src={logoHappySkin}
//             alt="Logo de Happy Skin"
//           />
//         </Link>

//         <div className={styles.nav}>
//           <NavLink
//             to="/category/Guashas"
//             className={({ isActive }) =>
//               isActive ? styles.active : styles.notActive
//             }
//           >
//             GUASHAS
//           </NavLink>
//           {/* Link hace lo mismo que <a>, pero sin recargar la página. */}
//           <NavLink
//             to="/category/Rollers"
//             className={({ isActive }) =>
//               isActive ? styles.active : styles.notActive
//             }
//           >
//             ROLLERS
//           </NavLink>
//           <NavLink
//             to="/category/Sets"
//             className={({ isActive }) =>
//               isActive ? styles.active : styles.notActive
//             }
//           >
//             SETS
//           </NavLink>
//         </div>

//         <CartWidget />
//       </div>
//       <Outlet />
//       {/* Esto es para pasar las props de los hijos. Se pone donde quiero renderizar los componenentes. El footer va debajo del outlet.*/}
//     </div>
//   );
// };

// export default Navbar;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.containerNavbar}>
      <Link to="/">
        <img
          className={`${styles.image} `}
          src={logoHappySkin}
          alt="Logo de Happy Skin"
        />
      </Link>

      <div className={styles.nav}>
        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={() => setOpen(true)}
        >
          {" "}
          NUESTROS PRODUCTOS
        </Button>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          <NavListDrawer />
        </Drawer>

        <CartWidget />
      </div>
      <Outlet />
      {/* Esto es para pasar las props de los hijos. Se pone donde quiero renderizar los componenentes. El footer va debajo del outlet.*/}
    </div>
  );
};

export default Navbar;
