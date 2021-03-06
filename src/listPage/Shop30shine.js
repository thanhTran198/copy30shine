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

    // g???i API
    useEffect(()=>{
        fetch('https://thanhtran198.github.io/API-json30shine/productCombos.json')
            .then(res => res.json())
            .then((listItems) => {
                setListAllProducts(listItems.products)
            })
    }, [])

    
    // x??? l?? th??m d???u ch???m ????n v??? ngh??n s???n ph???m
    function formatNumber(a, b, c, d) {
        var e = isNaN(b = Math.abs(b)) ? 2 : b;
        b = void 0 == c ? "," : c;
        d = void 0 == d ? "," : d;
        c = 0 > a ? "-" : "";
        var g = parseInt(a = Math.abs(+a || 0).toFixed(e)) + "",
            n = 3 < (n = g.length) ? n % 3 : 0;
        return c + (n ? g.substr(0, n) + d : "") + g.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + d) + (e ? b + Math.abs(a - g).toFixed(e).slice(2) : "")
    }

    // h??m t???o s???n ph???m
    function Products(values) {
        return(
            <div key={values.index} className={css.productsItem}>
                <img className={css.productsItemImg} src={values.img} alt=""/>
                <div className={css.productsItemDetail}>
                    <p className={css.productsItemName}>{values.nameProduct}</p>
                    <div className={css.productsItemPrices}>
                        <span className={css.productsItemPrice}>{values.oldPrice ? formatNumber(values.oldPrice, 0, ",", ".") : formatNumber(values.price, 0, ",", ".")}???</span>
                        {values.oldPrice != null? <span className={css.productsItemOldPrice}>{formatNumber(values.price, 0, ",", ".")}???</span> : ''}
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

    // ph???n navbar
    const Navbar = () => {

        return(
            <div className={css.navbar}>
                <ul className={css.navbarList}>
                    <li className={`${css.navbarItem} ${css.navbarCateegoryCateegory}`}>
                        <div className={`${css.navbarCateegoryCateegoryList}`}>
                            <h4 className={`${css.navbarItemText}`}>DANH M???C</h4>
                            <AiFillCaretDown/>
                        </div>
                        <div className={css.navbarCateegoryContainerList}>
                            <ul className={css.navbarCateegoryList}>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading} ${css.hairStyling}`}>T???O KI???U T??C</h5>
                                        <p className={`${css.navbarCateegoryItemProduct} ${css.text123}`}>S??p vu???t t??c</p>
                                        <p className={css.navbarCateegoryItemProduct}>G??m gi??? n???p</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???o m??u t??c</p>
                                        <p className={css.navbarCateegoryItemProduct}>Pre Styling</p>
                                        <p className={css.navbarCateegoryItemProduct}>S???y t??c</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C DA M???T</h5>
                                        <p className={css.navbarCateegoryItemProduct}>S???a r???a m???t</p>
                                        <p className={css.navbarCateegoryItemProduct}>D?????ng da</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???y da ch???t</p>
                                        <p className={css.navbarCateegoryItemProduct}>Toner</p>
                                        <p className={css.navbarCateegoryItemProduct}>Kem ch???ng n???ng</p>
                                        <p className={css.navbarCateegoryItemProduct}>M???t n???</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C T??C</h5>
                                        <p className={css.navbarCateegoryItemProduct}>D???u g???i</p>
                                        <p className={css.navbarCateegoryItemProduct}>D???u x???</p>
                                        <p className={css.navbarCateegoryItemProduct}>D?????ng t??c</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C C?? TH???</h5>
                                        <p className={css.navbarCateegoryItemProduct}>S???a t???m</p>
                                        <p className={css.navbarCateegoryItemProduct}>Kh??? m??i c?? th???</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???y da ch???t c?? th???</p>
                                        <p className={css.navbarCateegoryItemProduct}>N?????c hoa</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>CH??M S??C C?? NH??N</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Ch??m s??c r??ng mi???ng</p>
                                        <p className={css.navbarCateegoryItemProduct}>C???o r??y</p>
                                        <p className={css.navbarCateegoryItemProduct}>Dung d???ch v??? sinh</p>
                                        <p className={css.navbarCateegoryItemProduct}>Bao cao su</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>TH???C PH???M CH???C N??NG</h5>
                                        <p className={css.navbarCateegoryItemProduct}>L??m ?????p</p>
                                        <p className={css.navbarCateegoryItemProduct}>S???c kh???e</p>
                                    </li>
                                    <li className={css.navbarCateegoryItem}>
                                        <h5 className={`${css.navbarCateegoryItemHeading}`}>TH???I TRANG</h5>
                                        <p className={css.navbarCateegoryItemProduct}>Qu???n l??t nam</p>
                                        <p className={css.navbarCateegoryItemProduct}>T???t nam</p>
                                    </li>
                            </ul>
                        </div>
                    </li>
                    <li onClick={()=>setHome30ShineShop('combo')} className={`${css.navbarItem} ${css.productCombos}`}>
                        <h4 className={css.navbarItemText}>COMBO SI??U H???I</h4>
                    </li>
                    <li onClick={()=>setHome30ShineShop('sellingProducts')} className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>S???N PH???M B??N CH???Y</h4>
                    </li>
                    <li onClick={()=>setHome30ShineShop('newProduct')} ref={productNew} className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>S???N PH???M M???I</h4>
                    </li>
                    <li className={`${css.navbarItem} ${css.exclusiveBrandContainer}`}>
                        <div className={css.exclusiveBrand}>
                            <h4 className={css.navbarItemText}>TH????NG HI???U ?????C QUY???N</h4>
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
                        <h4 className={css.navbarItemText}>GI???I THI???U</h4>
                    </li>
                </ul>
            </div>
        )
    }

    // ph???n HOME
    const BodyPage30shineShop = () => {

        // ph???n ???nh tr?????t t??? ?????ng
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
    
            // x??? l?? click tr???i ph???i
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

        // ph???n cam k???t cho c??c s???n ph???m v?? th??ng tin
        const Commit = () => {
            return (
                <div ref={containerCommit} className={css.commit}>
                    <div className={css.commitService}>
                        <div className={css.commitServiceList}>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit1} alt=""/>
                                <p className={css.commitServiceText}>Giao h??ng si??u t???c</p>
                            </div>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit2} alt=""/>
                                <p className={css.commitServiceText}>Ho??n ti???n 120%</p>
                            </div>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit3} alt=""/>
                                <p className={css.commitServiceText}>?????i tr??? t??n n??i</p>
                            </div>
                            <div className={css.commitServiceItem}>
                                <img className={css.commitServiceImg} src={imgIconCommit4} alt=""/>
                                <p className={css.commitServiceText}>Cam k???t 7 ng??y hi???u qu???</p>
                            </div>
                        </div>
                        <div className={css.commitProduct}>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit1} alt=""/>
                                <p className={css.commitProductText}>S???n ph???m m???i</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit2} alt=""/>
                                <p className={css.commitProductText}>Sale s???c deal h???i</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit3} alt=""/>
                                <p className={css.commitProductText}>S???n ph???m ?????c quy???n</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit4} alt=""/>
                                <p className={css.commitProductText}>Nhanh h???t m???n</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit5} alt=""/>
                                <p className={css.commitProductText}>Skin care</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit6} alt=""/>
                                <p className={css.commitProductText}>Mu???n t??c ?????p</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit7} alt=""/>
                                <p className={css.commitProductText}>Th??m tho s???ch s???</p>
                            </div>
                            <div className={css.commitProductLink}>
                                <img className={css.commitProductImg} src={imgCommit8} alt=""/>
                                <p className={css.commitProductText}>R??u care</p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        // ph???n G???I ?? H??M NAY MUA S???M LI???N TAY
        const ProductSuggestion = () => {
    
            return(
                <div ref={containerProductSuggestion} className={css.productSuggestion}>
                    <div className={css.productSuggestionBanner}>
                        <img className={css.productSuggestionBannerImg} src={imgProductSuggestionBanner} alt=""/>
                        <div className={css.productSuggestionBannerText}>
                            <h3 className={css.productSuggestionBannerTextTitle}>G???I ?? H??M NAY MUA S???M LI???N TAY</h3>
                            <p className={css.productSuggestionBannerTextSubText}>L???a Ch???n H??ng ?????u D??nh Cho Qu?? Kh??ch</p>
                        </div>
                    </div>
                    <div className={css.productSuggestionProduct}>
                        <div className={css.productSuggestionContainerCategory}>
                            <div className={css.productSuggestionCategory}>
                                <div className={css.productSuggestionCategoryItem}>S???n ph???m m???i</div>
                                <div className={css.productSuggestionCategoryItem}>T???o ki???m t??c</div>
                                <div className={css.productSuggestionCategoryItem}>Ch??m s??c t??c</div>
                                <div className={css.productSuggestionCategoryItem}>Ch??m s??c da</div>
                                <div className={css.productSuggestionCategoryItem}>Ch??m s??c c?? nh??n</div>
                                <div className={css.productSuggestionCategoryItem}>Combo si??u ti???t ki???m</div>
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
                            <span className={css.seeMoreProductsText}>Xem th??m</span>
                            <AiOutlineArrowRight/>
                        </div>
                    </div>
                </div>
            )
        }

        // m???c top s???n ph???m n???i b???t
        const Highlights = () => {
            const [product, setProduct] = useState(0)
            const listProduct = useRef()
            const buttonClickRight = useRef()
            const buttonClickLeft = useRef()
                
            // x??? l?? khi ng?????i d??ng click v??o di chuy???n list s???n ph???m m???i
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
                            <h2 className={css.highlightsTitleText}>TOP S???N PH???M N???I B???T</h2>
                            <div className={css.highlightsTitleAllProduct}>
                                <p className={css.highlightsTitleAllProductText}>Xem t???t c???</p>
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
                                                <span className={css.productItemPrice}>{featuredProduct.price}???</span>
                                                {featuredProduct.old_price ? <span className={css.productItemOldPrice}>{featuredProduct.old_price}???</span> : ''}
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

        // m???c th????ng hi???u n???i b???t
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
                    <h2 className={css.trademarkTitle}>TH????NG HI???U N???I B???T</h2>
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

        // m???c cam k???t v?? h??? tr???
        const ListCommit = () => {
            return(
                <div ref={ContainerListCommit} className={css.ContainerListCommit}>
                    <div className={css.listCommit}>
                        <div className={css.listCommitContainerItem}>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit1} alt=""/>
                                <span className={css.listCommitText}>Cam k???t 7 ng??y hi???u qu???</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit2} alt=""/>
                                <span className={css.listCommitText}>Mua 1 h?????ng 5 ?????c quy???n</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit3} alt=""/>
                                <span className={css.listCommitText}>Ch??nh s??ch ho??n ti???n 120%</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit4} alt=""/>
                                <span className={css.listCommitText}>Ch???t l?????ng s???n ph???m cao c???p nh???t</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit5} alt=""/>
                                <span className={css.listCommitText}>Giao h??ng si??u t???c 2h</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit6} alt=""/>
                                <span className={css.listCommitText}>?????i tr??? t???n n??i trong 24h</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit7} alt=""/>
                                <span className={css.listCommitText}>T???ng ????i t?? v???n m???i l??c m???i n??i</span>
                            </div>
                            <div className={css.listCommitItem}>
                                <img className={css.listCommitItemImg} src={imgListCommit8} alt=""/>
                                <span className={css.listCommitText}>An to??n chu???n giao v???n qu???c t???</span>
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

    // ph???n COMBO SI??U H???I, S???N PH???M B??N CH???Y v?? S???N PH???M M???I
    const BodyCombo = (value) => {
        // khi chuy???n trang th?? s??? tr??? v??? v??? tr?? Top
        document.documentElement.scrollTop = 0;

        // t???t c??? c??c combo s??? ???????c l??u t???i ????y
        const [listProductItems, setListProductItems] = useState([])
        // combo n???u ng?????i d??ng t??m ki???m s??? ???????c l??u t???i ????y
        const [resultProductSearch, setResultProductSearch] = useState()

        // value c???a kho???n gi??
        const SearchPriceFrom = useRef()
        const SearchPriceArrives = useRef()
        const btnApplySearchByPrice = useRef()

        // item s???p x???p l???i combo
        const sortOption = useRef()
        const textSort = useRef()

        
        // h??m x??? l?? b??? c??c d???u ch???m c???a m???t chu???i
        function removeTheDotsInTheString(n) {
            return n.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
        }

        // x??? l?? th??m c??c d???u ch???m ??? ????n v??? ngh??n
        function handlingNumber(n) {
            const valueInput = n.target.value
            const str = removeTheDotsInTheString(valueInput)
            var parts=str.toString().split(".");
            return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (parts[1] ? "." + parts[1] : "");
        }

        useEffect(()=>{
            if(value.name === "COMBO SI??U TI???T KI???M") {
                fetch('https://thanhtran198.github.io/API-json30shine/productCombos.json')
                    .then(res => res.json())
                    .then((listItems) => {
                        setListProductItems(listItems.product_combos)
                    })
            }else if(value.name === "S???N PH???M B??N CH???Y NH???T") {
                let productTopSale = []
                    listAllProducts.map((listItem)=>{
                        if(listItem.sales >= 500) {
                            productTopSale.push(listItem)
                        }
                    })
                    setListProductItems(productTopSale)
            }else if(value.name === "S???N PH???M M???I") {
                setListProductItems(listAllProducts)
            }
        },[])

        // x??? l?? khi ng?????i d??ng search theo kho???ng gi??
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

        // x??? l?? khi click v??o ?? s???p x???p s???n ph???m
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

        // x??? l?? khi click v??o Item s???p x???p s???n ph???m
        function handlingClickItemSort(value) {
            const userSelection = value.target.innerText
            textSort.current.innerText = userSelection
            const resultSortProduct = listProductItems
            if(userSelection === "Gi?? th???p ?????n cao") {// s???p x???p s???n ph???m theo gi?? t??? th???p ?????n cao
                resultSortProduct.sort((a,b)=>{
                    const itemA = a.old_price != null ? a.old_price : a.price
                    const itemB = b.old_price != null ? b.old_price : b.price
                    return(itemA - itemB)
                })
                setResultProductSearch(resultSortProduct);
            }else if(userSelection === "Gi?? cao ?????n th???p") {// s???p x???p s???n ph???m theo gi?? t??? ca ?????n th???p
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
                                <p>s???n ph???m ???????c t??m th???y theo "{value.name}"</p>
                            </div>
                            <div className={css.ProductArrangements}>
                                <h4>S???p x???p theo</h4>
                                <div onClick={()=>{handlingClickSort()}} className={css.ProductArrangementsChoose}>
                                    <p ref={textSort} className={css.ProductArrangementsChooseText}>M???c ?????nh</p>
                                    <AiFillCaretDown/>
                                    <div ref={sortOption} className={css.sortOption}>
                                        <div onClick={(e)=>{handlingClickItemSort(e)}} className={css.sortOptionItem}>Gi?? th???p ?????n cao</div>
                                        <div onClick={(e)=>{handlingClickItemSort(e)}} className={css.sortOptionItem}>Gi?? cao ?????n th???p</div>
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
                                <h3 className={css.filterProductsSubText}>Kho???ng Gi??</h3>
                                <div className={css.SearchByPrice}>
                                    <div className={css.SearchByPriceItem}>
                                        <div className={css.SearchByPriceText}>T???</div>
                                        <input ref={SearchPriceFrom} onChange={(e)=>{handlingShowThousandFrom(e)}} className={`${css.SearchByPriceInput} ${css.SearchPriceFrom}`} type="text" placeholder="_ _ _"/>
                                        <div className={css.SearchByPriceUnit}>??</div>
                                    </div>
                                    <div className={css.SearchByPriceItemSub}>_</div>
                                    <div className={css.SearchByPriceItem}>
                                        <div className={css.SearchByPriceText}>?????n</div>
                                        <input ref={SearchPriceArrives} onChange={(e)=>{handlingShowThousandTo(e)}} className={`${css.SearchByPriceInput} ${css.SearchPriceArrives}`} type="text" placeholder="_ _ _"/>
                                        <div className={css.SearchByPriceUnit}>??</div>
                                    </div>
                                </div>
                                <button ref={btnApplySearchByPrice} onClick={()=>{handlingSearchOfPrice()}} className={css.filterProductsSubBtn}>??p d???ng</button>
                            </div>
                            <div className={css.evaluate}>
                                <h3 className={css.evaluateTextTitle}>????nh Gi??</h3>
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
                                    <p className={css.evaluateStarText}>Tr??? l??n</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Tr??? l??n</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Tr??? l??n</p>
                                </div>
                                <div className={css.evaluateStar}>
                                    <div className={css.evaluateStarStar}>
                                        <AiFillStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/><AiOutlineStar/>
                                    </div>
                                    <p className={css.evaluateStarText}>Tr??? l??n</p>
                                </div>
                            </div>
                            <div className={css.listTrademark}>
                                <h3 className={css.listTrademarkTitle}>Th????ng hi???u</h3>
                                <div className={css.listTrademarkContainerInput}>
                                    <input className={css.listTrademarkInput} type="text" placeholder="T??m th????ng hi???u..."/>
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
                                    <p className={css.allTrademarkText}>Xem th??m</p>
                                    <AiOutlineDown/>
                                </div>
                            </div>
                            <div className={css.containerDeleteFilter}>
                                <div className={css.deleteFilter}>
                                    <p className={css.deleteFilterText}>B??? t???t c??? l???c</p>
                                    <AiOutlineFilter/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // ph???n gi???i thi???u 30Shine
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
                                S??? m???nh c???a 30Shine Store l?? gi??p nam gi???i Vi???t Nam c?? ???????c v??? ngo??i ?????p trai, tinh th???n s???ng kho??i thu h??t ph??i ?????p. V???i kinh nghi???m ph???c v??? h??ng tri???u nam gi???i Vi???t th??ng qua vi???c chuy??n cung c???p c??c s???n ph???m ch??m s??c t??c, da m???t, d???u g???i???c???a chu???i c???t t??c nam 30Shine. 30Shine Store kh???ng ?????nh ???????c v??? th??? l?? nh?? ph??n ph???i m??? ph???m nam ch??nh h??ng gi?? t???t nh???t th??? tr?????ng. Song song v???i s??? ph??t tri???n c???a x?? h???i v?? nhu c???u ch??m s??c t??ng cao c???a nam gi???i v?? ch??nh ngo???i h??nh gi??p ph??i m???nh tr??? n??n t??? tin h??n, c?? nhi???u c?? h???i trong cu???c s???ng. Hi???u ???????c ??i???u n??y 30Shine Store ??em ?????n cho b???n nh???ng d??ng s???n ph???m d???n ?????u th??? tr?????ng v???i gi?? c???c t???t:
                            </p>
                        </div>
                        <div className={css.introduce_body_list_container_item}>
                            <div className={css.introduce_body_list_item}>
                                <img src={medalIntroduce} alt=""/>
                                <h3 className={css.introduce_body_list_item_title}>Ch???t l?????ng th???t - Gi?? tr??? th???t</h3>
                                <p>
                                    30Shine Store ??a d???ng ho?? t???t c??? c??c s???n ph???m gi??p nam gi???i t??? tin h??n v?? b???t ph?? trong cu???c s???ng. H??n 200 m???t h??ng ti??u d??ng v?? h??n 100 s???n ph???m chuy??n d???ng ch??m s??c t??c, ch??m s??c da, s???n ph???m underwear ????? l??t, t???t nam???
                                </p>
                            </div>
                            <div className={css.introduce_body_list_item}>
                                <img src={giftBoxIntroduce} alt=""/>
                                <h3 className={css.introduce_body_list_item_title}>Ch??nh s??ch cho kh??ch h??ng</h3>
                                <p>
                                    H??ng ng??n kh??ch h??ng ???? s??? d???ng s???n ph???m c???a 30Shine Store. T???t c??? kh??ch h??ng c???a 30Shine ?????u s??? d???ng s???n ph???m 30Shine Store cung c???p. Ch??nh s??ch ?????i tr??? h??ng kh??ng c???n l?? do tr??n t???t c??? h??? th???ng c???a h??ng 30Shine tr??n to??n qu???c. 30Shine Store l??m t???t c??? v?? s??? h??i l??ng c???a kh??ch h??ng.
                                </p>
                            </div>
                            <div className={css.introduce_body_list_item}>
                                <img src={carIntroduce} alt=""/>
                                <h3 className={css.introduce_body_list_item_title}>H??? tr??? giao h??ng to??n qu???c</h3>
                                <p>
                                    V???n chuy???n nhanh ch??ng, giao h??ng t???n n??i. G???i ??i???n ?????t h??ng l?? c?? h??ng lu??n. Thanh to??n ship COD an to??n ti???n l???i, ph?? h???p v???i m???i kh??ch h??ng.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={css.introduce_body_Item1}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>C??c s???n ph???m c???a ch??ng t??i</h2>
                            <p>30Shine Store mang ?????n nh???ng s???n ph???m c???a nh???ng th????ng hi???u h??ng ?????u th??? gi???i ???????c nhi???u ng?????i ??a d??ng.</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team1Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_body_Item2}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>Chi ti???t s???n ph???m</h2>
                            <p>B???t c??? s???n ph???m n??o kh??ng ?????t ???????c ti??u chu???n s??? ???????c lo???i b??? v?? ti??u h???y l???p t???c. S???n ph???m ho??n thi???n ?????ng nh???t ?????m b???o ch???t l?????ng ????a t???i tay ng?????i ti??u d??ng.</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team2Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_body_Item1}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>?????m b???o ch???t l?????ng</h2>
                            <p>T???t c??? s???n ph???m c???a ch??ng t??i ?????u ???????c ?????m b???o th??ch ???ng t???t v???i ng?????i Vi???t Nam, kh??ng g??y c??c t??c d???ng ph??? hay ???nh h?????ng ?????n s???c kh???e khi s??? d???ng l??u d??i. M???i t??c ?????ng ?????n s???c kh???e c?? nguy??n nh??n t??? s???n ph???m c???a ch??ng t??i ?????u ???????c c??ng ty ch???u ho??n to??n tr??ch nhi???m.</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team3Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_body_Item2}>
                        <div>
                            <h2 className={css.introduce_body_Item_text}>Ch??ng t??i lu??n l???ng nghe</h2>
                            <p>30Shine Store lu??n l???ng nghe ph???n h???i, g??p ?? t??? ph??a kh??ch h??ng nh???m ng??y c??ng c???i thi???n ch???t l?????ng d???ch v???, s???n ph???m t???t h??n t???i tay kh??ch h??ng</p>
                        </div>
                        <img className={css.introduce_body_Item1_image} src={team4Introduce} alt=""/>
                    </div>
                    <div className={css.introduce_footer_Of_body}>
                        <div className={css.introduce_footer_Of_body_title}>
                            <h2 className={css.introduce_footer_Of_body_title_text}>T???i sao ch???n ch??ng t??i</h2>
                            <p>
                                V?? s??? m???nh t???o n??n nh???ng gi?? tr??? th????ng hi???u, ch??ng t??i ????, ??ang v?? s??? lu??n n??? l???c h???t m??nh v?? s??? ph??t tri???n ??? kh???ng ?????nh th????ng hi???u Vi???t, mang l???i nh???ng gi?? tr??? l??u d??i cho doanh nghi???p.
                            </p>
                        </div>
                        <div className={css.introduce_footer_Of_body_List}>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services1Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Gi?? tr??? c???t l??i</h3>
                                <p>
                                    V???i c???t l??i lu??n xem kh??ch h??ng l?? b???n h??ng. Ch??ng t??i mong mu???n ??em ?????n cho c??c kh??ch h??ng, ?????i t??c c???a m??nh nh???ng s???n ph???m, d???ch v??? v???i ch???t l?????ng v?????t tr???i.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services2Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>T???m nh??n v?? S??? m???nh</h3>
                                <p>
                                30Shine Store tin t?????ng & n??? l???c m???i ng??y ????? mang ?????n nh???ng s???n ph???m ch???t l?????ng cho ph??i m???nh to??n c???u ki???u t??c kh???e ?????p, l??n da kho??? m???nh cu???n h??t ph??i ?????p; tinh th???n th?? gi??n ????? b???t ph?? trong s??? nghi???p.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services3Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Th??? m???nh c???a ch??ng t??i?</h3>
                                <p>
                                Cam k???t cung c???p c??c s???n ph???m ch??nh h??ng 100%. S??? l?????ng s???n ph???m l???n nh???t v???i ch???ng lo???i ??a d???ng, phong ph?? s??? ????p ???ng t???t c??? nhu c???u mua s???m c???a b???n.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services4Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>H??? tr??? kh??ch h??ng 24/7</h3>
                                <p>
                                Trong tr?????ng h???p Qu?? Kh??ch h??ng c?? ?? ki???n ????ng g??p/khi???u n???i li??n quan ?????n ch???t l?????ng s???n ph???m, Qu?? Kh??ch h??ng vui l??ng li??n h??? ???????ng d??y ch??m s??c kh??ch h??ng c???a ch??ng t??i.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services5Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>?????i tr???, ho??n ti???n</h3>
                                <p>
                                N???u nh???n ???????c s???n ph???m b??? l???i ngo???i quan (c?? d???u hi???u b??? tr???y x?????c, h?? h???ng b??n ngo??i, b??? v??? ) , qu?? kh??ch vui l??ng li??n h??? trong v??ng 48h k??? t??? khi nh???n h??ng th??nh c??ng.
                                </p>
                            </div>
                            <div className={css.introduce_footer_Of_body_List_item}>
                                <img src={services6Introduce} alt=""/>
                                <h3 className={css.footer_Of_body_List_item_text}>Ch??nh s??ch b???o m???t</h3>
                                <p>
                                Ch??ng t??i coi tr???ng vi???c b???o m???t th??ng tin v?? s??? d???ng c??c bi???n ph??p t???t nh???t ????? b???o v??? th??ng tin c??ng nh?? vi???c thanh to??n c???a kh??ch h??ng.
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
                                                name = "COMBO SI??U TI???T KI???M"
                                            /> :
                home30ShineShop==='sellingProducts' ? <BodyCombo
                                                name = "S???N PH???M B??N CH???Y NH???T"
                                            /> :
                home30ShineShop==='newProduct' ? <BodyCombo
                                                name = "S???N PH???M M???I"
                                            /> :
                home30ShineShop==='introduce' ? <Introduce/> :
            ''}
            
            <Footer/>
        </div>
    )
}

export default HairStore