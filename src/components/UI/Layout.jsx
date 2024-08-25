import NavBar from "./NavBar"
import PageFooter from "./PageFooter";
import PropTypes from 'prop-types';

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

Layout.propTypes = {
  children: PropTypes.any
}

export default Layout;
