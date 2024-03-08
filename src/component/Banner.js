import React from "react";
import './Banner.css';
import img1 from '../img.jpg';


class Banner extends React.Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="picture">
                        <img className="pic-item-1" src={img1}/>
                    </div>
                    <div className="container-content">
                    <div className="title">
                        <h1>HUỲNH NHỰT HUY</h1>
                        <h2>WEB FRONTEND DEVELOPER</h2>
                    </div>
                    <div className="content">
                            <p>Bởi vì trong sự cạnh tranh khốc liệt thì một sản phẩm đẹp hơn sẽ chiếm được tình cảm và sự ủng hộ từ phía người dùng, người ta không thể sử dụng một thiết bị rất đẹp về mọi thứ như iPhone, nhưng khi mở ứng dụng của bạn lên lại thấy xấu, thiết kế cẩu thả, mắc phải các lỗi cơ bản về hiển thị. Có hàng tá sản phẩm giống bạn nhưng lại rất tiện dụng, trong khi đó sản phẩm của bạn lại rối rắm, phức tạp, thì rõ ràng không ai muốn bỏ thời gian, công sức để tìm hiểu. Nói một cách khác, một sản phẩm xấu, hoặc khó sử dụng sẽ làm cho người dùng cảm thấy nó thiếu chuyên nghiệp và không tôn trọng họ. Sản phẩm đẹp sẽ giúp bạn nâng cao tính cạnh tranh, dễ quảng bá và truyền thông đến với người dùng.</p>
                    </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Banner;