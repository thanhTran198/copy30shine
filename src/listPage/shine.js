// import shop from './shop.module.css';
import Footer from './Footer'
import css from './shine.module.css'
import Contact from './Contact'

import imgHeading1 from '../asset/imgs/shine/imgsHeading/30shine-lot-xac-thanh-hot-boy.jpg'
import imgHeading2 from '../asset/imgs/shine/imgsHeading/30shine-toc-mullet.jpg'
import imgIconYoutube from '../asset/imgs/footer/youtube.png'
import imgLittleStory1 from '../asset/imgs/shine/imgsLittleStory/1.jpg'
import imgLittleStory2 from '../asset/imgs/shine/imgsLittleStory/2.jpg'
import imgLittleStory3 from '../asset/imgs/shine/imgsLittleStory/3.jpg'
import imgLittleStory4 from '../asset/imgs/shine/imgsLittleStory/4.jpg'
import imgLittleStory5 from '../asset/imgs/shine/imgsLittleStory/5.jpg'
import imgLittleStory6 from '../asset/imgs/shine/imgsLittleStory/6.jpg'
import imgLittleStory7 from '../asset/imgs/shine/imgsLittleStory/7.jpg'
import imgLittleStory8 from '../asset/imgs/shine/imgsLittleStory/8.jpg'
import imgLittleStory9 from '../asset/imgs/shine/imgsLittleStory/9.jpg'
import imgLittleStory10 from '../asset/imgs/shine/imgsLittleStory/10.jpg'
import imgLittleStory11 from '../asset/imgs/shine/imgsLittleStory/11.jpg'
import imgLittleStory12 from '../asset/imgs/shine/imgsLittleStory/12.jpg'
import imgLittleStory13 from '../asset/imgs/shine/imgsLittleStory/13.jpg'
import imgTopView1 from '../asset/imgs/shine/imgsHeading/1.jpg'
import imgTopView2 from '../asset/imgs/shine/imgsHeading/2.jpg'


