// import clsx from 'clsx';
import css from './30shineShop.module.css'
import Footer from './Footer'
import { AiFillCaretDown, AiOutlineRight, AiFillStar, AiOutlineStar, AiOutlineArrowRight } from "react-icons/ai";
import { useState, useEffect, useRef } from "react"
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import Contact from './Contact'

import imgBannerSlider1 from "../asset/imgs/30shineShop/imgsSlider/bannerT0322-1.jpg"
import imgBannerSlider2 from "../asset/imgs/30shineShop/imgsSlider/bannerT0322-2.jpg"
import imgIconCommit1 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-1.svg'
import imgIconCommit2 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-2.svg'
import imgIconCommit3 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-3.svg'
import imgIconCommit4 from '../asset/imgs/30shineShop/imgsCommit/new-usp-icon-4.svg'
import imgCommit1 from '../asset/imgs/30shineShop/imgsCommit/hot.png'
import imgCommit2 from '../asset/imgs/30shineShop/imgsCommit/sale-shock.png'
import imgCommit3 from '../asset/imgs/30shineShop/imgsCommit/doc-quyen.png'
import imgCommit4 from '../asset/imgs/30shineShop/imgsCommit/het-mun.png'
import imgCommit5 from '../asset/imgs/30shineShop/imgsCommit/skincare.png'
import imgCommit6 from '../asset/imgs/30shineShop/imgsCommit/toc-dep.png'
import imgCommit7 from '../asset/imgs/30shineShop/imgsCommit/thom-tho.png'
import imgCommit8 from '../asset/imgs/30shineShop/imgsCommit/rau-care.png'
import imgProductHighlights1 from '../asset/imgs/30shineShop/imgsProductHighlights/1.jpg'
import imgProductHighlights2 from '../asset/imgs/30shineShop/imgsProductHighlights/2.jpg'
import imgProductHighlights3 from '../asset/imgs/30shineShop/imgsProductHighlights/3.jpg'
import imgProductHighlights4 from '../asset/imgs/30shineShop/imgsProductHighlights/4.png'
import imgProductHighlights5 from '../asset/imgs/30shineShop/imgsProductHighlights/5.png'
import imgProductHighlights6 from '../asset/imgs/30shineShop/imgsProductHighlights/6.jpg'
import imgProductHighlights7 from '../asset/imgs/30shineShop/imgsProductHighlights/7.jpg'
import imgProductHighlights8 from '../asset/imgs/30shineShop/imgsProductHighlights/8.jpg'
import imgProductHighlights9 from '../asset/imgs/30shineShop/imgsProductHighlights/9.jpg'
import imgProductHighlights10 from '../asset/imgs/30shineShop/imgsProductHighlights/10.jpg'
import imgProductHighlights11 from '../asset/imgs/30shineShop/imgsProductHighlights/11.jpg'
import imgProductHighlights12 from '../asset/imgs/30shineShop/imgsProductHighlights/12.jpg'
import imgProductHighlights13 from '../asset/imgs/30shineShop/imgsProductHighlights/13.jpg'
import imgProductHighlights14 from '../asset/imgs/30shineShop/imgsProductHighlights/14.jpg'
import imgProductHighlights15 from '../asset/imgs/30shineShop/imgsProductHighlights/15.jpg'
import imgProductHighlights16 from '../asset/imgs/30shineShop/imgsProductHighlights/16.jpg'
import imgProductHighlights17 from '../asset/imgs/30shineShop/imgsProductHighlights/17.jpg'
import imgProductHighlights18 from '../asset/imgs/30shineShop/imgsProductHighlights/18.jpg'
import imgProductHighlights19 from '../asset/imgs/30shineShop/imgsProductHighlights/19.jpg'
import imgProductHighlights20 from '../asset/imgs/30shineShop/imgsProductHighlights/20.jpg'
import imgProductHighlights21 from '../asset/imgs/30shineShop/imgsProductHighlights/21.jpg'
import imgProductHighlights22 from '../asset/imgs/30shineShop/imgsProductHighlights/22.jpg'
import imgProductHighlights23 from '../asset/imgs/30shineShop/imgsProductHighlights/23.jpg'
import imgProductHighlights24 from '../asset/imgs/30shineShop/imgsProductHighlights/24.jpg'
import imgProductHighlights25 from '../asset/imgs/30shineShop/imgsProductHighlights/25.jpg'
import imgProductHighlights26 from '../asset/imgs/30shineShop/imgsProductHighlights/26.jpg'
import imgProductHighlights27 from '../asset/imgs/30shineShop/imgsProductHighlights/27.png'
import imgProductHighlights28 from '../asset/imgs/30shineShop/imgsProductHighlights/28.jpg'
import imgProductHighlights29 from '../asset/imgs/30shineShop/imgsProductHighlights/29.jpg'
import imgProductHighlights30 from '../asset/imgs/30shineShop/imgsProductHighlights/30.png'
import imgHighlightCombos1 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-1.jpg'
import imgHighlightCombos2 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-2.jpg'
import imgHighlightCombos3 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-3.jpg'
import imgHighlightCombos4 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-4.jpg'
import imgHighlightCombos5 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-5.jpg'
import imgHighlightCombos6 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-6.jpg'
import imgProductSuggestionBanner from '../asset/imgs/30shineShop/ProductSuggestion/banner-group.png'
import imgProductNew1 from '../asset/imgs/30shineShop/productNew/1.jpg'
import imgProductNew2 from '../asset/imgs/30shineShop/productNew/2.jpg'
import imgProductNew3 from '../asset/imgs/30shineShop/productNew/3.jpg'
import imgProductNew4 from '../asset/imgs/30shineShop/productNew/4.jpg'
import imgProductNew5 from '../asset/imgs/30shineShop/productNew/5.jpg'
import imgProductNew6 from '../asset/imgs/30shineShop/productNew/6.jpg'
import imgProductNew7 from '../asset/imgs/30shineShop/productNew/7.jpg'
import imgProductNew8 from '../asset/imgs/30shineShop/productNew/8.jpg'
import imgProductNew9 from '../asset/imgs/30shineShop/productNew/9.jpg'
import imgProductNew10 from '../asset/imgs/30shineShop/productNew/10.jpg'
import imgProductNew11 from '../asset/imgs/30shineShop/productNew/11.png'
import imgProductNew12 from '../asset/imgs/30shineShop/productNew/12.jpg'
import imgProductNew13 from '../asset/imgs/30shineShop/productNew/13.jpg'
import imgProductNew14 from '../asset/imgs/30shineShop/productNew/14.jpg'
import imgProductNew15 from '../asset/imgs/30shineShop/productNew/15.jpg'
import imgProductNew16 from '../asset/imgs/30shineShop/productNew/16.jpg'
import imgProductNew17 from '../asset/imgs/30shineShop/productNew/17.png'
import imgProductNew18 from '../asset/imgs/30shineShop/productNew/18.jpg'
import imgProductNew19 from '../asset/imgs/30shineShop/productNew/19.jpg'
import imgProductNew20 from '../asset/imgs/30shineShop/productNew/20.jpg'
import imgTrademark1 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_1_img.webp'
import imgTrademark2 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_2_img.webp'
import imgTrademark3 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_3_img.webp'
import imgTrademark4 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_4_img.webp'
import imgTrademark5 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_5_img.webp'
import imgTrademark6 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_6_img.webp'
import imgTrademark7 from '../asset/imgs/30shineShop/trademark/banner_vendors_show_7_img.webp'
import imgListCommit1 from '../asset/imgs/30shineShop/ListCommit/1.png'
import imgListCommit2 from '../asset/imgs/30shineShop/ListCommit/2.png'
import imgListCommit3 from '../asset/imgs/30shineShop/ListCommit/3.png'
import imgListCommit4 from '../asset/imgs/30shineShop/ListCommit/4.png'
import imgListCommit5 from '../asset/imgs/30shineShop/ListCommit/5.png'
import imgListCommit6 from '../asset/imgs/30shineShop/ListCommit/6.png'
import imgListCommit7 from '../asset/imgs/30shineShop/ListCommit/7.png'
import imgListCommit8 from '../asset/imgs/30shineShop/ListCommit/8.png'


