import React from 'react'
import css from './30shineShop.module.css'
import Footer from './Footer'
import { AiFillCaretDown, AiOutlineFilter, AiOutlineRight, AiFillStar, AiOutlineStar, AiOutlineArrowRight, AiOutlineSearch, AiOutlineDown } from "react-icons/ai";
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
import imgHighlightCombos1 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-1.jpg'
import imgHighlightCombos2 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-2.jpg'
import imgHighlightCombos3 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-3.jpg'
import imgHighlightCombos4 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-4.jpg'
import imgHighlightCombos5 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-5.jpg'
import imgHighlightCombos6 from '../asset/imgs/30shineShop/imgsProductHighlights/comboProducts/Banner3_2-T0222-6.jpg'
import imgProductSuggestionBanner from '../asset/imgs/30shineShop/ProductSuggestion/banner-group.png'
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
import bannerIntroduce from '../asset/imgs/30shineShop/Introduce/banner.webp'
import medalIntroduce from '../asset/imgs/30shineShop/Introduce/about03_infor_1_ico.webp'
import giftBoxIntroduce from '../asset/imgs/30shineShop/Introduce/about03_infor_2_ico.webp'
import carIntroduce from '../asset/imgs/30shineShop/Introduce/about03_infor_3_ico.webp'
import team1Introduce from '../asset/imgs/30shineShop/Introduce/about03_team_1_img.webp'
import team2Introduce from '../asset/imgs/30shineShop/Introduce/about03_team_2_img.webp'
import team3Introduce from '../asset/imgs/30shineShop/Introduce/about03_team_3_img.webp'
import team4Introduce from '../asset/imgs/30shineShop/Introduce/about03_team_4_img.webp'
import services1Introduce from '../asset/imgs/30shineShop/Introduce/about03_services_1_ico.webp'
import services2Introduce from '../asset/imgs/30shineShop/Introduce/about03_services_2_ico.webp'
import services3Introduce from '../asset/imgs/30shineShop/Introduce/about03_services_3_ico.webp'
import services4Introduce from '../asset/imgs/30shineShop/Introduce/about03_services_4_ico.webp'
import services5Introduce from '../asset/imgs/30shineShop/Introduce/about03_services_5_ico.webp'
import services6Introduce from '../asset/imgs/30shineShop/Introduce/about03_services_6_ico.webp'


