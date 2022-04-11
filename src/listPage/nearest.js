import shop from './shop.module.css';
import Footer from './Footer'
import Contact from './Contact'
import css from './nearest.module.css'
import { useRef,useState } from 'react';
import { AiOutlineDown, AiOutlineEnvironment,AiFillPhone,AiOutlineArrowRight } from "react-icons/ai";


import imgBanner from '../asset/imgs/nearest/banner.jpg'
import img30ShinePNG from '../asset/imgs/logo30ShinePNG.png'
import imgAddressShopHCM1 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCMCuChi from '../asset/imgs/nearest/address/HCM/cuCHi.png'
import imgAddressShopHCM3 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM4 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM5 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM6 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM7 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM8 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM9 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM10 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM11 from '../asset/imgs/nearest/address/HCM/1.png'
import imgAddressShopHCM12 from '../asset/imgs/nearest/address/HCM/1.png'
import imgbiggestSalonQ12 from '../asset/imgs/nearest/biggestSalon/Q12.png'
import imgbiggestSalonThanhXuan from '../asset/imgs/nearest/biggestSalon/ThanhXuan.png'



function Nearest() {

    const Banner = ()=> {
        return(
            <div className={css.banner}>
                <img className={css.bannerImg} src={imgBanner} alt=""/>
                <div className={css.bannerText}>
                    <h3 className={css.bannerTextTitle}>HỆ THỐNG SALON CỦA 30SHINE</h3>
                    <p className={css.bannerTextSub}>Tính đến hiện tại, chuỗi salon tóc nam 30Shine có 77 salon tại những vị trí đắc địa nhất Hà Nội, TP. Hồ Chí Minh và các tỉnh lân cận. Hãy tìm đến salon 30Shine gần anh nhất để tận hưởng trải nghiệm cắt tóc nam đỉnh cao!</p>
                </div>
            </div>
        )
    }
    

    const BodyNearest = () => {
        const [idProvince, setIdProvince] = useState('')
        const chooseProvince = useRef()
        const chooseDistrict = useRef()
        const containerChooseProvince = useRef()
        const chooseDistrictList = useRef()
        let indexCityProvince = useRef('alo')

        const listSalons30Shine = [
            {
                province: "Hồ Chí Minh",
                ListSalonOfProvince : [
                   {
                        district: "H. Củ Chi",
                        address1: "872 Quốc Lộ 22, TT. Củ Chi, H.Củ Chi, TP Hồ Chí Minh",
                        img: imgAddressShopHCMCuChi
                    },
                    {
                        district: "Quận Bình Thạnh",
                        address1: "449 Bạch Đằng, Phường 2, Q.Bình Thạnh, TP Hồ Chí Minh",
                        address2: "359 Lê Quang Định, Phường 5, Q.Bình Thạnh, TP Hồ Chí Minh",
                        address3: "323 Xô Viết Nghệ Tĩnh, Phường 25, Q.Bình Thạnh, TP Hồ Chí Minh",
                        img: imgAddressShopHCM6
                    },
                    {
                        district: "Quận 4",
                        address1: "25 Tôn Đản, Phường 13, Quận 4, TP Hồ Chí Minh",
                        img: imgAddressShopHCM3
                    },
                    {
                        district: "Quận 10",
                        address1: "300 Đường 3/2, Phường 12, Quận 10, TP Hồ Chí Minh",
                        address2: "193 Tô Hiến Thành, Phường 13, Quận 10, TP Hồ Chí Minh",
                        img: imgAddressShopHCM4
                    },
                    {
                        district: "Quận 5",
                        address1: "955 Trần Hưng Đạo, Phường 1, Quận 5, TP Hồ Chí Minh",
                        img: imgAddressShopHCM5
                    },
                    {
                        district: "Quận Gò Vấp",
                        address1: "1180 Quang Trung, Phường 8, Q.Gò Vấp, TP Hồ Chí Minh",
                        address2: "483 Thống Nhất, Phường 16, Q.Gò Vấp, TP Hồ Chí Minh",
                        address3: "12 Lê Đức Thọ, Phường 7, Q.Gò Vấp, TP Hồ Chí Minh",
                        img: imgAddressShopHCM6
                    },
                    {
                        district: "Quận 6",
                        address1: "206 Hậu Giang, Phường 9, Quận 6, TP Hồ Chí Minh",
                        img: imgAddressShopHCM7
                    },
                    {
                        district: "Quận 1",
                        address1: "2 Nguyễn Thị Minh Khai, P. Đa Kao, Quận 1, TP Hồ Chí Minh",
                        img: imgAddressShopHCM8
                    },
                    {
                        district: "Quận 12",
                        address1: "8 Nguyễn Ảnh Thủ, P. Hiệp Thành, Quận 12, TP Hồ Chí Minh",
                        img: imgAddressShopHCM9
                    },
                    {
                        district: "Quận Thủ Đức",
                        address1: "168 Đặng Văn Bi, P. Bình Thọ, Q.Thủ Đức, TP Hồ Chí Minh",
                        address2: "1172 Kha Vạn Cân, KP1, P. Linh Chiểu, Q.Thủ Đức, TP Hồ Chí Minh",
                        address3: "29 Hiệp Bình, P. Hiệp Bình Chánh, Q.Thủ Đức, TP Hồ Chí Minh",
                        img: imgAddressShopHCM10
                    },
                    {
                        district: "Quận 2",
                        address1: "103 Trần Não, P. Bình An, Quận 2, TP Hồ Chí Minh",
                        address2: "149 Nguyễn Duy Trinh, P. Bình Trưng Tây, Quận 2, TP Hồ Chí Minh",
                        img: imgAddressShopHCM11
                    },
                    {
                        district: "Quận Bình Tân",
                        address1: "730 Tỉnh lộ 10, P. Bình Trị Đông A, Q.Bình Tân, TP Hồ Chí Minh",
                        address2: "708 Lê Trọng Tấn, P. Bình Hưng Hoà, Q.Bình Tân, TP Hồ Chí Minh",
                        address3: "76 Phan Văn Hớn, P. Tân Thới Nhất, Quận 12, TP Hồ Chí Minh",
                        img: imgAddressShopHCM12
                    },
                    {
                        district: "Quận Phú Nhuận",
                        address1: "49 Phan Đình Phùng, Phường 17, Q.Phú Nhuận, TP Hồ Chí Minh",
                        address2: "49 Phan Đình Phùng, Phường 17, Q.Phú Nhuận, TP Hồ Chí Minh",
                        address3: "112 Phổ Quang, Phường 9, Q.Phú Nhuận, TP Hồ Chí Minh",
                        img: imgAddressShopHCM1
                    },
                    {
                        district: "Quận 5",
                        address1: "8 Châu Văn Liêm, Phường 10, Quận 5, TP Hồ Chí Minh",
                        img: imgAddressShopHCM12
                    },
                    {
                        district: "Quận 9",
                        address1: "194 Lê Văn Việt, P. Tăng Nhơn Phú B, Quận 9, TP Hồ Chí Minh",
                        address2: "356 Đỗ Xuân Hợp, P. Phước Long A, Quận 9, TP Hồ Chí Minh",
                        img: imgAddressShopHCM3
                    },
                    {
                        district: "Quận Tân Phú",
                        address1: "99 Tân Sơn Nhì, P. Tân Sơn Nhì, Q.Tân Phú, TP Hồ Chí Minh",
                        address2: "189 Hòa Bình, P. Hiệp Tân, Q.Tân Phú, TP Hồ Chí Minh",
                        address3: "130 Tân Sơn Nhì, P. Tân Sơn Nhì, Q.Tân Phú, TP Hồ Chí Minh",
                        img: imgAddressShopHCM4
                    },
                    {
                        district: "Quận Tân Bình",
                        address1: "99 Tân Sơn Nhì, P. Tân Sơn Nhì, Q.Tân Phú, TP Hồ Chí Minh",
                        address2: "36 Phan Huy Ích, Phường 15, Q.Tân Bình, TP Hồ Chí Minh",
                        address3: "150 Trường Chinh, Phường 12, Q.Tân Bình, TP Hồ Chí Minh",
                        address4: "758 Âu Cơ, Phường 14, Q.Tân Bình, TP Hồ Chí Minh",
                        img: imgAddressShopHCM5
                    },
                    {
                        district: "Quận 7",
                        address1: "420 Huỳnh Tấn Phát, P. Phú thuận, Quận 7, TP Hồ Chí Minh",
                        address2: "330 Nguyễn Thị Thập, P. Tân Quy, Quận 7, TP Hồ Chí Minh",
                        address3: "237 Nguyễn Thị Thập, P. Tân Phú, Quận 7, TP Hồ Chí Minh",
                        img: imgAddressShopHCM6
                    },
                    {
                        district: "Quận 8",
                        address1: "420 Huỳnh Tấn Phát, P. Phú thuận, Quận 7, TP Hồ Chí Minh",
                        address2: "330 Nguyễn Thị Thập, P. Tân Quy, Quận 7, TP Hồ Chí Minh",
                        img: imgAddressShopHCM7
                    },
                ]
            },
            {
                province: "Hà Nội",
                ListSalonOfProvince : [
                    {
                        district: "Quận Cầu Giấy", 
                        address1: "151 Cầu Giấy, Q. CG, P. Quan Hoa, Q. Cầu Giấy, Hà Nội",
                        address2: "111 Lạc Long Quân, P. Nghĩa Đô, Q. Cầu Giấy, Hà Nội",
                        address3: "109 Trần Quốc Hoàn, P. Dịch Vọng Hậu, Q. Cầu Giấy, Hà Nội",
                        img: imgAddressShopHCM7
                    },
                    {
                        district: "Quận Hoàn Kiếm", 
                        address1: "163 Hàng Bông, P. Hàng Bông, Q. Hoàn Kiếm, Hà Nội",
                        img: imgAddressShopHCM5
                    },
                    {
                        district: "QuậnHoàng Mai", 
                        address1: "391 Trương Định, P. Tân Mai, Q. Hoàng Mai, Hà Nội",
                        img: imgAddressShopHCM1
                    },
                    {
                        district: "Quận Long Biên", 
                        address1: "168 Nguyễn Văn Cừ, P. Ngọc Lâm, Q. Long Biên, Hà Nội",
                        img: imgAddressShopHCM6
                    },
                    {
                        district: "Quận Thanh Xuân", 
                        address1: "382 Nguyễn Trãi, P. TX Trung, Q. Thanh Xuân, Hà Nội",
                        address2: "407 Trường Chinh, P. Khương Trung, Q. Thanh Xuân, Hà Nội",
                        address3: "56 Nguyễn Huy Tưởng, P. TX Trung, Q. Thanh Xuân, Hà Nội",
                        img: imgAddressShopHCM8
                    },
                    {
                        district: "Quận Hà Đông", 
                        address1: "10 Trần Phú, P. Mộ Lao, Q. Hà Đông, Hà Nội",
                        address2: "175 Phùng Hưng, P. Phúc La, Q. Hà Đông, Hà Nội",
                        img: imgAddressShopHCM9
                    },
                    {
                        district: "Quận Ba Đình", 
                        address1: "235 Đội Cấn, P. Liễu Giai, Q. Ba Đình, Hà Nội",
                        img: imgAddressShopHCM3
                    },
                    {
                        district: "Quận Hai Bà Trưng", 
                        address1: "12 Lạc Trung, P. Thanh Lương, Q. Hai Bà Trưng, Hà Nội",
                        address2: "82 Trần Đại Nghĩa, P. Đồng Tâm, Q. Hai Bà Trưng, Hà Nội",
                        img: imgAddressShopHCM4
                    },
                    {
                        district: "Quận Đống Đa", 
                        address1: "346 Khâm Thiên, P. Thổ Quan, Q. Đống Đa, Hà Nội",
                        address2: "702 Đường Láng, P. Láng Thượng, Q. Đống Đa, Hà Nội",
                        img: imgAddressShopHCM12
                    },
                ]
            },
            {
                province: "Bình Dương",
                ListSalonOfProvince : [
                    {
                        district: "Dĩ An", 
                        address1: "255 Nguyễn An Ninh, P. Dĩ An, Dĩ An, Bình Dương",
                        img: imgAddressShopHCM7
                    },
                    {
                        district: "Thủ Dầu Một", 
                        address1: "80 Phú Lợi, P. Phú Hoà, Thủ Dầu Một, Bình Dương",
                        address2: "641 Cách Mạng Tháng 8, P. Phú Cường, Thủ Dầu Một, Bình Dương",
                        img: imgAddressShopHCM4
                    },
                    {
                        district: "Thuận An",
                        address1: "65 Đường 22 Tháng 12, P. Thuận Giao, Thuận An, Bình Dương",
                        img: imgAddressShopHCM3
                    },
                ]
            },
            {
                province: "Đồng Nai",
                ListSalonOfProvince : [
                    {
                        district: "TP.Biên Hòa",
                        address1: "1361 Phạm Văn Thuận, P. Thống Nhất, TP. Biên Hòa, Đồng Nai",
                        address2: "451 Phạm Văn Thuận, P. Tam Hiệp, TP. Biên Hòa, Đồng Nai",
                        img: imgAddressShopHCM1
                    }
                ]
            },
            {
                province: "Tiền Giang",
                ListSalonOfProvince : [
                    {
                        district: "TP.Mỹ Tho",
                        address1: "189-190 Ấp Bắc, Phường 5, Tp Mỹ Tho, Tiền Giang",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Thanh Hóa",
                ListSalonOfProvince : [
                    {
                        district: "TP.Thanh Hóa",
                        address1: "19 Trần Phú, P. Điện Biên, TP. Thanh Hóa, Thanh Hóa",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Thái Nguyên",
                ListSalonOfProvince : [
                    {
                        district: "TP.Thái Nguyên",
                        address1: "363 Lương Ngọc Quyến, P. Hoàng Văn Thụ, Tp Thái Nguyên, Thái Nguyên",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Quảng Ninh",
                ListSalonOfProvince : [
                    {
                        district: "TP.Hạ Long",
                        address1: "19 Trần Hưng Đạo, P. Bạch Đằng, Tp Hạ Long, Quảng Ninh",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Nghệ An",
                ListSalonOfProvince : [
                    {
                        district: "TP.Vinh",
                        address1: "19 Nguyễn Văn Cừ, P. Trường Thi, Tp. Vinh, Nghệ An",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Long An",
                ListSalonOfProvince : [
                    {
                        district: "Tân An",
                        address1: "68 Hùng Vương, P. Tiền An, Tân An, Long An",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Khánh Hòa",
                ListSalonOfProvince : [
                    {
                        district: "TP.Nha Trang",
                        address1: "152 Thống Nhất, P. Phương Sài, TP. Nha Trang, Khánh Hòa",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Đắk Lắk",
                ListSalonOfProvince : [
                    {
                        district: "TP.Buôn Ma Thuột",
                        address1: "147 Lê Hồng Phong, P. Thống Nhất, TP Buôn Ma Thuột, Đắk Lắc",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Bắc Ninh",
                ListSalonOfProvince : [
                    {
                        district: "TP.Bắc Ninh",
                        address1: "386 Ngô Gia Tự, Phường 2, Tp Bắc Ninh, Bắc Ninh",
                        img: imgAddressShopHCM7
                    }
                    
                ]
            },
            {
                province: "Vũng Tàu",
                ListSalonOfProvince : [
                    {
                        district: "TP.Vũng Tàu",
                        address1: "294 Lê Hồng Phong, Phường 4, TP. Vũng Tàu, Vũng Tàu",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "An Giang",
                ListSalonOfProvince : [
                    {
                        district: "Long Xuyên",
                        address1: "113 Trần Hưng Đạo, P. Mỹ Bình, Long Xuyên, An Giang",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "hài Phòng",
                ListSalonOfProvince : [
                    {
                        district: "Quận Lê Chân",
                        address1: "278 Trần Nguyên Hãn, P. Niệm Nghĩa, Quận Lê Chân, Hải Phòng",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Đà Nẵng",
                ListSalonOfProvince : [
                    {
                        district: "Quận Thanh Khê",
                        address1: "345 Nguyễn Văn Linh, P. Thạc Gián, Quận Thanh Khê, Đà Nẵng",
                        img: imgAddressShopHCM7
                    }
                ]
            },
            {
                province: "Cần Thơ",
                ListSalonOfProvince : [
                    {
                        district: "Quận Ninh Kiều",
                        address1: "205 Đường 30/4, P. Xuân Khánh, Quận Ninh Kiều, Cần Thơ",
                        img: imgAddressShopHCM7
                    }
                ]
            },

        ]

        let hiddenProvince = false
        function handaleChooseProvince() {
            hiddenProvince = !hiddenProvince
            if(hiddenProvince) {
                containerChooseProvince.current.style= "display: block;"
            }else{
                containerChooseProvince.current.style= "display: none;"
            }
        }
        let hiddenDistrict = false
        function handaleChooseDistrict() {
            hiddenDistrict = !hiddenDistrict
            if(hiddenDistrict) {
                chooseDistrictList.current.style= "display: block;"
            }else{
                chooseDistrictList.current.style= "display: none;"
            }
        }

        function handaleClickChooseDistrict(e) {
            chooseDistrict.current.innerText = e.target.innerText
            chooseDistrictList.current.style= "display: none;"
        }

        function handaleClickItemProvince(e) {
            chooseProvince.current.innerText = e.target.innerText
            containerChooseProvince.current.style= "display: none;"
            setIdProvince(e.target.id)
        }

        function handaleAddressSearch(address,index) {
            return(
                <div key={index} className={css.containerAddressShop}>
                    <div className={css.addressShop}>
                        <div className={css.addressAndImgShop}>
                            <img className={css.imgAddressShop} src={address.img} alt=""/>
                            <p className={css.addressShopText}>{address.address1}</p>
                        </div>
                        <div className={css.buttonAddressShops}>
                            <div className={css.buttonAddressShop}>
                                <AiFillPhone/>
                                <span>HOTLINE</span>
                            </div>
                            <div className={css.buttonAddressShop}>
                                <AiOutlineEnvironment/>
                                <span>CHỈ ĐƯỜNG</span>
                            </div>
                            <div className={css.setTheHistory}>
                                <AiOutlineArrowRight/>
                                <span>ĐẶT LỊCH CẮT</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        function biggestSalon() {
            return(
                <div className={css.biggestSalon}>
                    <div className={css.biggestSalonItem}>
                        <img className={css.biggestSalonItemImg} src={imgbiggestSalonQ12} alt=""/>
                        <p className={css.biggestSalonItemAddress}>56 Nguyễn Huy Tưởng, P. TX Trung, Q. Thanh Xuân, Hà Nội</p>
                        <div className={css.biggestSalonItemHotline}>
                            <span>HOTLINE: 1800.28.28.30</span>
                            <AiFillPhone/>
                        </div>
                    </div>
                    <div className={css.biggestSalonItem}>
                        <img className={css.biggestSalonItemImg} src={imgbiggestSalonThanhXuan} alt=""/>
                        <p className={css.biggestSalonItemAddress}>76 Phan Văn Hớn, P. Tân Thới Nhất, Quận 12, TP Hồ Chí Minh</p>
                        <div className={css.biggestSalonItemHotline}>
                            <span>HOTLINE: 1800.28.28.30</span>
                            <AiFillPhone/>
                        </div>
                    </div>
                </div>
            )
        }



        return(
            <div className={css.salon}>
                <div className={css.bodyNearest}>
                    <div className={css.searchSalon}>
                        <div className={css.uploadNearest}>
                            <AiOutlineEnvironment/>
                            <p className={css.uploadNearestText}>TÌM SALON GẦN ANH</p>
                        </div>
                        <div className={css.containerChooseProvince}>
                            <div onClick={()=>{handaleChooseProvince()}} className={css.chooseProvince}>
                                <p ref={chooseProvince} className={css.chooseProvinceText}>Tỉnh/Thành phố</p>
                                <AiOutlineDown/>
                            </div>
                            <div ref={containerChooseProvince} className={css.listChooseProvince}>
                                {listSalons30Shine.map((listSalon, index) => {
                                    return(
                                        <span onClick={(e)=>{handaleClickItemProvince(e)}} className={css.itemListSalon} id={index} key={index}>{listSalon.province}</span>
                                    )
                                })}
                            </div>
                        </div>
                        <div onClick={()=>{handaleChooseDistrict()}} className={css.containerChooseDistrict}>
                            <div className={css.chooseDistrict}>
                                <p ref={chooseDistrict} className={css.chooseDistrictText}>Quận huyện</p>
                                <AiOutlineDown/>
                            </div>
                            <div ref={chooseDistrictList} className={css.chooseDistrictLists}>
                                {listSalons30Shine.map((listSalon, index)=>{
                                    if(index == idProvince) {
                                        indexCityProvince = idProvince
                                        return(
                                            listSalon.ListSalonOfProvince.map((district,index)=>{
                                                return(
                                                    <span onClick={(e)=>{handaleClickChooseDistrict(e)}} className={css.itemDistrict} key={index}>{district.district}</span>
                                                )
                                            })
                                        )
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                    <div className={css.listSalonAndMap}>
                        <div className={css.listSalonShow}>
                            {listSalons30Shine.map((listSalon, indexlistSaLon)=>{
                                if(idProvince == '') {
                                    return(
                                        <div key={indexlistSaLon} className={css.containerListSalonAndMapListSalon}>
                                            <div className={css.listSalonAndMapListSalon} >
                                                <img className={css.listSalonAndMapImg} src={img30ShinePNG} alt=""/>
                                                <div className={css.listSalonAndMapText}>{listSalon.province}</div>
                                            </div>
                                        </div>
                                    )
                                }else{
                                    return(
                                        listSalon.ListSalonOfProvince.map((address,index)=>{
                                            if(indexlistSaLon == indexCityProvince) {
                                                return(
                                                    handaleAddressSearch(address,index)
                                                )
                                            }
                                        })
                                    )
                                }
                            })}
                        </div>
                        <div className={css.mapSalon}>
                            {idProvince == '' ? biggestSalon() : <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d122677.52687640213!2d108.1429067062988!3d16.082464683637802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1649267829971!5m2!1svi!2s" width="656" height="674" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className={`${css.nearest}`}>
            <Banner/>
            <BodyNearest/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Nearest