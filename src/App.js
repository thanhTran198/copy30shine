import { Routes, Route, Link } from "react-router-dom";
import { useRef } from "react"
import './App.css';
import Home from './listPage/home'
import Experience from './listPage/experience'
import Shine from './listPage/shine'
import HairStyle from './listPage/hairStyle'
import Nearest from './listPage/nearest'
import HairStore from './listPage/30shineShop'
import { AiFillCloseCircle } from "react-icons/ai";

import logo30shine from './asset/imgs/log-30shine.jpg'
import iconLogin from './asset/imgs/Crown-icon.png'


function App() {
  const btnClosModa = useRef()
  const moda = useRef()

  let hidden = false
  function handaleModalClos() {
    hidden = !hidden
    if(hidden) {
      moda.current.style.display = "block"
    }else {
      moda.current.style.display = "none"
    }
  }


  return (
    <div className="App">
      
      <div ref={moda} className="modal">
        <div onClick={()=>{handaleModalClos()}} className="modalColor"></div>
        <div className="modalContent">
          <div className="pageLogin">
            <p className="pageLoginTitle">ĐĂNG NHẬP</p>
            <p className="pageLoginPhone">Số điện thoại của anh là gì ạ?</p>
            <input className="modalInput" type="text" placeholder="Ví dụ: 0912.xxx.xxx"/>
            <div className="btnModalLogin">
              <p>TIẾP TỤC</p>
            </div>
            <div ref={btnClosModa} onClick={()=>{handaleModalClos()}} className="modalIconClos"><AiFillCloseCircle/></div>
        </div>
        </div>
      </div>
      <div className="navbar">
        <div className="navbarCenter">
          <div className="container-logo30shine">
            <Link to="/">
              <img className="logo30shine" src={logo30shine} alt="logo30shine"/>
            </Link>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/trai-nghiem-dich-vu/">TRẢI NGHIỆM DỊCH VỤ</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/hanh-trinh-toa-sang/">HÀNH TRÌNH TỎA SÁNG</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/kham-pha-kieu-toc/">KHÁM PHÁ KIỂU TÓC</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/30shine-shop/">30SHINE SHOP</Link>
            </li>
            <li className="navbar-item">
              <Link className="navbar-item-link" to="/30shine-gan-nhat">TÌM 30SHINE GẦN NHẤT</Link>
            </li>
          </ul>
          <div onClick={()=>{return(handaleModalClos())}} className="login-btn">
            <img className="login-btn-img" src={iconLogin}/>
            <p className="login-btn--text">ĐĂNG NHẬP</p>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/trai-nghiem-dich-vu/" element={<Experience/>} />
        <Route path="/hanh-trinh-toa-sang/" element={<Shine/>} />
        <Route path="/kham-pha-kieu-toc/" element={<HairStyle/>} />
        <Route path="/30shine-shop/" element={<HairStore/>} />
        <Route path="/30shine-gan-nhat/" element={<Nearest/>} />
      </Routes>
    </div>
  );
}

export default App;
