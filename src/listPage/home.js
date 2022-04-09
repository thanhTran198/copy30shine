import { useEffect, useRef, useState } from 'react';
import { FaAngleRight, FaAngleLeft, FaArrowRight } from 'react-icons/fa'
import Footer from './footer'

import shop from './shop.module.css';
import home from './home.module.css';
import sliderImg1 from '../asset/imgs/home/sliderImg1.jpg'
import sliderImg2 from '../asset/imgs/home/sliderImg2.jpg'
import sliderImg3 from '../asset/imgs/home/sliderImg3.jpg'
import sliderImg4 from '../asset/imgs/home/sliderImg4.jpg'
import sliderImg5 from '../asset/imgs/home/sliderImg5.jpg'
import imgCombo1 from '../asset/imgs/home/combo-1.jpg'
import imgSub1Combo1 from '../asset/imgs/home/sub1.jpg'
import imgSub2Combo1 from '../asset/imgs/home/sub2.jpg'
import imgSub3Combo1 from '../asset/imgs/home/sub3.jpg'
import imgSub4Combo1 from '../asset/imgs/home/sub4.jpg'
import imgCombo2 from '../asset/imgs/home/combo-2.jpg'
import imgSub1Combo2 from '../asset/imgs/home/sub-combo-2.jpg'
import imgSub2Combo2 from '../asset/imgs/home/sub-combo-2-2.jpg'
import imgSub3Combo2 from '../asset/imgs/home/sub-combo-2-3.jpg'
import imgSub4Combo2 from '../asset/imgs/home/sub-combo-2-4.jpg'
import imgListenAttentively1 from '../asset/imgs/home/lang-nghe-tan-tam-1.jpg'
import imgListenAttentively2 from '../asset/imgs/home/lang-nghe-tan-tam-2.jpg'
import imgListenAttentively3 from '../asset/imgs/home/lang-nghe-tan-tam-3.jpg'
import imgShiningJourney1 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh1.jpg'
import imgShiningJourney2 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh2.jpg'
import imgShiningJourney3 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh3.jpg'
import imgShiningJourney4 from '../asset/imgs/home/30shine-thay-doi-ngoai-hinh4.jpg'
import imgAngelsTuAnh from '../asset/imgs/home/Anegls/TuAnh.jpg'
import imgAngelsTraMy from '../asset/imgs/home/Anegls/TraMy.jpg'
import imgAngelsThanhHong from '../asset/imgs/home/Anegls/ThanhHong.jpg'
import imgAngelsKhanhHang from '../asset/imgs/home/Anegls/KhanhHang.jpg'
import imgAngelsAiHien from '../asset/imgs/home/Anegls/AiHien.jpg'
import imgAngelsThuTrang from '../asset/imgs/home/Anegls/ThuTrang.jpg'
import imgAngelsDiemTuyen from '../asset/imgs/home/Anegls/DiemTuyen.jpg'
import imgAngelsMyDuyen from '../asset/imgs/home/Anegls/MyDuyen.jpg'
import imgAngelsNhuY from '../asset/imgs/home/Anegls/NhuY.jpg'
import imgAngelsNgocLien from '../asset/imgs/home/Anegls/NgocLien.jpg'
import imgAngelsTuyetTrinh from '../asset/imgs/home/Anegls/TuyetTrinh.jpg'
import imgStoreShop from '../asset/imgs/home/store/shop.jpg'
import imgSub1StoreShop from '../asset/imgs/home/store/subShop1.jpg'
import imgSub2StoreShop from '../asset/imgs/home/store/subShop2.jpg'
import imgSub3StoreShop from '../asset/imgs/home/store/subShop3.jpg'
import imgSub4StoreShop from '../asset/imgs/home/store/subShop4.jpg'
import imgArtistLeBaoBinh from '../asset/imgs/home/artist/30shine-ca-si-le-bao-binh.jpg'
import imgArtistLK from '../asset/imgs/home/artist/30shine-ca-si-lk.jpg'
import imgArtistThanhSon from '../asset/imgs/home/artist/30shine-dien-vien-thanh-son.jpg'
import imgArtistHoanDung from '../asset/imgs/home/artist/30shine-ca-si-hoang-dung.jpg'
import imgNewHairstyleBanner from '../asset/imgs/home/NewHairstyle/30shine-banner-kham-pha-kieu-to.jpg'
import imgNewHairstyleStyle from '../asset/imgs/home/NewHairstyle/30shine-kham-pha-kieu-toc-style-mater.png'
import imgNewHairstyleNew from '../asset/imgs/home/NewHairstyle/30shine-kham-pha-kieu-toc.png'
import imgAssurance1 from '../asset/imgs/home/anTam-tinTuong/1.jpg'
import imgAssurance2 from '../asset/imgs/home/anTam-tinTuong/2.jpg'
import imgAssurance3 from '../asset/imgs/home/anTam-tinTuong/3.jpg'
import imgEndow1 from '../asset/imgs/home/endow/1.jpg'
import imgEndow2 from '../asset/imgs/home/endow/2.jpg'
import imgEndow3 from '../asset/imgs/home/endow/3.jpg'
import imgEndow4 from '../asset/imgs/home/endow/4.jpg'
import imgEndow5 from '../asset/imgs/home/endow/5.jpg'
import imgEndow6 from '../asset/imgs/home/endow/6.jpg'
import img30shineShop from '../asset/imgs/home/Shop30shine/banner-shop.jpg'
import imgProduct1 from '../asset/imgs/home/Shop30shine/product1.jpg'
import imgProduct2 from '../asset/imgs/home/Shop30shine/product2.jpg'
import imgProduct3 from '../asset/imgs/home/Shop30shine/product3.jpg'
import imgProduct4 from '../asset/imgs/home/Shop30shine/product4.jpg'
import imgProduct5 from '../asset/imgs/home/Shop30shine/product5.jpg'
import imgProduct6 from '../asset/imgs/home/Shop30shine/product6.jpg'
import imgProduct7 from '../asset/imgs/home/Shop30shine/product7.jpg'
import imgProduct8 from '../asset/imgs/home/Shop30shine/product8.jpg'
import imgProduct9 from '../asset/imgs/home/Shop30shine/product9.jpg'
import imgProduct10 from '../asset/imgs/home/Shop30shine/product10.jpg'
import imgProduct11 from '../asset/imgs/home/Shop30shine/product11.jpg'
import imgProduct12 from '../asset/imgs/home/Shop30shine/product12.jpg'
import imgMemberShine from '../asset/imgs/home/member-Shine/20220103-ShineMember2022-v2.jpg'
import imgShinrMoment1 from '../asset/imgs/home/shineMoment/A1.jpg'
import imgShinrMoment2 from '../asset/imgs/home/shineMoment/A2.jpg'
import imgShinrMoment3 from '../asset/imgs/home/shineMoment/A3.jpg'
import imgShinrMoment4 from '../asset/imgs/home/shineMoment/A4.jpg'
import imgShinrMoment5 from '../asset/imgs/home/shineMoment/A5.jpg'
import imgShinrMoment6 from '../asset/imgs/home/shineMoment/A6.jpg'
import imgShinrMoment7 from '../asset/imgs/home/shineMoment/A7.jpg'
import imgShinrMoment8 from '../asset/imgs/home/shineMoment/A8.jpg'
import imgShinrMoment9 from '../asset/imgs/home/shineMoment/A9.jpg'
import imgShinrMoment10 from '../asset/imgs/home/shineMoment/A10.jpg'
import imgCareBanner from '../asset/imgs/home/30shineCare/banner-30shine-care-5.jpg'
import imgCare7Day from '../asset/imgs/home/30shineCare/7days.png'
import imgCare15Day from '../asset/imgs/home/30shineCare/15days.png'
import imgCare30Day from '../asset/imgs/home/30shineCare/30days-care.jpg'
import imgCareSale20 from '../asset/imgs/home/30shineCare/20%.png'
import imgNearestHCM from '../asset/imgs/home/nearest/salon-hcm.png'
import imgNearestDN from '../asset/imgs/home/nearest/salon-danang.png'
import imgNearestHN from '../asset/imgs/home/nearest/salon-hanoi.png'
import imgNearestOther from '../asset/imgs/home/nearest/salon-other.png'
import imgMessage from '../asset/imgs/home/contact/messenger.png'
import imgPhone from '../asset/imgs/home/contact/phoneNew.png'


