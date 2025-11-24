import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
// import MetaHelmet from "../component/common/helmet/metaHelmet";
import { useEffect } from "react";
import ScrollToTop from "./components/scrolltoTop";

const pageTitles = {
  "/": {
    title: "Localists.com: Find Trusted Local Services and Professionals",
    description:
      "Connect with verified local experts through Localists.com. Find trusted professionals, compare quotes, and hire the best for your project—quick, easy, and free.",
  },
};

export const MainLayout = () => {
  const location = useLocation();

  // Support localized URLs by stripping "/:lang/:country" before lookup
  const stripLocalePrefix = (path) => {
    const m = path.match(/^\/[a-z]{2}\/[a-z]{2}(\/.*)?$/);
    if (m) {
      const rest = m[1] || "/";
      return rest;
    }
    return path;
  };

  const lookupPath = stripLocalePrefix(location.pathname);
  let meta = pageTitles[lookupPath];

  // Handle dynamic route for /view-profile/:companyName/:id
  if (!meta && lookupPath.startsWith("/view-profile")) {
    const parts = lookupPath.split("/");
    const companyName = decodeURIComponent(parts[2] || "");
    meta = {
      title: `${companyName} | Localists`,
      description: `Discover more about ${companyName} on Localists. View company details, services, and connect directly.`,
    };
  }
  useEffect(() => {
    document.body.style.paddingTop = "40px";
    document.documentElement.style.setProperty("padding-top", "40px");
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      {/* {meta?.title && (
        <MetaHelmet title={meta?.title} description={meta?.description} />
      )} */}
      <main style={{ minHeight: "50vh", position: "relative", zIndex: 9 }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
