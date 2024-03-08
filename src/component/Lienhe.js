import React from "react";
import './Lienhe.css';
import img5 from '../anhminhhoa.jpg'

class Lienhe extends React.Component{
    render(){
        return(
            <>
            <h2>LIÊN HỆ VỚI TÔI</h2>
            <div className="container2">
                <div className="Form">
                    <form>
                        <label>GMAIL CỦA BẠN</label>
                        <input className="gmail" placeholder="Nhập gmail của bạn..." type="text"/>
                        <label>SỐ ĐIỆN THOẠI</label>
                        <input className="sdt" placeholder="Nhập số điện thoại của bạn..." type="text"/>
                    <input type="submit" value="Liên hệ ngay"/>
                    </form>
                </div>
                <div className="Pic-item-5">
                    <div className="anhminhhoa">
                    <img src={img5}/>
                    </div>
                    <div className="anhminhhoa">
                    <img src={img5}/>
                    </div>
                    <div className="anhminhhoa">
                    <img src={img5}/>
                    </div>

                </div>
            </div>
            </>
        )
    }
}


export default Lienhe;