import React from "react";
import './Banner.css';
import img1 from '../anhdautien.jpg'
import img2 from '../anhthuhai.jpg'
import img3 from '../anhthu3.jpg'

class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="Container">
                    <div className="Component1">
                    </div>
                    <div className="Component2">
                    <div className="Component3">
                        <div className="Tieude">
                            <h4>HUỲNH NHỰT HUY</h4>
                            <p>Deverloper</p>
                        </div>
                        <div className="anh1">
                            <img src={img1}/>
                        </div>
                    </div>
                    <div className="Component4">
                    <div className="anh2">
                            <img src={img2}/>
                        </div>
                    </div>
                    <div className="Component5">
                    <div className="anh3">
                            <img src={img3}/>
                        </div>
                        <div className="Tieude1">
                            <p>" là một frondent deverloper, tôi đang cố gắng cải thiện những kỹ năng của mình để tìm một cơ hội việc làm tốt, giao diện dễ nhìn, thân thiện với người dùng "</p>
                        </div>
                        <div className="Button">
                            <button className="button">
                                ABOUT ME
                            </button>
                        </div>
                    </div>
                    </div>

                </div>
            </>
        )
    }
}

export default Banner;