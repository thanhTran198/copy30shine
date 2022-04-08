import css from './experience.module.css';
import Footer from './footer'
import Contact from './home'

import imgbannerCombo10 from '../asset/imgs/experience/20220104-30shine-banner-shine-combo.jpg'
import imgCombo10Item1 from '../asset/imgs/experience/mat-na-sui-bot-tay-da-chet-3.jpg'
import imgCombo10Item2 from '../asset/imgs/experience/20220105-massage-co-vai-gay.jpg'
import imgCombo10Item3 from '../asset/imgs/experience/30shine-lot-mun-cam-3.jpg'
import imgCombo10Item4 from '../asset/imgs/experience/30shine-detox-3.jpg'
import imgComboVip from '../asset/imgs/experience/service/combo-cat-goi-s-vip-5.jpg'
import imgCurling from '../asset/imgs/experience/service/20220104-banner-uon-1.jpg'
import imgDye1 from '../asset/imgs/experience/service/dye/20211217-nhuom-den-phu-bac-pc-2.jpg'
import imgDye2 from '../asset/imgs/experience/service/dye/20211217-nhuom-tay-toc-pc-2.jpg'
import imgDye3 from '../asset/imgs/experience/service/dye/20211217-nhuom-thoi-trang-milano-pc-2.jpg'
import imgHairCare1 from '../asset/imgs/experience/service/rehibilitate/20211217-phuc-hoi.jpg'
import imgHairCare2 from '../asset/imgs/experience/service/rehibilitate/20211217-hap-duong-oliu-2.jpg'
import imgOther1 from '../asset/imgs/experience/service/other/30shine-goi-masage-duong-sinh-2.jpg'
import imgOther2 from '../asset/imgs/experience/service/other/30shine-kid-combo-cho-be-2.jpg'
import imgOther3 from '../asset/imgs/experience/service/other/20220104-dich-vu-lay-ray-tai.jpg'
import imgOther4 from '../asset/imgs/experience/service/other/20220105-30shine-cat-xa-tao-kieu.jpg'

function Experience() {

    const TitleItem = (value)=> {
        return(
            <div className={`${css.title} ${css.pdT100}`}>
                <div className={css.borderTitle}></div>
                <h3 className={css.titleText}>{value.content}</h3>
            </div>
        )
    }
    

    const List4Item = (img)=> {
        return(
            <ul className={css.combo10List}>
                <li className={`${css.combo10Item} ${css.containerHoverZom}`}>
                    <img className={`${css.combo10ItemImg} ${css.hoverZom}`} src={img.img1}/>
                </li>
                <li className={`${css.combo10Item} ${css.containerHoverZom}`}>
                    <img className={`${css.combo10ItemImg} ${css.hoverZom}`} src={img.img2}/>
                </li>
                <li className={`${css.combo10Item} ${css.containerHoverZom}`}>
                    <img className={`${css.combo10ItemImg} ${css.hoverZom}`} src={img.img3}/>
                </li>
                <li className={`${css.combo10Item} ${css.containerHoverZom}`}>
                    <img className={`${css.combo10ItemImg} ${css.hoverZom}`} src={img.img4}/>
                </li>
            </ul>
        )
    }

    const Combo10 = ()=> {
        return(
            <div className={`${css.pdT70} ${css.combo10}`}>
                <TitleItem
                    content = "SHINE COMBO CẮT GỘI 10 BƯỚC"
                />
                <div className={css.combo10Container}>
                    <div className={`${css.imgBannerCombo10Container} ${css.containerHoverZom}`}>
                        <img className={`${css.imgBannerCombo10} ${css.hoverZom}`} src={imgbannerCombo10}/>
                    </div>
                    <p className={css.textCombo10}>Dịch vụ chăm sóc tóc đặc biệt dùng kèm Shine Combo</p>
                    <List4Item
                        img1 = {imgCombo10Item1}
                        img2 = {imgCombo10Item2}
                        img3 = {imgCombo10Item3}
                        img4 = {imgCombo10Item4}
                    />
                </div>
            </div>
        )
    }

    const VipCombo = ()=> {
        return(
            <div className={css.vipCombo}>
                <TitleItem
                    content = "VIP COMBO"
                />
                <div className={`${css.comboVipImgContainer} ${css.containerHoverZom}`}>
                    <img className={`${css.ComboVipImg} ${css.hoverZom}`} src={imgComboVip}/>
                </div>
            </div>
        )
    }

    const Curling = () => {
        return(
            <div>
                <TitleItem
                    content = "UỐN"
                />
                <div className={`${css.curlingImgContainer} ${css.containerHoverZom}`}>
                    <img className={`${css.curlingImg} ${css.hoverZom}`} src={imgCurling}/>
                </div>
            </div>
        )
    }

    const Dye = ()=> {
        return(
            <div>
                <TitleItem
                    content = "NHỘM"
                />
                <ul className={`${css.dyeListImg}`}>
                    <li className={`${css.dyeListItem} ${css.containerHoverZom}`}>
                        <img className={`${css.imgDye} ${css.hoverZom}`} src={imgDye1}/>
                    </li>
                    <li className={`${css.dyeListItem} ${css.containerHoverZom}`}>
                        <img className={`${css.imgDye} ${css.hoverZom}`} src={imgDye2}/>
                    </li>
                    <li className={`${css.dyeListItem} ${css.containerHoverZom}`}>
                        <img className={`${css.imgDye} ${css.hoverZom}`} src={imgDye3}/>
                    </li>
                </ul>
            </div>
        )
    }

    const HairCare = () => {
        return(
            <div>
                <TitleItem
                    content = "DƯỠNG - PHỤC HỒI"
                />
                <div className={`${css.containerImgHariCare}`}>
                    <div className={`${css.containerHoverZom} ${css.containerHairCareImgMain}`}>
                        <img className={`${css.hoverZom} ${css.HairCareImgMain}`} src={imgHairCare1}/>
                    </div>
                    <div className={`${css.containerHoverZom} ${css.HairCareImgContainerSub}`}>
                        <img className={`${css.hoverZom} ${css.HairCareImgSub}`} src={imgHairCare2}/>
                    </div>
                </div>
            </div>
        )
    }

    const Other = ()=> {
        return(
            <div>
                <TitleItem
                    content = "DỊCH VỤ KHÁC"
                />
                <List4Item
                        img1 = {imgOther1}
                        img2 = {imgOther2}
                        img3 = {imgOther3}
                        img4 = {imgOther4}
                    />
            </div>
        )
    }


    return (
        <div id={css.fullPage}>
            <div id={css.paddingLR}>
                <div id={css.contentPage}>
                    <Combo10/>
                    <VipCombo/>
                    <Curling/>
                    <Dye/>
                    <HairCare/>
                    <Other/>
                </div>
            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Experience