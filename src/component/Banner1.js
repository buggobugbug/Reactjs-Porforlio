import React from "react";
import './Banner1.css';
import img2 from '../html, css, js.jpeg'
import img3 from '../images.png'
import img4 from '../reactjs.png'
class Banner1 extends React.Component {
    render() {
        return (
            <>
                <h1>SKILL</h1>
                <div className="container1">
                    <div className="content1">
                        <div className="pic1">
                            <img className="pic-item-banner1" src={img2}/>
                        </div>
                        <div className="title1">
                            <p>Tôi là một người học hỏi tích cực và luôn nỗ lực để nắm vững và phát triển kỹ năng trong lĩnh vực công nghệ thông tin. Trong quá trình học tập và làm việc, tôi đã có cơ hội làm quen và làm việc với HTML, CSS và JavaScript cơ bản.</p>
                        </div>
                    </div>
                    <div className="content2">
                        <div className="pic2">
                            <img className="pic-item-banner2" src={img3} />
                        </div>
                        <div className="title2">
                            <p>MySQL là hệ quản trị cơ sở dữ liệu tự do nguồn mở phổ biến nhất thế giới và được các nhà phát triển rất ưa chuộng trong quá trình phát triển ứng dụng.</p>
                        </div>
                    </div>
                    <div className="content3">
                        <div className="pic3">
                            <img className="pic-item-banner3" src={img4} />
                        </div>
                        <div className="title3">
                            ReactJS cho phép các nhà phát triển tùy chỉnh và quản lý các phần tử meta và title cho từng trang web. Hỗ trợ đa nền tảng: ReactJS không chỉ được sử dụng để phát triển các ứng dụng web, mà còn được sử dụng để phát triển các ứng dụng di động với React Native.
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner1;