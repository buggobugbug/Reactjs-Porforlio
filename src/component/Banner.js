import React from "react";
import './Banner.css';
import img3 from '../anhthu3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
class Banner extends React.Component {
    render() {
        return (
            <>
                <section className="Container">
                    <div className="containe1">
                        <h3>Hello, I'am</h3>
                        <h3><span>HUYNH NHUT HUY</span></h3>
                        <h4>Web Frontend Developer</h4>
                        <p>Bên cạnh việc trau dồi kiến thức thường xuyên, bạn cũng nên chủ động tìm kiếm việc làm phù hợp để có cơ hội ứng dụng các kiến thức đã học vào công việc thực tế, làm dày thêm vốn hiểu biết và nhanh chóng có mức lương cao trong nghề. </p>
                        <div className="Font">
                            <a><FontAwesomeIcon icon={faFacebook} /></a>
                            <a><FontAwesomeIcon icon={faInstagram} /></a>
                            <a><FontAwesomeIcon icon={faGithub} /></a>
                            <a><FontAwesomeIcon icon={faGoogle} /></a>
                        </div>
                        <div className="btn-box">
                            <button className="btn1">About Me</button>
                        </div>
                        </div>

                    <div className="img-box">
                        <img src={img3} />
                    </div>

                </section>
            </>
        )
    }
}

export default Banner;