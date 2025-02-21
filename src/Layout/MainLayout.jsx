
import { Outlet } from 'react-router-dom';
import Navber from '../Pages/shared/Navbar/Navber';
import Footer from '../Pages/shared/Footer/Footer';
 
 const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
 };
 
 export default MainLayout;