function HairStore() {


    const Products = (values) => {
        return(
            <a className={css.productsItem} href={values.href}>
                <img className={css.productsItemImg} src={values.img} alt=""/>
                <div className={css.productsItemDetail}>
                    <p className={css.productsItemName}>{values.nameProduct}</p>
                    <div className={css.productsItemPrices}>
                        <span className={css.productsItemPrice}>{values.price}₫</span>
                        {values.oldPrice ? <span className={css.productsItemOldPrice}>{values.oldPrice}₫</span> : ''}
                    </div>
                    {values.star == 0 ? <div className={css.productsItemStar}><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 1 ? <div className={css.productsItemStar}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 2 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 3 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star == 4 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div> : ''}
                    {values.star == 5 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> : ''}
                </div>
                {values.oldPrice ? <span className={css.saleLabel}><p className={css.saleLabelSale}>{(((values.price / values.oldPrice) * 100) - 100).toFixed(0) }%</p></span> : ''}
            </a>
        )
    }

    const Navbar = () => {
        return(
            <div className={css.navbar}>
                <ul className={css.navbarList}>
                    <li className={`${css.navbarItem} ${css.navbarCateegoryCateegory}`}>
                        <div className={`${css.navbarCateegoryCateegoryList}`}>
                            <h4 className={`${css.navbarItemText}`}>DANH MỤC</h4>
                            <AiFillCaretDown/>
                        </div>
                        <div className={css.navbarCateegoryContainerList}>
                            <ul className={css.navbarCateegoryList}>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading} ${css.hairStyling}`}>TẠO KIỂU TÓC</h5>
                                        <p className={`${css.navbarCateegoryItemProduct} ${css.text123}`}>Sáp vuốt tóc</p>
                                        <p className={css.navbarCateegoryItemProduct}>Gôm giữ nếp</p>
                                        <p className={css.navbarCateegoryItemProduct}>Tạo màu tóc</p>
                                        <p className={css.navbarCateegoryItemProduct}>Pre Styling</p>
                                        <p className={css.navbarCateegoryItemProduct}>Sấy tóc</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CHĂM SÓC DA MẶT</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Sữa rửa mặt</p>
                                        <p className={css.navbarCateegoryItemProduct}>Dưỡng da</p>
                                        <p className={css.navbarCateegoryItemProduct}>Tẩy da chết</p>
                                        <p className={css.navbarCateegoryItemProduct}>Toner</p>
                                        <p className={css.navbarCateegoryItemProduct}>Kem chồng nắng</p>
                                        <p className={css.navbarCateegoryItemProduct}>Mặt nạ</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CHĂM SÓC TÓC</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Dầu gội</p>
                                        <p className={css.navbarCateegoryItemProduct}>Dầu xả</p>
                                        <p className={css.navbarCateegoryItemProduct}>Dưỡng tóc</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CHĂM SÓC CƠ THỂ</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Sữa tắm</p>
                                        <p className={css.navbarCateegoryItemProduct}>Khử mùi cơ thể</p>
                                        <p className={css.navbarCateegoryItemProduct}>Tẩy da chết cơ thể</p>
                                        <p className={css.navbarCateegoryItemProduct}>Nước hoa</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CHĂM SÓC CÁ NHÂN</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Chăm sóc răng miệng</p>
                                        <p className={css.navbarCateegoryItemProduct}>Cạo rây</p>
                                        <p className={css.navbarCateegoryItemProduct}>Dung dịch vệ sinh</p>
                                        <p className={css.navbarCateegoryItemProduct}>Bao cao su</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>THỰC PHẨM CHỨC NĂNG</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Làm đẹp</p>
                                        <p className={css.navbarCateegoryItemProduct}>Sức khỏe</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>THỜI TRANG</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Quần lót nam</p>
                                        <p className={css.navbarCateegoryItemProduct}>Tất nam</p>
                                    </li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>COMBO SIÊU HỜI</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>SẢN PHẨM BÁN CHẠY</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>SẢN PHẨM MỚI</h4>
                    </li>
                    <li className={`${css.navbarItem} ${css.exclusiveBrandContainer}`}>
                        <div className={css.exclusiveBrand}>
                            <h4 className={css.navbarItemText}>THƯƠNG HIỆU ĐỘC QUYỀN</h4>
                            <AiFillCaretDown/>
                        </div>
                        <div className={css.containerTrademark}>
                            <ul className={css.exclusiveBrandList}>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>SNP ACSYS For Men</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>30SHINE</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>GLANZEN</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>SKIN&DR</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>REUZEL</p>
                                </li>
                                <li className={css.exclusiveBrandItem}>
                                    <p className={css.exclusiveBrandTrademark}>THE PLANT BASE</p>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>GIỚI THIỆU</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>LIÊN HỆ</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>BLOG</h4>
                    </li>
                </ul>
            </div>
        )
    }

    const Slider = () => {
        const [imgActive, setImgActive] = useState(1)
        const imgItem1 = useRef()
        const imgItem2 = useRef()
        let setTimeSlider = useRef()

        function setImgSlider() {
            if(imgActive == 1) {
                imgItem1.current.classList.add(`${css.imgMinus100}`)
                imgItem2.current.classList.add(`${css.imgMinus100}`)
                imgItem2.current.classList.add(`${css.zIndex2}`)

                setTimeout(()=>{
                    imgItem1.current.classList.remove(`${css.imgMinus100}`)
                    imgItem1.current.classList.add(`${css.zIndex1}`)
                    imgItem1.current.classList.add(`${css.img100}`)
                },250)

                setImgActive(2)
            }else if(imgActive == 2) {
                imgItem2.current.classList.remove(`${css.zIndex2}`)
                imgItem1.current.classList.remove(`${css.zIndex1}`)
                imgItem1.current.classList.remove(`${css.img100}`)

                imgItem2.current.classList.add(`${css.imgMinus200}`)
                imgItem2.current.classList.add(`${css.zIndex1}`)

                setTimeout(()=>{
                    imgItem1.current.classList.add(`${css.zIndex2}`)
                    imgItem2.current.classList.remove(`${css.imgMinus200}`)
                    imgItem2.current.classList.remove(`${css.imgMinus100}`)
                },250)
                setImgActive(1)
            }
        }

        useEffect(()=>{
            setTimeSlider =  setTimeout(()=>{
                setImgSlider()
            },5000)
            return ()=>{
                clearTimeout(setTimeSlider)
            }
        }, [imgActive])

        // xử lý click trải phải
        function handaleClickSlider(value) {
            clearTimeout(setTimeSlider)
            if(value) {
                if(imgActive == 1){
                    setImgActive(2)
                    setImgSlider()
                }else{
                    setImgActive(1)
                    setImgSlider()
                }
            }
        }


        return(
            <div className={css.slider}>
                <img ref={imgItem1} className={css.sliderImg1} src={imgBannerSlider1} alt=""/>
                <img ref={imgItem2} className={css.sliderImg2} src={imgBannerSlider2} alt=""/>
                <div className={css.iconSlider}>
                    <i onClick={()=>{handaleClickSlider("left")}} className={`${css.sliderIconLeft}`}><FaAngleLeft/></i>
                    <i onClick={()=>{handaleClickSlider("right")}} className={`${css.sliderIconRight}`}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Commit = () => {
        return (
            <div className={css.commit}>
                <div className={css.commitService}>
                    <div className={css.commitServiceList}>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit1} alt=""/>
                            <p className={css.commitServiceText}>Giao hàng siêu tốc</p>
                        </a>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit2} alt=""/>
                            <p className={css.commitServiceText}>Hoàn tiền 120%</p>
                        </a>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit3} alt=""/>
                            <p className={css.commitServiceText}>Đổi trả tân nơi</p>
                        </a>
                        <a className={css.commitServiceItem} href="#">
                            <img className={css.commitServiceImg} src={imgIconCommit4} alt=""/>
                            <p className={css.commitServiceText}>Cam kết 7 ngày hiệu quả</p>
                        </a>
                    </div>
                    <div className={css.commitProduct}>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit1} alt=""/>
                            <p className={css.commitProductText}>Sản phẩm mới</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit2} alt=""/>
                            <p className={css.commitProductText}>Sale sốc deal hời</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit3} alt=""/>
                            <p className={css.commitProductText}>Sản phẩm độc quyền</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit4} alt=""/>
                            <p className={css.commitProductText}>Nhanh hết mụn</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit5} alt=""/>
                            <p className={css.commitProductText}>Skin care</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit6} alt=""/>
                            <p className={css.commitProductText}>Muốn tóc đẹp</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit7} alt=""/>
                            <p className={css.commitProductText}>Thơm tho sạch sẽ</p>
                        </a>
                        <a className={css.commitProductLink} href="#">
                            <img className={css.commitProductImg} src={imgCommit8} alt=""/>
                            <p className={css.commitProductText}>Râu care</p>
                        </a>
                    </div>
                </div>
            </div>
        )
    }


    // danh sách sản phẩm nổi bật
    const listProductHighlights = [
        {
            nameProduct: "Máy sấy tóc Flyco FH6277VN 1800w ION",
            href: "#",
            img: imgProductHighlights1,
            price: "399.000",
            oldPrice: "459.000",
            star: "0"
        },
        {
            nameProduct: "Máy sấy tóc Flyco FH1610VN 2200W",
            href: "#",
            img: imgProductHighlights2,
            price: "359.000",
            oldPrice: "399.000",
            star: "0"
        },
        {
            nameProduct: "Sáp Khử Mùi Old Spice",
            href: "#",
            img: imgProductHighlights3,
            price: "130.000",
            star: "0"
        },
        {
            nameProduct: "Lăn Khử Mùi Etiaxil Đặc Trị - Nói Không Với Hôi Nách",
            href: "#",
            img: imgProductHighlights4,
            price: "293.000",
            star: "0"
        },
        {
            nameProduct: "Lăn Khử Mùi Hàng Ngày Etiaxil - Trị Hôi Nách Hiệu Quả Tạm Biệt Mùi Hôi",
            href: "#",
            img: imgProductHighlights5,
            price: "237.000",
            star: "3"
        },
        {
            nameProduct: "Lăn Khử Mùi Hàng Ngày Etiaxil - Trị Hôi Nách Hiệu Quả Tạm Biệt Mùi Hôi",
            href: "#",
            img: imgProductHighlights6,
            price: "237.000",
            star: "0"
        },
        {
            nameProduct: "Sữa Dưỡng Da Grinif All In One cho Nam - Trắng Mịn Da",
            href: "#",
            img: imgProductHighlights7,
            price: "359.000",
            star: "5"
        },
        {
            nameProduct: "Viên Sủi Giảm Stress Dr. Frei Magnesium + B Complex",
            href: "#",
            img: imgProductHighlights8,
            price: "149.000",
            star: "0"
        },
        {
            nameProduct: "Máy rửa mặt Halio Facial Cleansing & Massaging Device - Mustard",
            href: "#",
            img: imgProductHighlights9,
            price: "559.000",
            oldPrice: "849.000",
            star: "0"
        },
        {
            nameProduct: "Máy rửa mặt Halio Facial Cleansing & Massaging Device - Sky Blue",
            href: "#",
            img: imgProductHighlights10,
            price: "559.000",
            oldPrice: "859.000",
            star: "0"
        },
        {
            nameProduct: "Gel rửa mặt Simple Refreshing Facial Wash ",
            href: "#",
            img: imgProductHighlights11,
            price: "89.000",
            oldPrice: "150.000",
            star: "0"
        },
        {
            nameProduct: "Toner làm dịu da nhạy cảm Simple Soothing Facial Toner",
            href: "#",
            img: imgProductHighlights12,
            price: "92.000",
            oldPrice: "150.000",
            star: "0"
        },
        {
            nameProduct: "Dung Dịch Dưỡng Trắng Hada Labo Perfect White Supreme Lotion",
            href: "#",
            img: imgProductHighlights13,
            price: "220.000",
            oldPrice: "225.000",
            star: "0"
        },
        {
            nameProduct: "Kem Rửa Mặt Làm Sạch Sâu Oxy Deep Wash Cream Formula",
            href: "#",
            img: imgProductHighlights14,
            price: "72.000",
            star: "0"
        },
        {
            nameProduct: "Serum Mờ Thâm Kháng Viêm Và Ngừa Mụn G.G.G Wonder Glow Healing Serum",
            href: "#",
            img: imgProductHighlights15,
            price: "220.000 ₫ - 476.000",
            star: "0"
        },
        {
            nameProduct: "Serum Dưỡng Sáng Và Cấp Nước G.G.G Wonder Glow Brightening Serum",
            href: "#",
            img: imgProductHighlights16,
            price: "220.000 ₫ - 595.000",
            star: "0"
        },
        {
            nameProduct: "Dầu Gội Trị Rụng Và Kích Thích Mọc Tóc Dr.FORHAIR Folligen Plus ",
            href: "#",
            img: imgProductHighlights17,
            price: "205.000 ₫ - 605.000₫",
            star: "0"
        },
        {
            nameProduct: "Sữa Rửa Mặt Thải Độc Dabo Hydration for men ",
            href: "#",
            img: imgProductHighlights18,
            price: "89.000",
            oldPrice: "115.000",
            star: "0"
        },
        {
            nameProduct: "Set Dầu Gội Và Dầu Xả Hairburst",
            href: "#",
            img: imgProductHighlights19,
            price: "646.000",
            star: "5"
        },
        {
            nameProduct: "Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm",
            href: "#",
            img: imgProductHighlights20,
            price: "150.000",
            star: "5"
        },
        {
            nameProduct: "Sữa Rửa Mặt Skin&Dr Active Charcoal - Than Hoạt Tính 100g",
            href: "#",
            img: imgProductHighlights21,
            price: "179.000",
            star: "4"
        },
        {
            nameProduct: "Gel Đặc Trị Mụn Acsys Spot Gel Patch",
            href: "#",
            img: imgProductHighlights22,
            price: "399.000",
            star: "5"
        },
        {
            nameProduct: "Gel Tẩy Tế Bào Chết Acsys Peeling Gel",
            href: "#",
            img: imgProductHighlights23,
            price: "350.000",
            star: "5"
        },
        {
            nameProduct: "Sữa Rửa Mặt ACSYS Trị Mụn - Phiên Bản Đặc Biệt",
            href: "#",
            img: imgProductHighlights24,
            price: "289.000",
            star: "4"
        },
        {
            nameProduct: "Miếng Dán Trị Mụn SNP ACSYS Spot Trouble Patch",
            href: "#",
            img: imgProductHighlights25,
            price: "91.800",
            oldPrice: "102.000",
            star: "0"
        },
        {
            nameProduct: "Sáp vuốt tóc Glanzen Fox",
            href: "#",
            img: imgProductHighlights26,
            price: "229.000",
            star: "5"
        },
        {
            nameProduct: "Glanzen Prime - Floral | Phiên Đặc Biệt Hương Hoa",
            href: "#",
            img: imgProductHighlights27,
            price: "329.000",
            star: "5"
        },
        {
            nameProduct: "Sáp vuốt tóc Glanzen Original Clay - Vô địch giữ nếp tới 12 giờ",
            href: "#",
            img: imgProductHighlights28,
            price: "299.000 ₫ - 500.000",
            star: "0"
        },
        {
            nameProduct: "Glanzen Prime - Sandar Wood | Phiên Bản Đặc Biệt Hương Gỗ",
            href: "#",
            img: imgProductHighlights29,
            price: "329.000",
            star: "0"
        },
        {
            nameProduct: "Máy sấy tóc tạo kiểu chuyên nghiệp Sharkway Limited 1600W",
            href: "#",
            img: imgProductHighlights30,
            price: "237.000",
            oldPrice: "350.000",
            star: "0"
        },
    ]
    // top sản phẩm nổi bật
    const Highlights = () => {
        const [product, setProduct] = useState(0)
        const listProduct = useRef()
        const buttonClickRight = useRef()
        const buttonClickLeft = useRef()

        function handleTransferProduct(value) {
            if(value == 'left') {
                if(product >= -10) {
                    buttonClickLeft.current.style.cursor = 'no-drop'
                }else {
                    setProduct(product + 101.2)
                    buttonClickLeft.current.style.cursor = 'pointer'
                    buttonClickRight.current.style.cursor = 'pointer'
                }
            }else if(value == 'right'){
                if(product <= -500) {
                    buttonClickRight.current.style.cursor = 'no-drop'
                    buttonClickLeft.current.style.cursor = 'pointer'
                }else {
                    setProduct(product - 101.2)
                    buttonClickLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            if(product <= 0) {
                buttonClickLeft.current.style.cursor = 'no-drop'
            }
            listProduct.current.style = `transform: translateX(${product}%`
        }, [product])



        return(
            <div className={css.containerHighlights}>
                <div className={css.highlights}>
                    <div className={css.highlightsTitle}>
                        <h2 className={css.highlightsTitleText}>TOP SẢN PHẨM NỔI BẬT</h2>
                        <a className={css.highlightsTitleAllProduct} href="#">
                            <p className={css.highlightsTitleAllProductText}>Xem tất cả</p>
                            <AiOutlineRight/>
                        </a>
                    </div>
                </div>
                <div className={css.highlightsContainerListProduct}>
                    <div ref={listProduct} className={css.highlightsListProduct}>
                        {listProductHighlights.map((product, index)=>{
                            return(
                                <a key={index} className={css.productItem} href={product.href}>
                                    <img className={css.productItemImg} src={product.img} alt=""/>
                                    <div className={css.productItemDetail}>
                                        <p className={css.productItemName}>{product.nameProduct}</p>
                                        <div className={css.productItemPrices}>
                                            <span className={css.productItemPrice}>{product.price}₫</span>
                                            {product.oldPrice ? <span className={css.productItemOldPrice}>{product.oldPrice}₫</span> : ''}
                                        </div>
                                        {product.star == 0 ? <div className={css.productItemStar}><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 1 ? <div className={css.productItemStar}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 2 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 3 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 4 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div> : ''}
                                        {product.star == 5 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> : ''}
                                    </div>
                                    {product.oldPrice ? <span className={css.saleLabel}><p className={css.saleLabelSale}>{(((product.price / product.oldPrice) * 100) - 100).toFixed(0) }%</p></span> : ''}
                                </a>
                            )
                        })}
                    </div>
                    <i ref={buttonClickLeft} onClick={()=>{handleTransferProduct('left')}} className={`${css.listStoryIconLeft}`}><FaAngleLeft/></i>
                    <i ref={buttonClickRight} onClick={()=>{handleTransferProduct('right')}} className={`${css.listStoryIconRight}`}><FaAngleRight/></i>
                </div>
                <div className={css.comboHighlights}>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos1} alt=""/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos2} alt=""/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos3} alt=""/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos4} alt=""/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos5} alt=""/>
                    <img className={css.comboHighlightsImg} src={imgHighlightCombos6} alt=""/>
                </div>
            </div>
        )
    }

    const ProductSuggestion = () => {
        return(
            <div className={css.productSuggestion}>
                <div className={css.productSuggestionBanner}>
                    <img className={css.productSuggestionBannerImg} src={imgProductSuggestionBanner} alt=""/>
                    <div className={css.productSuggestionBannerText}>
                        <h3 className={css.productSuggestionBannerTextTitle}>GỢI Ý HÔM NAY MUA SẮM LIỀN TAY</h3>
                        <p className={css.productSuggestionBannerTextSubText}>Lựa Chọn Hàng Đầu Dành Cho Quý Khách</p>
                    </div>
                </div>
                <div className={css.productSuggestionProduct}>
                    <div className={css.productSuggestionContainerCategory}>
                        <div className={css.productSuggestionCategory}>
                            <div className={css.productSuggestionCategoryItem}>Sản phẩm mới</div>
                            <div className={css.productSuggestionCategoryItem}>Tạo kiểm tóc</div>
                            <div className={css.productSuggestionCategoryItem}>Chăm sóc tóc</div>
                            <div className={css.productSuggestionCategoryItem}>Chăm sóc da</div>
                            <div className={css.productSuggestionCategoryItem}>Chăm sóc cá nhân</div>
                            <div className={css.productSuggestionCategoryItem}>Combo siêu tiết kiệm</div>
                        </div>
                    </div>
                    <div className={css.productSuggestionListProduct}>
                        <Products
                            img = {imgProductNew1}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew2}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew3}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew4}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew5}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew6}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew7}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew8}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew9}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew10}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew11}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew12}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew13}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew14}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew15}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew16}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew17}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew18}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew19}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                        <Products
                            img = {imgProductNew20}
                            nameProduct = "Máy sấy tóc Flyco FH6277VN 1800w ION"
                            price = "399.000"
                            oldPrice = "459.000"
                            star = "0"
                        />
                    </div>
                    <div className={css.seeMoreProducts}>
                        <span className={css.seeMoreProductsText}>Xem thêm</span>
                        <AiOutlineArrowRight/>
                    </div>
                </div>
            </div>
        )
    }

    const Trademark = () => {
        const [trademarkSlider, setTrademarkSlider] = useState(0)
        const buttonClickLeft = useRef()
        const buttonClickRight = useRef()
        const trademarkListImg = useRef()

        function handleTransferProduct(value) {
            if(value == 'left') {
                if(trademarkSlider >= 0) {
                    buttonClickLeft.current.style.cursor = 'no-drop'
                }else {
                    setTrademarkSlider(trademarkSlider + 16.7)
                    buttonClickLeft.current.style.cursor = 'pointer'
                    buttonClickRight.current.style.cursor = 'pointer'
                }
            }else if(value == 'right'){
                if(trademarkSlider <= -16) {
                    buttonClickRight.current.style.cursor = 'no-drop'
                    buttonClickLeft.current.style.cursor = 'pointer'
                }else {
                    setTrademarkSlider(trademarkSlider - 16.7)
                    buttonClickLeft.current.style.cursor = 'pointer'
                }
            }
        }
        useEffect(()=>{
            if(trademarkSlider <= 0) {
                buttonClickLeft.current.style.cursor = 'no-drop'
            }
            trademarkListImg.current.style = `transform: translateX(${trademarkSlider}%`
        }, [trademarkSlider])

        return(
            <div className={css.trademark}>
                <h2 className={css.trademarkTitle}>THƯƠNG HIỆU NỔI BẬT</h2>
                <div className={css.trademarkContainer}>
                    <div ref={trademarkListImg} className={css.trademarkList}>
                        <img className={css.trademarkItem} src={imgTrademark1} alt=""/>
                        <img className={css.trademarkItem} src={imgTrademark2} alt=""/>
                        <img className={css.trademarkItem} src={imgTrademark3} alt=""/>
                        <img className={css.trademarkItem} src={imgTrademark4} alt=""/>
                        <img className={css.trademarkItem} src={imgTrademark5} alt=""/>
                        <img className={css.trademarkItem} src={imgTrademark6} alt=""/>
                        <img className={css.trademarkItem} src={imgTrademark7} alt=""/>
                    </div>
                    <i ref={buttonClickLeft} onClick={()=>{handleTransferProduct('left')}} className={`${css.trademarkIconLeft}`}><FaAngleLeft/></i>
                    <i ref={buttonClickRight} onClick={()=>{handleTransferProduct('right')}} className={`${css.trademarkIconRight}`}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const ListCommit = () => {
        return(
            <div className={css.ContainerListCommit}>
                <div className={css.listCommit}>
                    <div className={css.listCommitContainerItem}>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit1} alt=""/>
                            <span className={css.listCommitText}>Cam kết 7 ngày hiệu quả</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit2} alt=""/>
                            <span className={css.listCommitText}>Mua 1 hưởng 5 đặc quyền</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit3} alt=""/>
                            <span className={css.listCommitText}>Chính sách hoàn tiền 120%</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit4} alt=""/>
                            <span className={css.listCommitText}>Chất lượng sản phẩm cao cấp nhất</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit5} alt=""/>
                            <span className={css.listCommitText}>Giao hàng siêu tốc 2h</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit6} alt=""/>
                            <span className={css.listCommitText}>Đổi trả tận nơi trong 24h</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit7} alt=""/>
                            <span className={css.listCommitText}>Tổng đài tư vấn mọi lúc mọi nơi</span>
                        </div>
                        <div className={css.listCommitItem}>
                            <img className={css.listCommitItemImg} src={imgListCommit8} alt=""/>
                            <span className={css.listCommitText}>An toàn chuẩn giao vận quốc tế</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div id={`${css.page}`}>
            <Navbar/>
            <Slider/>
            <Commit/>
            <Highlights/>
            <ProductSuggestion/>
            <Trademark/>
            <ListCommit/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default HairStore