function Home() {


    const Slider = ()=> {
        // lấy ra các element img
        const sliderItem1 = useRef()
        const sliderItem2 = useRef()
        const sliderItem3 = useRef()
        const sliderItem4 = useRef()
        const sliderItem5 = useRef()

        const [srcSlider, setSrcSlider] = useState(1)
                
        if(srcSlider >= 6) {
            setSrcSlider(1)
        }

        function handleSlider() {
            if(srcSlider === 1) {
                // console.log('số 1')
                sliderItem1.current.classList.remove(`${home.img0}`)
                sliderItem2.current.classList.remove(`${home.img0}`)
                sliderItem3.current.classList.remove(`${home.img0}`)
                sliderItem4.current.classList.remove(`${home.img0}`)
                sliderItem5.current.classList.remove(`${home.img0}`)

                sliderItem1.current.classList.add(`${home.img400}`)
                sliderItem2.current.classList.add(`${home.imgMinus100}`)
                sliderItem3.current.classList.add(`${home.imgMinus100}`)
                sliderItem4.current.classList.add(`${home.imgMinus100}`)
                sliderItem5.current.classList.add(`${home.imgMinus100}`)
                setSrcSlider(srcSlider + 1)
            }else if(srcSlider === 2) {
                // console.log('số 2')
                sliderItem1.current.classList.remove(`${home.img400}`)
                sliderItem2.current.classList.remove(`${home.imgMinus100}`)
                sliderItem3.current.classList.remove(`${home.imgMinus100}`)
                sliderItem4.current.classList.remove(`${home.imgMinus100}`)
                sliderItem5.current.classList.remove(`${home.imgMinus100}`)

                sliderItem1.current.classList.add(`${home.img300}`)
                sliderItem2.current.classList.add(`${home.img300}`)
                sliderItem3.current.classList.add(`${home.imgMinus200}`)
                sliderItem4.current.classList.add(`${home.imgMinus200}`)
                sliderItem5.current.classList.add(`${home.imgMinus200}`)
                setSrcSlider(srcSlider + 1)
            }
            else if(srcSlider === 3) {
                // console.log('số 3')
                sliderItem1.current.classList.remove(`${home.img300}`)
                sliderItem2.current.classList.remove(`${home.img300}`)
                sliderItem3.current.classList.remove(`${home.imgMinus200}`)
                sliderItem4.current.classList.remove(`${home.imgMinus200}`)
                sliderItem5.current.classList.remove(`${home.imgMinus200}`)

                sliderItem1.current.classList.add(`${home.img200}`)
                sliderItem2.current.classList.add(`${home.img200}`)
                sliderItem3.current.classList.add(`${home.img200}`)
                sliderItem4.current.classList.add(`${home.imgMinus300}`)
                sliderItem5.current.classList.add(`${home.imgMinus300}`)
                setSrcSlider(srcSlider + 1)
            }
            else if(srcSlider === 4) {
                // console.log('số 4')
                sliderItem1.current.classList.remove(`${home.img200}`)
                sliderItem2.current.classList.remove(`${home.img200}`)
                sliderItem3.current.classList.remove(`${home.img200}`)
                sliderItem4.current.classList.remove(`${home.imgMinus300}`)
                sliderItem5.current.classList.remove(`${home.imgMinus300}`)

                sliderItem1.current.classList.add(`${home.img100}`)
                sliderItem2.current.classList.add(`${home.img100}`)
                sliderItem3.current.classList.add(`${home.img100}`)
                sliderItem4.current.classList.add(`${home.img100}`)
                sliderItem5.current.classList.add(`${home.imgMinus400}`)
                setSrcSlider(srcSlider + 1)
            }
            else if(srcSlider === 5) {
                // console.log('số 5')
                sliderItem1.current.classList.remove(`${home.img100}`)
                sliderItem2.current.classList.remove(`${home.img100}`)
                sliderItem3.current.classList.remove(`${home.img100}`)
                sliderItem4.current.classList.remove(`${home.img100}`)
                sliderItem5.current.classList.remove(`${home.imgMinus400}`)

                sliderItem1.current.classList.add(`${home.img0}`)
                sliderItem2.current.classList.add(`${home.img0}`)
                sliderItem3.current.classList.add(`${home.img0}`)
                sliderItem4.current.classList.add(`${home.img0}`)
                sliderItem5.current.classList.add(`${home.img0}`)
                setSrcSlider(srcSlider + 1)
            }
        }
        
        let setTimeSlider = useRef()


        // sét translateX cho img
       useEffect(()=>{
           setTimeSlider = setTimeout(()=>{
                handleSlider()
           },5000)
       },[srcSlider])
        
       const handleTransferPhotos = (command) => {
            if(command == 'right') {
                clearTimeout(setTimeSlider)
                setSrcSlider(srcSlider + 1)
                handleSlider()
            }else if(command == 'left') {
                clearTimeout(setTimeSlider)
                setSrcSlider(srcSlider - 1)
                handleSlider()
            }
       }
    
        
        return (
            <div className={home.containerSlider}>
                <div className={home.slider}>
                    <div ref={sliderItem1} className={`${home.sliderItem1}`}>
                        <img className={`${home.sliderItemImg}`} src={`${sliderImg1}`}/>
                    </div>
                    <div ref={sliderItem2} className={home.sliderItem2}>
                        <img className={home.sliderItemImg} src={`${sliderImg2}`}/>
                    </div>
                    <div ref={sliderItem3} className={home.sliderItem3}>
                        <img className={home.sliderItemImg} src={`${sliderImg3}`}/>
                    </div>
                    <div ref={sliderItem4} className={home.sliderItem4}>
                        <img className={home.sliderItemImg} src={`${sliderImg4}`}/>
                    </div>
                    <div ref={sliderItem5} className={home.sliderItem5}>
                        <img className={home.sliderItemImg} src={`${sliderImg5}`}/>
                    </div>
                </div>
                <i onClick={()=>{handleTransferPhotos('right')}} className={`${home.listStoryIconLeft} ${home.sliderIconLeft}`}><FaAngleLeft/></i>
                <i onClick={()=>{handleTransferPhotos('left')}} className={`${home.listStoryIconRight} ${home.sliderIconRight}`}><FaAngleRight/></i>
            </div>
        )
    }

    // nút liên hệ bên góc phải dưới
    const Contact = ()=> {
        return(
            <div className={home.contact}>
                <div className={home.contactContainerPhone}>
                    <img className={home.contactImgPhone} src={imgPhone}/>
                </div>
                <div className={home.contactContainerMessage}>
                    <img className={home.contactImgMessage} src={imgMessage}/>
                </div>
            </div>
        )
    }

    // tạo ta tiêu đề của từng dòng lớn
    const IntroTitle = (introTitle)=> {
        return (
            <div className={introTitle.noneMTop ? home.bodyTitleNoneMtop : home.bodyTitle }>
                <div className={home.bodyTitleFirst}>
                    <h3 className={home.bodyTitleFirstTitle}>{introTitle.textTitle}</h3>
                    <p className={home.bodyTitleFirstSubtitle}>{introTitle.subTextTitle}</p>
                </div>
                <a href="#" className={introTitle.textAll ? home.bodyTitleAll : home.homeNone}>
                    <p className={home.bodyTitleAllText}>{introTitle.textAll}</p>
                    <i className={home.bodyTitleAllIcon}><FaAngleRight/></i>
                </a>
            </div>
        )
    }

    // tạo ra ảnh có hover zom
    const BackGroundImg = (value)=> {
        return(
            <div className={`${home.containerHoverZom} ${value.classContainerImg}`}>
                <img className={`${home.hoverZom} ${value.classImg}`} src={value.img}/>
            </div>
        )
    }

    // tạo ra 4 item nằm ngang
    const FourItem = (experiences)=> {
        return(
            <ul className={experiences.mgBt50 ? `${home.bodyList} ${home.mgBt50}`: `${home.bodyList}`}>
                    <li className={`${home.bodyItem}`}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg1}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService1}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList1}</p>
                        </div>
                    </li>
                    <li className={home.bodyItem}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg2}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService2}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList2}</p>
                        </div>
                    </li>
                    <li className={home.bodyItem}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg3}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService3}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList3}</p>
                        </div>
                    </li>
                    <li className={home.bodyItem}>
                        <div className={`${home.containerHoverZom} ${home.bodyItemContainerImg}`}>
                            <img className={`${home.hoverZom} ${home.bodyItemImg}`} src={experiences.itemImg4}/>
                        </div>
                        <div className={home.bodyItemTitle}>
                            <h3 className={home.bodyItemService}>{experiences.itemService4}</h3>
                            <p className={home.bodyItemServiceSub}>{experiences.priceList4}</p>
                        </div>
                    </li>
                </ul>
        )
    }

    // hàng lớn
    const ExperienceAndTop1Service = (experiences)=> {
        return(
            <div className={home.bodyService}>
                <IntroTitle
                    textTitle = {experiences.textTitle}
                    subTextTitle = {experiences.subTextTitle}
                    noneMTop = {experiences.noneMTop ? true : false}
                />
                <div className={experiences.noZom ? `${home.bodyServiceContainerImg}` :`${home.bodyServiceContainerImg} ${home.containerHoverZom}`}>
                    <img className={experiences.noZom ? `${home.bodyServiceImg}` :`${home.bodyServiceImg} ${home.hoverZom}`} src={experiences.imgMain}/>
                    <div className={experiences.storeIntroduction ? home.storeIntroduction : home.homeNone}>{experiences.storeIntroduction}</div>
                    <div className={experiences.twoLineImageTitle ? home.twoLineImageTitle : home.homeNone}>
                        <h2 className={home.twoLineImageTitleTagH2}>{experiences.twoLineImageTitleTagH2}</h2>
                        <p className={home.twoLineImageTitleTagP}>{experiences.twoLineImageTitleTagP}</p>
                    </div>
                </div>
                <FourItem 
                    itemImg1 = {experiences.itemImg1}
                    itemService1 = {experiences.itemService1}
                    priceList1 = {experiences.priceList1}
                    itemImg2 = {experiences.itemImg2}
                    itemService2 = {experiences.itemService2}
                    priceList2 = {experiences.priceList2}
                    itemImg3 = {experiences.itemImg3}
                    itemService3 = {experiences.itemService3}
                    priceList3 = {experiences.priceList3}
                    itemImg4 = {experiences.itemImg4}
                    itemService4 = {experiences.itemService4}
                    priceList4 = {experiences.priceList4}
                />
            </div>
        )
    }

    const Part3Item = (value)=> {
        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = {value.textTitle}
                    subTextTitle = {value.subTextTitle}
                />
                <ul className={home.listenList}>
                    <li className={home.listenItem}>
                        <div className={`${home.listenItemContainerImg} ${home.containerHoverZom}`}>
                            <img className={`${home.listenItemImg} ${home.hoverZom}`} src={value.img1} />
                        </div>
                        <p className={home.listenItemText}>{value.listenItemText1}</p>
                    </li>
                    <li className={home.listenItem}>
                        <div className={`${home.listenItemContainerImg} ${home.containerHoverZom}`}>
                            <img className={`${home.listenItemImg} ${home.hoverZom}`} src={value.img2} />
                        </div>
                        <p className={home.listenItemText}>{value.listenItemText2}</p>
                    </li>
                    <li className={home.listenItem}>
                        <div className={`${home.listenItemContainerImg} ${home.containerHoverZom}`}>
                            <img className={`${home.listenItemImg} ${home.hoverZom}`} src={value.img3} />
                        </div>
                        <p className={home.listenItemText}>{value.listenItemText3}</p>
                    </li>
                </ul>
            </div>
        )

    }

    const ShiningJourney = ()=> {
        const [valuetransform, setValuetransform] = useState(0)
        const iconJourneyShineLeft = useRef()
        const iconJourneyShineRight = useRef()
        const JourneyShineList = useRef()

        function handaleClickShiningJourney(value) {
            if(value == "left") {
                if(valuetransform <= 0) {
                    iconJourneyShineLeft.current.style.cursor = 'no-drop'
                }else{
                    setValuetransform(valuetransform - 51)
                    iconJourneyShineRight.current.style.cursor = 'pointer'
                    console.log('left')
                }
            }else {
                if(valuetransform >= 102) {
                    iconJourneyShineRight.current.style.cursor = 'no-drop'
                }else {
                    setValuetransform(valuetransform + 51)
                    console.log('right')
                }
            }
        }

        useEffect(()=>{
            if(valuetransform == 0) {
                iconJourneyShineLeft.current.style.cursor = 'no-drop'
            }else{
                iconJourneyShineLeft.current.style.cursor = 'pointer'
            }
            JourneyShineList.current.style = `transform: translateX(-${valuetransform}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Hành trình tỏa sáng"
                    subTextTitle = "Câu chuyện chân thực từ hàng chục khách hàng"
                    textAll = "Xem tất cả"
                />
                <div className={home.containerListStory}>
                    <ul ref={JourneyShineList} className={home.listStory}>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney1}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói khiến cô hoa khôi rung động</p>
                        </li>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney2}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác kiểu tóc mới cực đẹp</p>
                        </li>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney3}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Bạn sinh viên IT lột xác thành hot boy vạn người mê</p>
                        </li>
                        <li className={home.listStoryItem}>
                            <div className={`${home.containerHoverZom} ${home.listStoryItemContainerImg}`}>
                                <img className={`${home.hoverZom} ${home.listStoryItemImg}`} src={imgShiningJourney4}/>
                            </div>
                            <p className={`${home.listenItemText} ${home.listStoryText}`}>Phúc lột xác mái tóc để suốt bao năm giúp ngoại hình mới cực cuốn hút</p>
                        </li>
                    </ul>
                    <i ref={iconJourneyShineLeft} onClick={()=>{handaleClickShiningJourney('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={iconJourneyShineRight} onClick={()=>{handaleClickShiningJourney('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Angels = ()=> {
        const [transform, setTransfrom] = useState(0)
        const listAngels = useRef()
        const iconAngelsLeft = useRef()
        const iconAngelsRight = useRef()
        

        function handleTransferPhotosAngels(button) {
            if(button == 'up') {
                if(transform < 0) {
                }else {
                    setTransfrom(transform + 30)
                    iconAngelsLeft.current.style.cursor = 'pointer'
                }
            }else {
                if(transform <= 0) {
                    iconAngelsLeft.current.style.cursor = 'no-drop'
                }else {
                    setTransfrom(transform - 30)
                    console.log('lùi')
                }
            }
        }
        // không cho người dùng ấn vào khi đến ảnh đầu tiên
        useEffect(()=>{
            if(transform <= 0) {
                iconAngelsLeft.current.style.cursor = 'no-drop'
            }
            // check xem khi ấn đến cuối ảnh sẽ không cho bấm nữa
            if(transform >= 270) {
                iconAngelsRight.current.style.cursor = 'no-drop'
                iconAngelsRight.current.removeEventListener("onClick", handleTransferPhotosAngels())
            }else {
                iconAngelsRight.current.style.cursor = 'pointer'
            }
            listAngels.current.style = `transform: translateX(-${transform}%)`
        })


        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "30Shine’s Angels"
                    subTextTitle = "Những thiên thần xinh đẹp hết lòng vì khách hàng"
                />
                <div className={home.containerAngels}>
                    <ul ref={listAngels} className={home.angelsList}>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsTuAnh} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Tú Anh - 255 Nguyễn An Ninh, Bình Dương</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, thân thiện, sẵng sàng</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsTraMy} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Trà My (Mina) - 152 Thống Nhất, Nha Trang</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, nhiệt tình, cẩn thận</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsThanhHong} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Thanh Hồng - 12 Lạc Trung, Hà Nội</p>
                                <p className={home.angelsDescriptionDetailed }>Xinh xắn, tư vấn khéo, tận tâm</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsKhanhHang} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Khánh Hằng - 152 Thống Nhất, Nha Trang</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsAiHien} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Ái Hiền - 113 Trần Hưng Đạo, An Giang</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, hòa nhã, tư vấn khéo</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsThuTrang} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Thu Trang - 36 Phan Huy Ích, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Hoà đồng, dể thương, vui vẻ</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsDiemTuyen} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Diểm Tuyền - 36 Phan Huy Ích, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Cao, đẹp, hiền</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsMyDuyen} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Mỹ Duyên - 168 Đặng Văn Bi, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, nhiệt tình, dễ gần</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsNhuY} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Như Ý - 168 Đặng Văn Bi, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, hoà đồng, hoạt bát</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsNgocLien} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Ngọc Liên - 1361 Phạm Văn Thuận, Biên Hòa</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, khéo léo, tự tin</p>
                            </div>
                        </li>
                        <li className={home.angelsItem}>
                            <div className={home.angelsItemImgContainer}>
                                <img className={home.angelsItemImg} src={imgAngelsTuyetTrinh} />
                            </div>
                            <div className={home.angelsDescription}>
                                <p className={`${home.angelsDescriptionName} ${home.listenItemText}`}>Tuyết Trinh - 356 Đỗ Xuân Hợp, TP.HCM</p>
                                <p className={home.angelsDescriptionDetailed }>Vui vẻ, hoà đồng, nói chuyện vui</p>
                            </div>
                        </li>
                    </ul>
                        <i ref={iconAngelsLeft} onClick={()=>{handleTransferPhotosAngels('back')}} className={home.angelsIconLeft}><FaAngleLeft/></i>
                        <i ref={iconAngelsRight} onClick={()=>{handleTransferPhotosAngels('up')}} className={home.angelsIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const InspirationalAnd30shine = ()=> {
        const [valueTransformArtist, setValueTransformArtist] = useState(0)
        const ulArtistList = useRef()
        const iconOfArtistListLeft = useRef()
        const iconOfArtistListRight = useRef()

        function handaleClickArtist(value) {
            if(value == 'left'){
                if(valueTransformArtist == 0) {
                    iconOfArtistListLeft.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformArtist(valueTransformArtist - 51)
                    iconOfArtistListRight.current.style.cursor = 'pointer'
                }
            }else {
                if(valueTransformArtist >= 102) {
                    iconOfArtistListRight.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformArtist(valueTransformArtist + 51)
                    iconOfArtistListLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            ulArtistList.current.style = `transform: translateX(-${valueTransformArtist}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Người truyền cảm hứng và 30Shine"
                    subTextTitle = "Cùng lan tỏa thông điệp thay đổi để tỏa sáng"
                />
                <div className={home.containerArtistList}>
                    <ul ref={ulArtistList} className={home.artistList}>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistLeBaoBinh}/>
                            </div>
                            <p className={home.listenItemText}>Ca sĩ Lê Bảo Bình: Thay đổi để không phải “Bỏ lỡ một người”</p>
                        </li>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistLK}/>
                            </div>
                            <p className={home.listenItemText}>Kiểu tóc khiến LK Thoát ly chiếc mũ huyền thoại</p>
                        </li>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistHoanDung}/>
                            </div>
                            <p className={home.listenItemText}>Hoàng Dũng: “Ngoại hình hết sức quan trọng, chỉ sau tài năng”</p>
                        </li>
                        <li className={home.artistListItem}>
                            <div className={home.artistListContainerImg}>
                                <img className={home.artistListImg} src={imgArtistThanhSon}/>
                            </div>
                            <p className={home.listenItemText}>Diễn viên Thanh Sơn “Cả Một Đời Ân Oán” tìm lại phong cách trẻ trung đúng tuổi thật</p>
                        </li>
                    </ul>
                    <i ref={iconOfArtistListLeft} onClick={()=>{handaleClickArtist('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={iconOfArtistListRight} onClick={()=>{handaleClickArtist('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const NewHairstyle = ()=> {
        return(
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Khám phá kiểu tóc"
                    subTextTitle = "Nguồn cảm hứng cho kiểu tóc mới của bạn"
                    textAll = 'Xem tất cả'
                />
                <div className={home.newHairstyle}>
                    <BackGroundImg 
                        classContainerImg = {home.newHairstyleContainerImg}
                        classImg = {home.newHairstyleImg}
                        img = {imgNewHairstyleBanner}
                    />
                    <div className={home.newHairstyleList}>
                        <div className={home.newHairstyleItem}>
                            <div className={`${home.containerHoverZom} ${home.newHairstyleItemContainerImg}`}>
                                <img className={`${home.newHairstyleItemImg} ${home.hoverZom}`} src={imgNewHairstyleStyle}/>
                            </div>
                            <div className={home.newHairstyleItemSub}>
                                <p className={home.newHairstyleItemIitle}>Khám phá kiể tóc</p>
                                <p className={home.newHairstyleItemSunTitle}>Tìm cảm hứng đổi mới cho mái tóc</p>
                            </div>
                        </div>
                        <div className={home.newHairstyleItem}>
                            <div className={`${home.containerHoverZom} ${home.newHairstyleItemContainerImg}`}>
                                <img className={`${home.newHairstyleItemImg} ${home.hoverZom}`} src={imgNewHairstyleNew}/>
                            </div>
                            <div className={home.newHairstyleItemSub}>
                                <p className={home.newHairstyleItemIitle}>Style Master</p>
                                <p className={home.newHairstyleItemSunTitle}>BXH các kiểu tóc hot trong tháng</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const Endow = () => {
        const [valueTransformEndow, setvalueTransformEndow] = useState(0)
        const endowList = useRef()
        const iconEndowLeft = useRef()
        const iconEndowRight = useRef()

        // 29%
        function handleClickEndow(value) {
            if(value == 'left') {
                if(valueTransformEndow <=0) {
                }else{
                    setvalueTransformEndow(valueTransformEndow - 29)
                }
            }else if(value == 'right'){
                console.log(valueTransformEndow)
                if(valueTransformEndow >= 87) {
                    iconEndowRight.current.style.cursor = 'no-drop'
                }else{
                    setvalueTransformEndow(valueTransformEndow + 29)
                }
            }
        }

        useEffect(()=>{
            if(valueTransformEndow <=0) {
                iconEndowLeft.current.style.cursor = 'no-drop'
                iconEndowRight.current.style.cursor = 'pointer'
            }else{
                iconEndowLeft.current.style.cursor = 'pointer'
            }
            endowList.current.style = `transform: translateX(-${valueTransformEndow}%)`
        })
        return(
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Ưu đãi"
                    subTextTitle = "Quà tặng, chiết khấu đặc biệt cập nhật liên tục"
                    textAll = 'Xem tất cả'
                />
                <div className={home.containerEndow}>
                    <ul ref={endowList} className={home.endow}>
                        <li className={`${home.endowItem}`}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow1} />
                            </div>
                            <p className={home.endowText}>Renewal Shine Box</p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow2} />
                            </div>
                            <p className={home.endowText}>Balance Skin Shine Box</p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow3} />
                            </div>
                            <p className={home.endowText}>Firming Shine Box </p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow4} />
                            </div>
                            <p className={home.endowText}>Brightening Shine Box</p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow5} />
                            </div>
                            <p className={home.endowText}>Smoothing Shine Box </p>
                        </li>
                        <li className={home.endowItem}>
                            <div className={home.endowContainerImg}>
                                <img className={home.endowImg} src={imgEndow6} />
                            </div>
                            <p className={home.endowText}>Shimmering Shine Box </p>
                        </li>
                    </ul>
                    <i ref={iconEndowLeft} onClick={()=>{handleClickEndow('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={iconEndowRight} onClick={()=>{handleClickEndow('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Shop30shine = ()=> {
        const [valueTransformShop, setValueTransformShop] = useState(0)
        const productListList = useRef()
        const productListIconLeft = useRef()
        const productListIconRight = useRef()
        // 23%
        function handaleClickShop(value){
            if(value == 'left'){
                if(valueTransformShop <= 0){

                }else{
                    setValueTransformShop(valueTransformShop - 22.4)
                    productListIconLeft.current.style.cursor = 'pointer'
                    productListIconRight.current.style.cursor = 'pointer'
                }
            }else{
                if(valueTransformShop >= 176){
                    productListIconRight.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformShop(valueTransformShop + 22.4)
                    productListIconLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            if(valueTransformShop <= 0){
                productListIconLeft.current.style.cursor = 'no-drop'
                productListIconRight.current.style.cursor = 'pointer'
            }
            productListList.current.style = `transform: translateX(-${valueTransformShop}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "30Shine Shop"
                    subTextTitle = "Mỹ phẩm nam cao cấp chính hãng"
                    textAll = 'Xem tất cả'
                />
                <BackGroundImg 
                    classContainerImg = {home.newHairstyleContainerImg}
                    classImg = {home.newHairstyleImg}
                    img = {img30shineShop}
                />
                <div className={home.containerProductList}>
                    <ul ref={productListList} className={home.productList}>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct1}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sáp vuốt tóc Glanzen Fox</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>229.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct2}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Gôm Xịt Tóc Lady Killer - Thách thức nón bảo hiểm</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>150.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct3}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Máy sấy tóc Furin - Mạnh gấp 10 máy sấy bạn có</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>389.000₫</p>
                                <p className={home.productItemPriceSub}>399.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct4}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Máy sấy tóc tạo kiểu chuyên nghiệp Sharkway Limited 1600W</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>299.000₫</p>
                                <p className={home.productItemPriceSub}>350.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct5}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sữa Rửa Mặt Tràm Trà Skin&Dr Tea tree - Khắc Tinh Của Mụn - Trị Mụn</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>219.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct6}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sáp Khử Mùi Old Spice</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>130.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct7}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Mặt Nạ Thải Độc Carbon Dash Bubble</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>279.000₫</p>
                                <p className={home.productItemPriceSub}>399.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct8}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sữa Rửa Mặt Thải Độc Dabo Hydration for men </p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>98.000₫</p>
                                <p className={home.productItemPriceSub}>115.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct9}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Serum Dưỡng Da Dabo 7in1 Black Force - Làm đẹp dễ dàng với 7 bước dưỡng da trong 1 sản phẩm</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>345.000₫</p>
                                <p className={home.productItemPriceSub}>955.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct10}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sữa Rửa Mặt ACSYS Trị Mụn - Phiên Bản Đặc Biệt</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>289.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct11}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sữa Rửa Mặt Skin&Dr Active Charcoal - Than Hoạt Tính 100g</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>179.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                        <li className={home.productItem}>
                            <img className={home.productItemImg} src={imgProduct12}/>
                            <p className={`${home.productItemName} ${home.endowText}`}>Sáp vuốt tóc Glanzen Original Clay - Vô địch giữ nếp tới 12 giờ</p>
                            <div className={home.productItemPriceContainer}>
                                <p className={home.productItemPrice}>229.000₫</p>
                            </div>
                            <div className={home.productItemButton}>
                                <p>MUA NGAY</p>
                                <FaArrowRight/>
                            </div>
                        </li>
                    </ul>
                    <i ref={productListIconLeft} onClick={()=>{handaleClickShop('left')}} className={home.listStoryIconLeft}><FaAngleLeft/></i>
                    <i ref={productListIconRight} onClick={()=>{handaleClickShop('right')}} className={home.listStoryIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const ShineMoment = ()=> {
        const [valueTransformMoment, setValueTransformMoment] = useState(0)
        const allMomentList = useRef()
        const iconMomentListLeft = useRef()
        const iconMomentListRight = useRef()

        function handaleMomentClick(value) {
            if(value == 'left'){
                if(valueTransformMoment <= 0){

                }else{
                    setValueTransformMoment(valueTransformMoment - 30)
                    iconMomentListLeft.current.style.cursor = 'pointer'
                    iconMomentListRight.current.style.cursor = 'pointer'
                }
            }else{
                if(valueTransformMoment >= 200){
                    iconMomentListRight.current.style.cursor = 'no-drop'
                }else{
                    setValueTransformMoment(valueTransformMoment + 30)
                    iconMomentListLeft.current.style.cursor = 'pointer'
                }
            }
        }

        useEffect(()=>{
            if(valueTransformMoment <= 0){
                iconMomentListLeft.current.style.cursor = 'no-drop'
                iconMomentListRight.current.style.cursor = 'pointer'
            }
            allMomentList.current.style = `transform: translateX(-${valueTransformMoment}%)`
        })

        return (
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Shine Moment"
                    subTextTitle = "Cùng lan tỏa những phút giây tỏa sáng tại 30Shine"
                />
                <div className={home.containerMomentList}>
                <ul ref={allMomentList} className={home.momentList}>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment1} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment2} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment3} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment4} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment5} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment6} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment7} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment8} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment9} />
                        </div>
                    </li>
                    <li className={home.momentItem}>
                        <div className={home.momentItemImgContainer}>
                            <img className={home.momentItemImg} src={imgShinrMoment10} />
                        </div>
                    </li>
                </ul>
                <i ref={iconMomentListLeft} onClick={()=>handaleMomentClick('left')} className={home.momentIconLeft}><FaAngleLeft/></i>
                <i ref={iconMomentListRight} onClick={()=>handaleMomentClick('right')} className={home.momentIconRight}><FaAngleRight/></i>
                </div>
            </div>
        )
    }

    const Nearest = ()=> {
        return(
            <div className={home.centerTheTitle}>
                <IntroTitle
                    textTitle = "Tìm 30shine gần nhất"
                    subTextTitle = "Để xe thuận tiện an toàn, bản đồ dẫn đường chi tiết (79 salon)"
                    textAll = 'Xem tất cả'
                />
                <FourItem 
                    itemImg4 = {imgNearestOther}
                    itemService4 = "Thành Phố Khác"
                    priceList4 = "20 Salon"
                    itemImg3 = {imgNearestHN}
                    itemService3 = "Đà Nẵng"
                    priceList3 = "1 Salon"
                    itemImg2 = {imgNearestDN}
                    itemService2 = "Hà Nội"
                    priceList2 = "18 Salon"
                    itemImg1 = {imgNearestHCM}
                    itemService1 = "TP.Hồ Chí Minh"
                    priceList1 = "40 Salon"
                    mgBt50
                />
            </div>
        )
    }

    return (
        <div>
            <Slider/>
            <Contact/>
            {/* <SliderTest/> */}
            <ExperienceAndTop1Service
                textTitle= 'Trải nghiệm dịch vụ'
                subTextTitle = 'Thư giãn 30 phút và bạn sẽ tỏa sáng'
                textAll = 'Xem tất cả'
                imgMain = {imgCombo1}
                itemImg1 = {imgSub1Combo1}
                itemImg2 = {imgSub2Combo1}
                itemImg3 = {imgSub3Combo1}
                itemImg4 = {imgSub4Combo1}
                itemService1 = 'Cắt gội massage'
                itemService2 = 'Uốn nhập khẩu Hàn'
                itemService3 = 'Nhộm nhập khẩu Ý'
                itemService4 = 'Dịch vụ khác'
                priceList1 = 'Bảng giá 2022 (hấp dẫn)'
                priceList2 = 'Chỉ từ 287k'
                priceList3 = 'Chỉ từ 206k'
                priceList4 = '4 dịch vụ'
                noneMTop
            />
            <ExperienceAndTop1Service
                textTitle= 'TOP 1 dịch vụ được yêu thích nhất'
                subTextTitle = '30Shine - Tự hào lan tỏa phong cách uốn tóc Hàn Quốc tới nam giới Việt'
                imgMain = {imgCombo2}
                itemImg1 = {imgSub1Combo2}
                itemImg2 = {imgSub2Combo2}
                itemImg3 = {imgSub3Combo2}
                itemImg4 = {imgSub4Combo2}
                itemService1 = 'Thuốc uốn cao cấp nhất'
                itemService2 = 'Stylist tay nghề cao'
                itemService3 = 'Đa dạng phong cách'
                itemService4 = 'Công nghệ hiện đại'
                priceList1 = 'Được sao Hàn tin dùng'
                priceList2 = '100% áp dụng công nghệ chuyển giao...'
                priceList3 = 'Bao đẹp trai với mọi khuôn mặt'
                priceList4 = 'Kết hợp nhiều thành phần dưỡng tóc'
            />
            <Part3Item
                textTitle = "Lắng nghe & tận tâm"
                subTextTitle = "Thấu hiểu nhu cầu, hỗ trợ nhiệt tình"
                listenItemText1 = "Nói gì với Stylist để anh có kiểu tóc ưng ý"
                listenItemText2 = "Supporter thân thiện - Đón tiếp, lắng nghe và hỗ trợ bạn mọi lúc"
                listenItemText3 = "Những câu hỏi thường gặp"
                img1 = {imgListenAttentively1}
                img2 = {imgListenAttentively2}
                img3 = {imgListenAttentively3}
            />
            <ShiningJourney/>
            <Angels/>
            <ExperienceAndTop1Service
                textTitle= 'Không gian & thiết bị'
                subTextTitle = 'Nạp năng lượng với trải nghiệm không gian mở'
                imgMain = {imgStoreShop}
                itemImg1 = {imgSub1StoreShop}
                itemImg2 = {imgSub2StoreShop}
                itemImg3 = {imgSub3StoreShop}
                itemImg4 = {imgSub4StoreShop}
                itemService1 = 'Salon rộng lớn dễ tìm'
                itemService2 = 'Trang thiết bị 30Shine SET™'
                itemService3 = 'Làm chủ thời gian'
                itemService4 = 'Trải nghiệm âm nhạc'
                priceList1 = 'Không gian mở & kết nối'
                priceList2 = 'Nâng cấp trải nghiệm làm đẹp'
                priceList3 = 'Đặt lịch & các tiện ích 30Shine App'
                priceList4 = 'Năng lượng & Cảm xúc'
                storeIntroduction = 'Phá vỡ giới hạn của một tiệm tóc truyền thống, 30Shine mang đến không gian trải nghiệm hoàn toàn mới với diện tích lớn trên 200m2/ 16 ghế cắt. Tất cả đều được đặt tại vị trí dễ tìm trên những con phố lớn, hòa vào cuộc sống sôi động của người đàn ông hiện đại.'
                noZom
            />
            <InspirationalAnd30shine/>
            <NewHairstyle/>
            <Part3Item
                textTitle = "An tâm & Tin tưởng"
                subTextTitle = "Cam kết phòng dịch tối đa & mỹ phẩm chính hãng"
                listenItemText1 = "Phòng chống Covid-19 - Vì sức khoẻ khách hàng, nhân viên và cộng đồng"
                listenItemText2 = "Mỹ phẩm & sản phẩm - Cam kết chất lượng - Đảm bảo xuất xứ"
                listenItemText3 = "Bảo quản xe cộ, đồ đạc"
                img1 = {imgAssurance1}
                img2 = {imgAssurance2}
                img3 = {imgAssurance3}
            />
            <Endow/>
            <Shop30shine/>
            <Part3Item
                textTitle = "Shine Member"
                subTextTitle = "Tham gia ngay cùng 700.000 hội viên với quyền lợi đặc biệt"
                listenItemText1 = "Silver/ Gold Member và hàng ngàn quyền lợi"
                img1 = {imgMemberShine}
            />
            <ShineMoment/>
            <ExperienceAndTop1Service
                textTitle= 'Cam kết 30shine Care'
                subTextTitle = 'Sự hài lòng của anh là ưu tiên hàng đầu của 30Shine'
                imgMain = {imgCareBanner}
                itemImg1 = {imgCare7Day}
                itemImg2 = {imgCare15Day}
                itemImg3 = {imgCare30Day}
                itemImg4 = {imgCareSale20}
                itemService1 = '7 ngày'
                itemService2 = '30 ngày'
                itemService3 = '15 ngày'
                itemService4 = 'Giảm 20%'
                priceList1 = 'Chỉnh sửa tóc miễn phí'
                priceList2 = 'Đổi/trả hàng miễn phí'
                priceList3 = 'Bảo hành uốn nhộm'
                priceList4 = 'Nếu chờ đợi quá lâu'
                twoLineImageTitle
                twoLineImageTitleTagH2 ='VÌ CHẤT LƯỢNG PHỤC VỤ LÀ HÀNG ĐẦU'
                twoLineImageTitleTagP = 'Áp dụng tại salon bất kỳ toàn hệ thống 30Shine'
            />
            <Nearest/>
            <Footer/>
        </div>
    )
} 
export default Home