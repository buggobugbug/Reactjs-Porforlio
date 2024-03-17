import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className='header'>
                    {/* Nav pc */}
                    <ul className='logo'>
                    <FontAwesomeIcon icon={faInstagram} />
                        <li><a href=''>#nuhnh_bin23</a></li>
                    </ul>
                    <ul className='nav-item'>
                        <li><a href=''>Trang Chủ</a></li>
                        <li><a href=''>Bản Thân Tôi</a></li>
                        <li><a href=''>Kiến Thức</a></li>
                        <li><a href=''>Thông tin</a></li>
                        <li>
                            <a href=''>Liên Hệ</a>
                            <ul className='nav-item-con'>
                                {/* <li><a href=''>Facebook</a></li>
                                <li><a href=''>Zalo</a></li>
                                <li><a href=''>Media</a></li> */}
                            </ul>
                        </li>
                    </ul>
                    <ul className='button-lienhe'>
                        <button className='button'>CONTACT ME</button>
                    </ul>
                    {/* nav Mobile */}
                    <label className='nav-bar' for="nav-mobile-input">
                    </label>
                    <input type='checkbox' name='' hidden className='nav-input' id='nav-mobile-input'/>
                    <label className='nav-overlay' for="nav-mobile-input">
                    </label>
                    <ul className='nav-item-mobile'>
                    <label className='nav-bar-x' for="nav-mobile-input">
                    </label>
                        <li><a className='nav-item-link-mobile' href=''>Trang Chủ</a></li>
                        <li><a className='nav-item-link-mobile' href=''>Bản Thân Tôi</a></li>
                        <li><a className='nav-item-link-mobile' href=''>Kiến Thức</a></li>
                        <li><a className='nav-item-link-mobile' href=''>About</a></li>
                    </ul>

                </div>
            </>
        )
    }
}


export default Navbar;