function HairStore() {

    const [home30ShineShop, setHome30ShineShop] = useState('home')
    const [listAllProducts, setListAllProducts] = useState([])
    
    const containerSlider = useRef()
    const containerHighlights = useRef()
    const containerCommit = useRef()
    const containerProductSuggestion = useRef()
    const containerTrademark = useRef()
    const ContainerListCommit = useRef()
    const productNew = useRef()

    // gọi API
    useEffect(()=>{
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then((listItems) => {
                setListAllProducts(listItems)
            })
    }, [])

    
    // xử lý thêm dấu chấm đơn vị nghìn sản phẩm
    function formatNumber(a, b, c, d) {
        var e = isNaN(b = Math.abs(b)) ? 2 : b;
        b = void 0 == c ? "," : c;
        d = void 0 == d ? "," : d;
        c = 0 > a ? "-" : "";
        var g = parseInt(a = Math.abs(+a || 0).toFixed(e)) + "",
            n = 3 < (n = g.length) ? n % 3 : 0;
        return c + (n ? g.substr(0, n) + d : "") + g.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + d) + (e ? b + Math.abs(a - g).toFixed(e).slice(2) : "")
    }

    // hàm tạo sản phẩm
    function Products(values) {
        return(
            <div key={values.index} className={css.productsItem}>
                <img className={css.productsItemImg} src={values.img} alt=""/>
                <div className={css.productsItemDetail}>
                    <p className={css.productsItemName}>{values.nameProduct}</p>
                    <div className={css.productsItemPrices}>
                        <span className={css.productsItemPrice}>{values.oldPrice ? formatNumber(values.oldPrice, 0, ",", ".") : formatNumber(values.price, 0, ",", ".")}₫</span>
                        {values.oldPrice != null? <span className={css.productsItemOldPrice}>{formatNumber(values.price, 0, ",", ".")}₫</span> : ''}
                    </div>
                    {values.star === 0 ? <div className={css.productsItemStar}><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star === 1 ? <div className={css.productsItemStar}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star === 2 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star === 3 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                    {values.star === 4 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div> : ''}
                    {values.star === 5 ? <div className={css.productsItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> : ''}
                </div>
                {values.oldPrice ? <span className={css.saleLabel}><p className={css.saleLabelSale}>{(((values.oldPrice / values.price) * 100) - 100).toFixed(0) }%</p></span> : ''}
            </div>
        )
    }

    // phần navbar
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
                    <li onClick={()=>setHome30ShineShop('combo')} className={`${css.navbarItem} ${css.productCombos}`}>
                        <h4 className={css.navbarItemText}>COMBO SIÊU HỜI</h4>
                    </li>
                    <li onClick={()=>setHome30ShineShop('sellingProducts')} className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>SẢN PHẨM BÁN CHẠY</h4>
                    </li>
                    <li onClick={()=>setHome30ShineShop('newProduct')} ref={productNew} className={css.navbarItem}>
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
                    <li onClick={()=>setHome30ShineShop('introduce')} className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>GIỚI THIỆU</h4>
                    </li>
                </ul>
            </div>
        )
    }

    // phần HOME
    const BodyPage30shineShop = () => {

        // phần ảnh trượt tự động
        const Slider = () => {
            const [imgActive, setImgActive] = useState(1)
            const imgItem1 = useRef()
            const imgItem2 = useRef()
            // let setTimeSlider = useRef()
            let setTimeSlider
    
            function setImgSlider() {
                if(imgActive === 1) {
                    imgItem1.current.classList.add(`${css.imgMinus100}`)
                    imgItem2.current.classList.add(`${css.imgMinus100}`)
                    imgItem2.current.classList.add(`${css.zIndex2}`)
    
                    setTimeout(()=>{
                        imgItem1.current.classList.remove(`${css.imgMinus100}`)
                        imgItem1.current.classList.add(`${css.zIndex1}`)
                        imgItem1.current.classList.add(`${css.img100}`)
                    },250)
    
                    setImgActive(2)
                }else if(imgActive === 2) {
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
                    if(imgActive === 1){
                        setImgActive(2)
                        setImgSlider()
                    }else{
                        setImgActive(1)
                        setImgSlider()
                    }
                }
            }
    
    
            return(
                <div ref={containerSlider} className={css.slider}>
                    <img ref={imgItem1} className={css.sliderImg1} src={imgBannerSlider1} alt=""/>
                    <img ref={imgItem2} className={css.sliderImg2} src={imgBannerSlider2} alt=""/>
                    <div className={css.iconSlider}>
                        <i onClick={()=>{handaleClickSlider("left")}} className={`${css.sliderIconLeft}`}><FaAngleLeft/></i>
                        <i onClick={()=>{handaleClickSlider("right")}} className={`${css.sliderIconRight}`}><FaAngleRight/></i>
                    </div>
                </div>
            )
        }

        // phần cam kết cho các sản phẩm và thông tin
        const Commit = () => {
            return (
                <div ref={containerCommit} className={css.commit}>
                    <div className={css.commitService}>
                        <div className={css.commitServiceList}>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit1} alt=""/>
                                <p className={css.commitServiceText}>Giao hàng siêu tốc</p>
                            </div>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit2} alt=""/>
                                <p className={css.commitServiceText}>Hoàn tiền 120%</p>
                            </div>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit3} alt=""/>
                                <p className={css.commitServiceText}>Đổi trả tân nơi</p>
                            </div>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit4} alt=""/>
                                <p className={css.commitServiceText}>Cam kết 7 ngày hiệu quả</p>
                            </div>
                        </div>
                        <div className={css.commitProduct}>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit1} alt=""/>
                                <p className={css.commitProductText}>Sản phẩm mới</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit2} alt=""/>
                                <p className={css.commitProductText}>Sale sốc deal hời</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit3} alt=""/>
                                <p className={css.commitProductText}>Sản phẩm độc quyền</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit4} alt=""/>
                                <p className={css.commitProductText}>Nhanh hết mụn</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit5} alt=""/>
                                <p className={css.commitProductText}>Skin care</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit6} alt=""/>
                                <p className={css.commitProductText}>Muốn tóc đẹp</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit7} alt=""/>
                                <p className={css.commitProductText}>Thơm tho sạch sẽ</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit8} alt=""/>
                                <p className={css.commitProductText}>Râu care</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        // phần GỢI Ý HÔM NAY MUA SẮM LIỀN TAY
        const ProductSuggestion = () => {
    
            return(
                <div ref={containerProductSuggestion} className={css.productSuggestion}>
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
                            {listAllProducts.map((allProduct,index)=>{
                                if(index < 20) {
                                    return (
                                        <Products
                                            index = {index}
                                            img={allProduct.image}
                                            nameProduct={allProduct.name_product}
                                            price={allProduct.price}
                                            oldPrice ={allProduct.old_price}
                                            star = {allProduct.star}
                                        />
                                    )
                                }
                            })}
                        </div>
                        <div onClick={()=>{productNew.current.click()}} className={css.seeMoreProducts}>
                            <span className={css.seeMoreProductsText}>Xem thêm</span>
                            <AiOutlineArrowRight/>
                        </div>
                    </div>
                </div>
            )
        }

        // mục top sản phẩm nổi bật
        const Highlights = () => {
            const [product, setProduct] = useState(0)
            const listProduct = useRef()
            const buttonClickRight = useRef()
            const buttonClickLeft = useRef()
                
            // xử lý khi người dùng click vào di chuyển list sản phẩm mới
            function handleTransferProductTopProduct(value) {
                if(value === 'left') {
                    if(product >= -10) {
                        buttonClickLeft.current.style.cursor = 'no-drop'
                    }else {
                        setProduct(product + 101.2)
                        buttonClickLeft.current.style.cursor = 'pointer'
                        buttonClickRight.current.style.cursor = 'pointer'
                    }
                }else if(value === 'right'){
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
                    buttonClickLeft.current.style.cursor = 'pointer'
                }
                listProduct.current.style = `transform: translateX(${product}%`
            }, [product])
    
    
    
            return(
                <div ref={containerHighlights} className={css.containerHighlights}>
                    <div className={css.highlights}>
                        <div className={css.highlightsTitle}>
                            <h2 className={css.highlightsTitleText}>TOP SẢN PHẨM NỔI BẬT</h2>
                            <div className={css.highlightsTitleAllProduct}>
                                <p className={css.highlightsTitleAllProductText}>Xem tất cả</p>
                                <AiOutlineRight/>
                            </div>
                        </div>
                    </div>
                    <div className={css.highlightsContainerListProduct}>
                        <div ref={listProduct} className={css.highlightsListProduct}>
                            {listAllProducts.map((featuredProduct, index)=>{
                                return(
                                    <div key={index} className={css.productItem}>
                                        <img className={css.productItemImg} src={featuredProduct.image} alt=""/>
                                        <div className={css.productItemDetail}>
                                            <p className={css.productItemName}>{featuredProduct.name_product}</p>
                                            <div className={css.productItemPrices}>
                                                <span className={css.productItemPrice}>{featuredProduct.price}₫</span>
                                                {featuredProduct.old_price ? <span className={css.productItemOldPrice}>{featuredProduct.old_price}₫</span> : ''}
                                            </div>
                                            {featuredProduct.star === 0 ? <div className={css.productItemStar}><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                            {featuredProduct.star === 1 ? <div className={css.productItemStar}><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                            {featuredProduct.star === 2 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                            {featuredProduct.star === 3 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/></div> : ''}
                                            {featuredProduct.star === 4 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></div> : ''}
                                            {featuredProduct.star === 5 ? <div className={css.productItemStar}><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div> : ''}
                                        </div>
                                        {featuredProduct.old_price ? <span className={css.saleLabel}><p className={css.saleLabelSale}>{(((featuredProduct.price / featuredProduct.old_price) * 100) - 100).toFixed(0) }%</p></span> : ''}
                                    </div>
                                )
                            })}
                        </div>
                        <i ref={buttonClickLeft} onClick={()=>{handleTransferProductTopProduct('left')}} className={`${css.listStoryIconLeft}`}><FaAngleLeft/></i>
                        <i ref={buttonClickRight} onClick={()=>{handleTransferProductTopProduct('right')}} className={`${css.listStoryIconRight}`}><FaAngleRight/></i>
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

        // mục thương hiệu nổi bật
        const Trademark = () => {
            const [trademarkSlider, setTrademarkSlider] = useState(0)
            const buttonClickLeft = useRef()
            const buttonClickRight = useRef()
            const trademarkListImg = useRef()
    
            function handleTransferProduct(value) {
                if(value === 'left') {
                    if(trademarkSlider >= 0) {
                        buttonClickLeft.current.style.cursor = 'no-drop'
                    }else {
                        setTrademarkSlider(trademarkSlider + 16.7)
                        buttonClickLeft.current.style.cursor = 'pointer'
                        buttonClickRight.current.style.cursor = 'pointer'
                    }
                }else if(value === 'right'){
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
                <div ref={containerTrademark} className={css.trademark}>
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

        // mục cam kết và hỗ trợ
        const ListCommit = () => {
            return(
                <div ref={ContainerListCommit} className={css.ContainerListCommit}>
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
        return(
            <div id={css.bodyPage30shineShop}>
                <Slider/>
                <Commit/>
                <Highlights/>
                <ProductSuggestion/>
                <Trademark/>
                <ListCommit/>
                <Contact/>
            </div>
        )
    }

    // phần COMBO SIÊU HỜI, SẢN PHẨM BÁN CHẠY và SẢN PHẨM MỚI
    const BodyCombo = (value) => {
        // khi chuyển trang thì sẽ trở về vị trí Top
        document.documentElement.scrollTop = 0;

        // tất cả các combo sẽ được lưu tại đây
        const [listProductItems, setListProductItems] = useState([])
        // combo nếu người dùng tìm kiếm sẽ được lưu tại đây
        const [resultProductSearch, setResultProductSearch] = useState()

        // value của khoản giá
        const SearchPriceFrom = useRef()
        const SearchPriceArrives = useRef()
        const btnApplySearchByPrice = useRef()

        // item sắp xếp lại combo
        const sortOption = useRef()
        const textSort = useRef()

        
        // hàm xử lý bỏ các dấu chấm của một chuỗi
        function removeTheDotsInTheString(n) {
            return n.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
        }

        // xử lý thêm các dấu chấm ở đơn vị nghìn
        function handlingNumber(n) {
            const valueInput = n.target.value
            const str = removeTheDotsInTheString(valueInput)
            var parts=str.toString().split(".");
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (parts[1] ? "." + parts[1] : "");
        }

        useEffect(()=>{
            if(value.name === "COMBO SIÊU TIẾT KIỆM") {
                fetch('http://localhost:5000/product_combos')
                    .then(res => res.json())
                    .then((listItems) => {
                        setListProductItems(listItems)
                    })
            }else if(value.name === "SẢN PHẨM BÁN CHẠY NHẤT") {
                let productTopSale = []
                    listAllProducts.map((listItem)=>{
                        if(listItem.sales >= 500) {
                            productTopSale.push(listItem)
                        }
                    })
                    setListProductItems(productTopSale)
            }else if(value.name === "SẢN PHẨM MỚI") {
                setListProductItems(listAllProducts)
            }
        },[])

        // xử lý khi người dùng search theo khoảng giá
        function handlingSearchOfPrice() {
            const priceFrom = Number(removeTheDotsInTheString(SearchPriceFrom.current.value))
            const priceArrives = Number(removeTheDotsInTheString(SearchPriceArrives.current.value))
            let productSearchOfPrice = []
            listProductItems.map((listProductItem, index)=>{
                const priceSearch = listProductItem.old_price ? listProductItem.old_price :  listProductItem.price
                if((priceSearch >= priceFrom && priceSearch <= priceArrives) || (priceSearch >= priceFrom && priceArrives == "")) {
                    productSearchOfPrice.push(listProductItem)
                }
            })
            setResultProductSearch(productSearchOfPrice)
        }

        // xử lý khi click vào ô sắp xếp sản phẩm
        var optionSearch = false
        function handlingClickSort() {
            if(optionSearch === false) {
                sortOption.current.style.display = "block"
                optionSearch = true
            }else {
                sortOption.current.style.display = "none"
                optionSearch = false
            }
        }

        // xử lý khi click vào Item sắp xếp sản phẩm
        function handlingClickItemSort(value) {
            const userSelection = value.target.innerText
            textSort.current.innerText = userSelection
            const resultSortProduct = listProductItems
            if(userSelection === "Giá thấp đến cao") {// sắp xếp sản phẩm theo giá từ thấp đến cao
                resultSortProduct.sort((a,b)=>{
                    const itemA = a.old_price != null ? a.old_price : a.price
                    const itemB = b.old_price != null ? b.old_price : b.price
                    return(itemA - itemB)
                })
                setResultProductSearch(resultSortProduct);
            }else if(userSelection === "Giá cao đến thấp") {// sắp xếp sản phẩm theo giá từ ca đến thấp
                resultSortProduct.sort((a,b)=>{
                    const itemA = a.old_price != null ? a.old_price : a.price
                    const itemB = b.old_price != null ? b.old_price : b.price
                    return(itemB - itemA)
                })
                setResultProductSearch(resultSortProduct);
            }
        }

        function handlingShowThousandFrom(e) {
            SearchPriceFrom.current.value = handlingNumber(e)
        }
        function handlingShowThousandTo(e) {
            SearchPriceArrives.current.value = handlingNumber(e)
        }


        return(
            <div className={css.containerCombo}>
                <h2 className={css.titleCombo}>{value.name}</h2>
                <div className={css.bodyCombo}>
                    <div className={css.containerComboProduct}>
                        <div className={css.containerComboTitle}>
                            <div>
                                <p>sản phẩm được tìm thấy theo "{value.name}"</p>
                            </div>
                            <div className={css.ProductArrangements}>
                                <h4>Sắp xếp theo</h4>
                                <div onClick={()=>{handlingClickSort()}} className={css.ProductArrangementsChoose}>
                                    <p ref={textSort} className={css.ProductArrangementsChooseText}>Mặc định</p>
                                    <AiFillCaretDown/>
                                    <div ref={sortOption} className={css.sortOption}>
                                        <div onClick={(e)=>{handlingClickItemSort(e)}} className={css.sortOptionItem}>Giá thấp đến cao</div>
                                        <div onClick={(e)=>{handlingClickItemSort(e)}} className={css.sortOptionItem}>Giá cao đến thấp</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className={css.listComboProduct} >
                            {
                                (resultProductSearch != undefined ? resultProductSearch : listProductItems).map((listItem, index)=>{
                                    return (
                                        <Products
                                            index = {index}
                                            img={listItem.image}
                                            nameProduct={listItem.name_product}
                                            price={listItem.price}
                                            oldPrice ={listItem.old_price}
                                            star = {listItem.star}
                                        />
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className={css.containerFilterProducts}>
                        <div className={css.filterProducts}>
                            <div className={css.filterProductsSub}>
                                <h3 className={css.filterProductsSubText}>Khoảng Giá</h3>
                                <div className={css.SearchByPrice}>
                                    <div className={css.SearchByPriceItem}>
                                        <div className={css.SearchByPriceText}>Từ</div>
                                        <input ref={SearchPriceFrom} onChange={(e)=>{handlingShowThousandFrom(e)}} className={`${css.SearchByPriceInput} ${css.SearchPriceFrom}`} type="text" placeholder="_ _ _"/>
                                        <div className={css.SearchByPriceUnit}>đ</div>
                                    </div>
                                    <div className={css.SearchByPriceItemSub}>_</div>
                                    <div className={css.SearchByPriceItem}>
                                        <div className={css.SearchByPriceText}>Đến</div>
                                        <input ref={SearchPriceArrives} onChange={(e)=>{handlingShowThousandTo(e)}} className={`${css.SearchByPriceInput} ${css.SearchPriceArrives}`} type="text" placeholder="_ _ _"/>
                                        <div className={css.SearchByPriceUnit}>đ</div>
                                    </div>
                                </div>
                                <button ref={btnApplySearchByPrice} onClick={()=>{handlingSearchOfPrice()}} className={css.filterProductsSubBtn}>Áp dụng</button>
                            </div>
                            <div className={css.evaluate}>
                                <h3 className={css.evaluateTextTitle}>Đánh Giá</h3>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>5 sao</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Trở lên</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Trở lên</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Trở lên</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Trở lên</p>
                                </div>
                            </div>
                            <div className={css.listTrademark}>
                                <h3 className={css.listTrademarkTitle}>Thương hiệu</h3>
                                <div className={css.listTrademarkContainerInput}>
                                    <input className={css.listTrademarkInput} type="text" placeholder="Tìm thương hiệu..."/>
                                    <div className={css.listTrademarkContainerInputIcon}>
                                        <AiOutlineSearch/>
                                    </div>
                                </div>
                                <div className={css.containerNameTrademark}>
                                    <div className={css.containerNameTrademarkItem}>
                                        <input className={css.NameTrademark} id="HALIO" type="checkbox"/><label htmlFor="HALIO">HALIO</label>
                                    </div>
                                    <div className={css.containerNameTrademarkItem}>
                                        <input className={css.NameTrademark} id="SIMPLE" type="checkbox"/><label htmlFor="SIMPLE">SIMPLE</label>
                                    </div>
                                    <div className={css.containerNameTrademarkItem}>
                                        <input className={css.NameTrademark} id="GGG" type="checkbox"/><label htmlFor="GGG">G.G.G</label>
                                    </div>
                                    <div className={css.containerNameTrademarkItem}>
                                        <input className={css.NameTrademark} id="SELSUN" type="checkbox"/><label htmlFor="SELSUN">SELSUN</label>
                                    </div>
                                    <div className={css.containerNameTrademarkItem}>
                                        <input className={css.NameTrademark} id="DERLADIE" type="checkbox"/><label htmlFor="DERLADIE">DERLADIE</label>
                                    </div>
                                </div>
                                <div className={css.allTrademark}>
                                    <p className={css.allTrademarkText}>Xem thêm</p>
                                    <AiOutlineDown/>
                                </div>
                            </div>
                            <div className={css.containerDeleteFilter}>
                                <div className={css.deleteFilter}>
                                    <p className={css.deleteFilterText}>Bỏ tất cả lọc</p>
                                    <AiOutlineFilter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // phần giới thiệu 30Shine
    const Introduce = () => {
        return (
            <div className={css.introduce}>
                <div className={css.introduce_Slider}>
                    <img className={css.introduce_Slider_img} src={bannerIntroduce} alt=""/>
                </div>
                <div className={css.introduce_container_Body}>
                    <div className={css.introduce_body_store}>
                        <div className={css.introduce_body_item_main}>
                            <h2 className={css.introduce_body_item_title}>30Shine Store</h2>
                            <p className={css.introduce_body_item_text}>
                                Sứ mệnh của 30Shine Store là giúp nam giới Việt Nam có được vẻ ngoài đẹp trai, tinh thần sảng khoái thu hút phái đẹp. Với kinh nghiệm phục vụ hàng triệu nam giới Việt thông qua việc chuyên cung cấp các sản phẩm chăm sóc tóc, da mặt, dầu gội…của chuỗi cắt tóc nam 30Shine. 30Shine Store khẳng định được vị thế là nhà phân phối mỹ phẩm nam chính hãng giá tốt nhất thị trường. Song song với sự phát triển của xã hội và nhu cầu chăm sóc tăng cao của nam giới vì chính ngoại hình giúp phái mạnh trở nên tự tin hơn, có nhiều cơ hội trong cuộc sống. Hiểu được điều này 30Shine Store đem đến cho bạn những dòng sản phẩm dẫn đầu thị trường với giá cực tốt:
                            </p>
                        </div>
                        <div className={css.introduce_body_list_container_item}>
                            <div className={css.introduce_body_list_item}>
                                <img src={medalIntroduce} alt=""/>
                                <h3 className={css.introduce_body_list_item_title}>Chất lượng thật - Giá trị thật</h3>
                                <p>
                                    30Shine Store đa dạng hoá tất cả các sản phẩm giúp nam giới tự tin hơn và bứt phá trong cuộc sống. Hơn 200 mặt hàng tiêu dùng và hơn 100 sản phẩm chuyên dụng chăm sóc tóc, chăm sóc da, sản phẩm underwear đồ lót, tất nam…
                                </p>
                            </div>
                            <div className={css.introduce_body_list_item}>
                                <img src={giftBoxIntroduce} alt=""/>
                                <h3 className={css.introduce_body_list_item_title}>Chính sách cho khách hàng</h3>
                                <p>
                                    Hàng ngàn khách hàng đã sử dụng sản phẩm của 30Shine Store. Tất cả khách hàng của 30Shine đều sử dụng sản phẩm 30Shine Store cung cấp. Chính sách đổi trả hàng không cần lý do trên tất cả hệ thống cửa hàng 30Shine trên toàn quốc. 30Shine Store làm tất cả vì sự hài lòng của khách hàng.
                                </p>
                            </div>
                            <div className={css.introduce_body_list_item}>
                                <img src={carIntroduce} alt=""/>
                                <h3 className={css.introduce_body_list_item_title}>Hỗ trợ giao hàng toàn quốc</h3>
                                <p>
                                    Vận chuyển nhanh chóng, giao hàng tận nơi. Gọi điện đặt hàng là có hàng luôn. Thanh toán ship COD an toàn tiện lợi, phù hợp với mọi khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={css.introduce_body_Item1}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>Các sản phẩm của chúng tôi</h2>
                            <p>30Shine Store mang đến những sản phẩm của những thương hiệu hàng đầu thế giới được nhiều người ưa dùng.</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team1Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_body_Item2}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>Chi tiết sản phẩm</h2>
                            <p>Bất cứ sản phẩm nào không đạt được tiêu chuẩn sẽ được loại bỏ và tiêu hủy lập tức. Sản phẩm hoàn thiện đồng nhất đảm bảo chất lượng đưa tới tay người tiêu dùng.</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team2Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_body_Item1}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>Đảm bảo chất lượng</h2>
                            <p>Tất cả sản phẩm của chúng tôi đều được đảm bảo thích ứng tốt với người Việt Nam, không gây các tác dụng phụ hay ảnh hưởng đến sức khỏe khi sử dụng lâu dài. Mọi tác động đến sức khỏe có nguyên nhân từ sản phẩm của chúng tôi đều được công ty chịu hoàn toàn trách nhiệm.</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team3Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_body_Item2}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>Chúng tôi luôn lắng nghe</h2>
                            <p>30Shine Store luôn lắng nghe phản hồi, góp ý từ phía khách hàng nhằm ngày càng cải thiện chất lượng dịch vụ, sản phẩm tốt hơn tới tay khách hàng</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team4Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_footer_Of_body}>
                        <div className={css.introduce_footer_Of_body_title}>
                            <h2 className={css.introduce_footer_Of_body_title_text}>Tại sao chọn chúng tôi</h2>
                            <p>
                                Vì sứ mệnh tạo nên những giá trị thương hiệu, chúng tôi đã, đang và sẽ luôn nỗ lực hết mình vì sự phát triển – khẳng định thương hiệu Việt, mang lại những giá trị lâu dài cho doanh nghiệp.
                            </p>
                        </div>
                        <div className={css.introduce_footer_Of_body_List}>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services1Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Giá trị cốt lõi</h3>
                                <p>
                                    Với cốt lõi luôn xem khách hàng là bạn hàng. Chúng tôi mong muốn đem đến cho các khách hàng, đối tác của mình những sản phẩm, dịch vụ với chất lượng vượt trội.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services2Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Tầm nhìn và Sứ mệnh</h3>
                                <p>
                                30Shine Store tin tưởng & nỗ lực mỗi ngày để mang đến những sản phẩm chất lượng cho phái mạnh toàn cầu kiểu tóc khỏe đẹp, làn da khoẻ mạnh cuốn hút phái đẹp; tinh thần thư giãn để bứt phá trong sự nghiệp.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services3Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Thế mạnh của chúng tôi?</h3>
                                <p>
                                Cam kết cung cấp các sản phẩm chính hãng 100%. Số lượng sản phẩm lớn nhất với chủng loại đa dạng, phong phú sẽ đáp ứng tất cả nhu cầu mua sắm của bạn.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services4Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Hỗ trợ khách hàng 24/7</h3>
                                <p>
                                Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây chăm sóc khách hàng của chúng tôi.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services5Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Đổi trả, hoàn tiền</h3>
                                <p>
                                Nếu nhận được sản phẩm bị lỗi ngoại quan (có dấu hiệu bị trầy xước, hư hỏng bên ngoài, bể vỡ ) , quý khách vui lòng liên hệ trong vòng 48h kể từ khi nhận hàng thành công.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services6Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Chính sách bảo mật</h3>
                                <p>
                                Chúng tôi coi trọng việc bảo mật thông tin và sử dụng các biện pháp tốt nhất để bảo vệ thông tin cũng như việc thanh toán của khách hàng.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <div id={`${css.page}`}>
            <Navbar/>
            {home30ShineShop==='home' ? <BodyPage30shineShop/> : 
                home30ShineShop==='combo' ? <BodyCombo
                                                name = "COMBO SIÊU TIẾT KIỆM"
                                            /> :
                home30ShineShop==='sellingProducts' ? <BodyCombo
                                                name = "SẢN PHẨM BÁN CHẠY NHẤT"
                                            /> :
                home30ShineShop==='newProduct' ? <BodyCombo
                                                name = "SẢN PHẨM MỚI"
                                            /> :
                home30ShineShop==='introduce' ? <Introduce/> :
            ''}
            
            <Footer/>
        </div>
    )
}

export default HairStore