function Shine() {

    const LittleStory = (value) => {
        return(
            <div className={css.littleStoryItem}>
                <div className={css.LittleStoryContainerImg}>
                    <img className={css.LittleStoryImg} src={value.img} alt=""/>
                </div>
                <div className={css.LittleStoryContent}>
                    <h3 className={css.LittleStoryTextTitle}>{value.title}</h3>
                    <p className={css.LittleStorySubTextTitle}>{value.subTitle}</p>
                    <div className={css.LittleStoryWatch}>
                        <p className={css.LittleStoryView}>{value.view}</p>
                        <img className={value.noneYoutube ? `${css.Dplaynone}` : `${css.LittleStoryIconYoutube}`} src={imgIconYoutube} alt=""/>
                    </div>
                </div>
            </div>
        )
    }

    const List2Item = (value)=> {
        return(
            <div className={css.headingListPosts}>
                    <div className={css.headingListPostsItem}>
                        <div className={`${css.headingContainerImg}`}>
                            <img className={`${css.headingImg}`} src={value.imgItem1} alt=""/>
                        </div>
                        <div className={css.headingListPosts1Content}>
                            <h3 className={css.headingListPostsTitle}>{value.text1}</h3>
                            <p className={css.headingListPostsText}>{value.subText1}</p>
                            <div className={css.headingListPostsToWatch}>
                                <p className={css.headingListPostsViews}>{value.viewItem1}</p>
                                <img className={css.headingListPostsIconYoutube} src={imgIconYoutube} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={css.headingListPostsItem}>
                        <div className={`${css.headingContainerImg}`}>
                            <img className={`${css.headingImg}`} src={value.imgItem2} alt=""/>
                        </div>
                        <div className={css.headingListPosts2Content}>
                            <h3 className={css.headingListPostsTitle}>{value.text2}</h3>
                            <p className={css.headingListPostsText}>{value.subText2}</p>
                            <div className={css.headingListPostsToWatch}>
                                <p className={css.headingListPostsViews}>{value.viewItem2}</p>
                                <img className={css.headingListPostsIconYoutube} src={imgIconYoutube} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }

    const Heading = () => {
        return(
            <div className={css.headingIntroduce}>
                <h3 className={css.headingIntroduceTitle}>HÀNH TRÌNH TỎA SÁNG</h3>
                <p className={css.headingIntroduceText}>Quá trình tìm kiếm và hoàn thiện bản thân là bất tận. Mỗi kiểu tóc mới đại diện một tinh thần mới mà người đàn ông luôn hướng đến để tìm thấy phiên bản tốt nhất của chính mình. Hãy cùng lắng nghe những câu chuyện hành trình lột xác dưới đây để tìm thấy niềm cảm hứng đổi mới cho bạn.</p>
                <List2Item
                    imgItem1 = {imgHeading1}
                    text1 = "BẠN SINH VIÊN IT LỘT XÁC THÀNH HOT BOY VẠN NGƯỜI MÊ"
                    subText1 = "Ai nghĩ sinh viên IT là người xuề xoà, không quá quan tâm đến ngoại hình thì xem ngay màn lột xác mái tóc, thay đổi ngoại hình cực ấn tượng này nhé"
                    viewItem1 = "425K views"
                    imgItem2 = {imgHeading2}
                    text2 = "PHÚC LỘT XÁC MÁI TÓC ĐỂ SUỐT BAO NĂM GIÚP NGOẠI HÌNH MỚI CỰC CUỐN HÚT"
                    subText2 = "Thay đổi kiểu tóc đã để suốt bao năm là một quyết định vô cùng khó khăn nhưng Phúc đã vượt qua nỗi sợ đó và tạo một kiểu tóc mới hoàn toàn"
                    viewItem2 = "425K views"
                />
            </div>
        )
    }

    const ListLittleStory1 = ()=> {
        return(
            <div className={css.listLittleStory}>
                <LittleStory
                    img = {imgLittleStory1}
                    title = "Kiểu tóc mới cho tác phẩm solo đầu tay của rapper RTEE"
                    subTitle = "Rapper trẻ RTEE sắp ra mắt tác phẩm solo đầu tay. Anh cần một hình ảnh mới, một kiểu tóc mới để đánh dấu bước chuyển mình này."
                    view = "133K views"
                />
                <LittleStory
                    img = {imgLittleStory2}
                    title = "Top những kiểu tóc kinh điển của Tronie Ngô, cứ để là năng động và khoẻ khoắn"
                    subTitle = "Ngoại hình khỏe khoắn và năng động của Tronie Ngô 365Daband càng được tôn lên nhờ kiểu tóc Faux Hawk này."
                    view = "80K views"
                />
                <LittleStory
                    img = {imgLittleStory3}
                    title = "Diễn viên Hoàng Phi Kha lột xác cho vai diễn mới"
                    subTitle = "Vẻ nam thần điển trai của Hoàng Phi Kha được thể hiện siêu nét qua kiểu tóc này. Chắc chắn anh Kha sẽ có những vai diễn ấn tượng và ghi dấu trong lòng khán giả"
                    view = "64K views"
                />
                <LittleStory
                    img = {imgLittleStory4}
                    title = "Thay đổi ngoại hình, chàng trai lạnh lùng, ít nói khiến cô hoa khôi rung động"
                    subTitle = "Hiếu từng nghĩ đàn ông không cần quá quan tâm đến ngoại hình cho đến khi thay đổi kiểu tóc mới, những cơ hội, mối quan hệ chợt rộng mở."
                    view = "5 phút đọc | Làm đẹp"
                    noneYoutube
                />
                <LittleStory
                    img = {imgLittleStory5}
                    title = "Can đảm thay đổi mái tóc 7 năm, nam sinh Kiến Trúc lột xác kiểu tóc mới cực đẹp"
                    subTitle = "Anh bạn sinh viên Kiến Trúc đắn đo rất nhiều về việc cắt bỏ mái tóc đã để 7 năm, gắn liền với nhiều kỉ niệm. Và anh quyết định phải thay đổi."
                    view = "84K views"
                />
                <LittleStory
                    img = {imgLittleStory6}
                    title = "Mặt tròn để kiểu tóc này như An Nguyễn thì siêu hợp và tôn gương mặt"
                    subTitle = "Nhiều người nghĩ mặt tròn khó tạo kiểu nhưng bạn sẽ phải nghĩ khác khi xem clip lột xác này của An Nguyễn đấy"
                    view = "126K views"
                />
                <LittleStory
                    img = {imgLittleStory7}
                    title = "Bạn sinh viên đại học QGHN đổi kiểu tóc cái tạo ngay điểm nhấn mới cho gương mặt"
                    subTitle = "Nhiều người nghĩ mặt tròn khó tạo kiểu nhưng bạn sẽ phải nghĩ khác khi xem clip lột xác này của An Nguyễn đấy"
                    view = "33K views"
                />
                <LittleStory
                    img = {imgLittleStory8}
                    title = "Bạn sinh viên đại học QGHN đổi kiểu tóc cái tạo ngay điểm nhấn mới cho gương mặt"
                    subTitle = "Nam sinh đại học QGHN đã có màn lột xác cực kì ấn tượng với kiểu tóc mới tại 30Shine. Ai bảo mặt tròn không tạo kiểu đẹp được thì nên xem video này ngay nhé"
                    view = "33K views"
                />
            </div>
        )
    }
    
    const ListLittleStory2 = ()=> {
        return(
            <div className={css.listLittleStory}>
                <LittleStory
                    img = {imgLittleStory9}
                    title = "Lột xác anh bạn nghiện học quên mình thành hotboy mà các bạn nữ phải ao ước"
                    subTitle = "Quá chú tâm vào việc học nên Minh Quốc quên mất việc phải chăm sóc bản thân. Vừa rồi cậu bạn đã đạt thành tích cao trong kì tuyển sinh đại học nên quyết định lột xác mái tóc cho dấu mốc quan trọng này."
                    view = "1.4M views"
                />
                <LittleStory
                    img = {imgLittleStory10}
                    title = "Hiếu Xù từ bỏ biệt danh sau màn lột xác cực kì ngoạn mục này"
                    subTitle = "Hiếu đã biết mình phải làm gì kể từ khi gặp Kim Anh. Việc đầu tiên là phải bỏ ngay hình ảnh Hiếu xù bằng một kiểu tóc mới"
                    view = "191K views"
                />
                <LittleStory
                    img = {imgLittleStory11}
                    title = "Chuẩn bị đón thử thách mới, Ngọc Thọ lột xác với kiểu tóc cực tự tin"
                    subTitle = "Để thuận lợi xin việc sau khi ra trường, Thọ cần chuẩn bị cho mình một ngoại hình thật chỉn chu. Cậu sinh viên năm cuối quyết định lột xác"
                    view = "172K views"
                />
                <LittleStory
                    img = {imgLittleStory12}
                    title = "Quá thông minh khi lựa chọn kiểu tóc này để chuẩn bị cho vị trí giao dịch viên"
                    subTitle = "Làm ngân hàng yêu cầu một ngoại hình lịch sự, tự tin và hôm nay Phương Nam đã đến 30Shine"
                    view = "227K views"
                />
                <LittleStory
                    img = {imgLittleStory13}
                    title = "Bỏ suy nghĩ không quan tâm đến ngoại hình, nam sinh CĐ Y tế Bạch Mai lột xác với kiểu tóc mới"
                    subTitle = "Từ khi lên đại học mình đã bỏ hẳn suy nghĩ đàn ông không cần quan tâm đến ngoại hình. Điều đầu tiên mình thay đổi chính là mái tóc."
                    view = "174K views"
                />
            </div>
        )
    }


    return (
        <div className={css.shine}>
            <div className={css.bodyShine}>
                <Heading/>
                <ListLittleStory1/>
                <List2Item
                    imgItem1 = {imgTopView1}
                    text1 = "KHÔI NGUYÊN TÌM NGAY ĐƯỢC MẢNH GHÉP CÒN THIẾU KỂ TỪ KHI THAY ĐỔI KIỂU TÓC NÀY"
                    subText1 = "“Từ trước đến nay, em chưa bao giờ quan tâm đến ngoại hình cho đến khi gặp Kiều Anh” - Khôi Nguyên chia sẻ"
                    viewItem1 = "382K views"
                    imgItem2 = {imgTopView2}
                    text2 = "ĐẠT ĐÃ THAY ĐỔI KIỂU TÓC GÌ KHIẾN CƠ HỘI NGÀY CÀNG RỘNG MỞ HƠN VỚI BẠN ẤY?"
                    subText2 = "Vì công việc mới đòi hỏi giao tiếp với khách hàng thường xuyên nên Đạt đã quyết định chọn kiểu tóc này. Nó giúp Đạt gây được ấn tượng cực mạnh với đối tác"
                    viewItem2 = "367K views"
                />
                <ListLittleStory2/>
            </div>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Shine