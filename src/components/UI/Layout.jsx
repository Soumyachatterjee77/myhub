import NavBar from "./NavBar"
import PageFooter from "./PageFooter";

const Layout = ({children}) => {
  return (
    <>
      <NavBar />
      <div className="main-page-section">
        {children}
      </div>
      <PageFooter />
    </>
  );
};

export default Layout;
