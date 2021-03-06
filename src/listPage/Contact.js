import React from 'react'
import css from '../listPage/contact.module.css'
import imgMessage from '../asset/imgs/home/contact/messenger.png'
import imgPhone from '../asset/imgs/home/contact/phoneNew.png'

const Contact = ()=> {
    return(
        <div className={css.contact}>
            <div onClick={()=>{window.open("tel:0703962534")}} className={css.contactContainerPhone}>
                <img className={css.contactImgPhone} src={imgPhone} alt=""/>
            </div>
            <div className={css.contactContainerMessage}>
                <img className={css.contactImgMessage} src={imgMessage} alt=""/>
            </div>
        </div>
    )
}
export default Contact