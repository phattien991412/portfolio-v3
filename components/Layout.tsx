import Header from './Header';
import Navbar from './Navbar';
import TopLeftImg from './TopLeftImg';

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat`}>
      <Header/>
      <Navbar/>
      <TopLeftImg/>
      {children}
    </div>
  );
};

export default Layout;
