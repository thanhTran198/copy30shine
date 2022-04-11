import Footer from './Footer'
import css from './hairStyle.module.css'
import { FaHeart,  FaShare } from 'react-icons/fa';
import Contact from './Contact'

import imgItemA1 from '../asset/imgs/hairStyle/a1.jpg'
import imgItemA2 from '../asset/imgs/hairStyle/a2.jpg'
import imgItemA3 from '../asset/imgs/hairStyle/a3.jpg'
import imgItemA4 from '../asset/imgs/hairStyle/a4.jpg'
import imgItemA5 from '../asset/imgs/hairStyle/a5.jpg'
import imgItemA6 from '../asset/imgs/hairStyle/a6.jpg'
import imgItemA7 from '../asset/imgs/hairStyle/a7.jpg'
import imgItemA8 from '../asset/imgs/hairStyle/a8.jpg'
import imgItemB1 from '../asset/imgs/hairStyle/b1.jpg'
import imgItemB2 from '../asset/imgs/hairStyle/b2.png'
import imgItemB3 from '../asset/imgs/hairStyle/b3.jpg'
import imgItemB4 from '../asset/imgs/hairStyle/b4.jpg'
import imgItemB5 from '../asset/imgs/hairStyle/b5.jpg'
import imgItemB6 from '../asset/imgs/hairStyle/b6.jpg'
import imgItemB7 from '../asset/imgs/hairStyle/b7.jpg'
import imgItemB8 from '../asset/imgs/hairStyle/b8.png'
import imgItemC1 from '../asset/imgs/hairStyle/c1.jpg'
import imgItemC2 from '../asset/imgs/hairStyle/c2.jpg'
import imgItemC3 from '../asset/imgs/hairStyle/c3.jpg'
import imgItemC4 from '../asset/imgs/hairStyle/c4.jpg'
import imgItemC5 from '../asset/imgs/hairStyle/c5.png'
import imgItemC6 from '../asset/imgs/hairStyle/c6.png'
import imgItemC7 from '../asset/imgs/hairStyle/c7.png'
import imgItemD1 from '../asset/imgs/hairStyle/d1.png'
import imgItemD2 from '../asset/imgs/hairStyle/d2.png'
import imgItemD3 from '../asset/imgs/hairStyle/d3.png'
import imgItemD4 from '../asset/imgs/hairStyle/d4.png'
import imgItemD5 from '../asset/imgs/hairStyle/d5.png'
import imgItemD6 from '../asset/imgs/hairStyle/d6.png'
import imgItemD7 from '../asset/imgs/hairStyle/d7.png'
import imgItemE1 from '../asset/imgs/hairStyle/e1.png'
import imgItemE2 from '../asset/imgs/hairStyle/e2.jpg'
import imgItemE3 from '../asset/imgs/hairStyle/e3.jpg'
import imgItemE4 from '../asset/imgs/hairStyle/e4.jpg'
import imgItemE5 from '../asset/imgs/hairStyle/e5.jpg'
import imgItemE6 from '../asset/imgs/hairStyle/e6.jpg'
import imgItemE7 from '../asset/imgs/hairStyle/e7.jpg'



