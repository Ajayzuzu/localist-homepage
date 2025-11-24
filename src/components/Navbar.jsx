import { Link, useLocation } from "react-router-dom";
// import LogoComponent from "./LogoComponent";
// import LogSwitch from "./LogSwitch";
import logo from "../assets/logo.png";
// import downArrow from "../assets/downarrow.svg";

import styles from "./navbar.module.css";
const Navbar = () => {
  // gives you current route info
  return (
    <nav
      role="tablist"
      aria-label="Professional matches navigation"
      className={styles.navbarContainer}
    >
      <div className={styles.navbarItems}>
        <div className={styles.navbarLeftContainer}>
          {/* <img
            src={logo}
            alt="logo"
            className={styles.mainLogo}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/en/gb/"; // reload + homepage redirect ek sath
            }}
          /> */}
          <div className={styles.logoContainer}>
            <img
              src={logo}
              alt="logo"
              className={styles.mainLogo}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/en/gb/"; // reload + homepage redirect ek sath
              }}
            />
            <>
              <div className={styles.serviceContainer}>
                <span className={styles.serviceText}>Explore Our Services</span>
                <span className={styles.serviceTextMobile}>Our Services</span>
                {/* <img src={downArrow} alt="down-arrow" /> */}
              </div>
            </>
          </div>
        </div>
        {/* <h2>Explore Our Services</h2> */}
        <div className={styles.logsBtns}>
          <Link
            // to={`/${currentLang}/${currentCountry}/login`}
            className={`${styles.loginBtn} ${styles.link}`}
            // onClick={() => {
            //   setMenuOpen(false);
            // }}
          >
            Login
          </Link>
          <Link
            //   to={`/${currentLang}/${currentCountry}/sellers/create`}
            className={styles.professionalBtn}
            //   onClick={() => {
            //     setMenuOpen(false);
            //   }}
          >
            Join as a Professional
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
