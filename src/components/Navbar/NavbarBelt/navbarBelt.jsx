
import './navbarBelt.css';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

const NavbarBelt = () => {

    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div className='navbarBelt'>
            <div className="leftNavBelt">
                <Link to={'/'} className="leftNavBeltLogo" >
                    <img className='amazonLogoNavbar' src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt='amazonLogo' />
                    <span className='navbar_inLogo'>.in</span>
                </Link>

                {/* please watch the video for code */}
            </div>
            <div className="navbarBeltSearchBox">
                <div className="navbarBeltSearchDiv">
                    <div className="navbarBeltSearchBoxAll">
                        <div className="navbarBeltSearchBoxAllText">All</div>
                        <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
                    </div>

                    {/* please watch the video for code */}

                </div>
            </div>
            <div className="rightSideNavbarBelt">
                <div className="indianFlagCode">
                    {/* please watch the video for code */}
                </div>

                {/* please watch the video for code */}

                <Link to={'/cart'} className="helloSignInNavbaeBelt">
                    <span className='cartItemNumberNavbarBelt'>{cartItems.length}</span>
                    <div className="helloTopNavbarBelt"><ShoppingCartOutlinedIcon /> <span className='cartTitle'>Cart</span></div>


                </Link>



            </div>

        </div>
    )
}

export default NavbarBelt