function HairStyle() {

    const HeadingHairStyle = () => {
        return(
            <div className={css.ContainerButton}>
                <div className={css.buttonList}>
                    <div className={`${css.buttonItem} ${css.active}`}>
                        <p className={css.buttonItemText}>Discover</p>
                    </div>
                    <div className={css.buttonItem}>
                        <p className={css.buttonItemText}>Style Master</p>
                    </div>
                    <div className={css.buttonItem}>
                        <p className={css.buttonItemText}>Lookbook</p>
                    </div>
                </div>
                <div className={css.HeadingHairStyleText}>
                    CÙNG 30SHINE KHÁM PHÁ 
                    <p className={css.HeadingHairStyleSubText}>XU HƯỚNG TÓC HOT NHẤT</p>
                </div>
            </div>
        )
    }

    const Image = (value) => {
        return(
            <div className={css.imageItem}>
                <img className={css.imageItemimg} src={value.img1} alt=""/>
                <div className={css.imageItemInteractive}>
                    <div className={css.imageItemIconHeart}>
                        <FaHeart/>
                    </div>
                    <div className={css.imageItemIconShare}>
                        <FaShare/>
                    </div>
                </div>
                <h4 className={css.imageItemText}>{value.text}</h4>
            </div>
        )
    }


    const BodyHairStyle = () => {
        return(
            <div className={css.bodyHairStyle}>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemA1}
                        text = "Phá cách với kiểu tóc nam Side Part vuốt rủ và học cách vuốt trong tích tắc"
                    />
                    <Image
                        img1 = {imgItemA2}
                        text = "4 Mẹo Giữ Form Tóc Khi Đội Mũ Bảo Hiểm "
                    />
                    <Image
                        img1 = {imgItemA3}
                        text = "Tóc Hai Mái Hàn Quốc Hợp Gương Mặt Nào? "
                    />
                    <Image
                        img1 = {imgItemA4}
                        text = "Bao Lâu Gội Đầu Một Lần Để Giữ Kiểu Tóc Đẹp?"
                    />
                    <Image
                        img1 = {imgItemA5}
                        text = "Mẹo Vuốt Tóc Mohican Tại Nhà "
                    />
                    <Image
                        img1 = {imgItemA6}
                        text = "Đàn Ông Bao Lâu Nên Cắt Tóc Một Lần?"
                    />
                    <Image
                        img1 = {imgItemA7}
                        text = "3 Lý Do Không Thể Bỏ Lỡ Tóc Uốn Con Sâu"
                    />
                    <Image
                        img1 = {imgItemA8}
                        text = "Top Màu Tóc Đẹp Không Cần Tẩy Cho Nam "
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemB1}
                        text = "Top 3 Màu Nhuộm Tóc Lý Tưởng Cho Học Sinh "
                    />
                    <Image
                        img1 = {imgItemB2}
                        text = "Mẹo Để Tóc Hết Chỉa Và Bết Dính "
                    />
                    <Image
                        img1 = {imgItemB3}
                        text = "Những Ai Nên Tránh Xa Kiểu Tóc Mohican???"
                    />
                    <Image
                        img1 = {imgItemB4}
                        text = "Nhuộm Tóc Màu Khói Phải Tẩy Tóc Mấy Lần? "
                    />
                    <Image
                        img1 = {imgItemB5}
                        text = "Tuyệt Chiêu Duỗi Tóc Thẳng Không Cần Dùng Nhiệt"
                    />
                    <Image
                        img1 = {imgItemB6}
                        text = "Lý Do Khiến Nâu Khói Là Màu Nhuộm Hot Nhất 2020"
                    />
                    <Image
                        img1 = {imgItemB7}
                        text = "Hành Trình Đi Tìm Trend Tóc Cho Nam Giới Việt "
                    />
                    <Image
                        img1 = {imgItemB8}
                        text = 'Anh Chàng "Chưa Nhuộm Tóc Bao Giờ" Lột Xác Với Màu Nhuộm Xám Khói'
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemC1}
                        text = "Top 3 Màu Nhuộm Tóc Lý Tưởng Cho Học Sinh "
                    />
                    <Image
                        img1 = {imgItemC2}
                        text = "Mẹo Để Tóc Hết Chỉa Và Bết Dính "
                    />
                    <Image
                        img1 = {imgItemC3}
                        text = "Những Ai Nên Tránh Xa Kiểu Tóc Mohican???"
                    />
                    <Image
                        img1 = {imgItemC4}
                        text = "Tuyệt Chiêu Duỗi Tóc Thẳng Không Cần Dùng Nhiệt "
                    />
                    <Image
                        img1 = {imgItemC5}
                        text = "Lý Do Khiến Nâu Khói Là Màu Nhuộm Hot Nhất 2020"
                    />
                    <Image
                        img1 = {imgItemC6}
                        text = "Hành Trình Đi Tìm Trend Tóc Cho Nam Giới Việt "
                    />
                    <Image
                        img1 = {imgItemC7}
                        text = 'Anh Chàng "Chưa Nhuộm Tóc Bao Giờ" Lột Xác Với Màu Nhuộm Xám Khói'
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemD1}
                        text = "Sport - Kiểu Tóc Dành Cho Đàn Ông Chuẩn Men "
                    />
                    <Image
                        img1 = {imgItemD2}
                        text = "Thử Đổi Kiểu Tóc Cho Cậu Bạn Hot Boy Trường Y "
                    />
                    <Image
                        img1 = {imgItemD3}
                        text = "Side Part Violet Cho Dân Văn Phòng "
                    />
                    <Image
                        img1 = {imgItemD4}
                        text = "Lột Xác Giám Đốc Thiết Kế Của 30Shine "
                    />
                    <Image
                        img1 = {imgItemD5}
                        text = 'Side Part - Kiểu tóc lịch lãm "cứ để là đẹp"'
                    />
                    <Image
                        img1 = {imgItemD6}
                        text = 'Kiểu Tóc "Cộp Mác" Ca Sĩ Lê Bảo Bình '
                    />
                    <Image
                        img1 = {imgItemD7}
                        text = 'Đồng Nghiệp Phải Trầm Trồ Trước Màu Tóc Mới Của Anh Bạn Phó Giám Đốc '
                    />
                </div>
                <div className={css.bodyHairStyleListPillar1}>
                    <Image
                        img1 = {imgItemE1}
                        text = "Ca sĩ Hoàng Dũng - Ngoại hình với tôi rất quan trọng, chỉ xếp sau tài năng "
                    />
                    <Image
                        img1 = {imgItemE2}
                        text = "Kiểu Tóc Đẹp Cho Gương Mặt Vuông "
                    />
                    <Image
                        img1 = {imgItemE3}
                        text = "Tóc Bò Liếm Vẫn Đẹp Trai Như Binz "
                    />
                    <Image
                        img1 = {imgItemE4}
                        text = "Sport Nhuộm Khói Xanh Như Sơn Tùng MTP "
                    />
                    <Image
                        img1 = {imgItemE5}
                        text = 'Mặt Béo Và Tròn Để Tóc Gì Cho Đẹp?'
                    />
                    <Image
                        img1 = {imgItemE6}
                        text = 'Top 4 Kiểu tóc cưng muốn xỉu cho các bé trai'
                    />
                    <Image
                        img1 = {imgItemE7}
                        text = 'Diễn viên Thanh Sơn Và Câu Chuyện Chinh Phục Vai Diễn "Chẳng Ai Mong Muốn"'
                    />
                </div>
            </div>
        )
    }




    return (
        <div className={css.hairStyle}>
            <div className={css.hairStyleBody}>
                <HeadingHairStyle/>
                <BodyHairStyle/>
            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HairStyle