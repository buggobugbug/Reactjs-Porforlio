import React from 'react';
import './navbar.css'

class Navbar extends React.Component {
    render() {
        return (
            <>
                <div className='header'>
                    <ul className='nav-item'>
                        <li><a href=''>Trang Chủ</a></li>
                        <li><a href=''>Bản Thân Tôi</a></li>
                        <li><a href=''>Kiến Thức</a></li>
                        <li>
                            <a href=''>Liên Hệ</a>
                            <ul className='nav-item-con'>
                                <li><a href=''>Facebook</a></li>
                                <li><a href=''>Zalo</a></li>
                                <li><a href=''>Media</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='LOGO'>
                        <li><a href=''>HUY HUYNH NHUT</a></li>
                    </ul>
                </div>
            </>
        )
    }
}


export default Navbar;