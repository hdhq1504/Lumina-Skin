import React from "react";
import payment1 from "./../../assets/payment-1.svg";
import payment2 from "./../../assets/payment-2.svg";
import payment3 from "./../../assets/payment-3.svg";
import payment4 from "./../../assets/payment-4.svg";
import payment5 from "./../../assets/payment-5.svg";
import payment6 from "./../../assets/payment-6.svg";

function Footer() {
  return (
    <>
      <div className="footer mt-5 py-5">
        <div className="container">
            <div className="row gy-4">
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="mb-3">Công ty</h3>
                            <p className="mb-0">Tìm cửa hàng gần bạn nhất</p>
                            <p className="mb-4">Xem <strong>Hệ thống cửa hàng</strong></p>
                            <p className="mb-0"><strong>+84 931318657</strong></p>
                            <p>hoquan15042004@gmail.com</p>
                        </div>

                        <div className="col-md-4">
                            <h3 className="mb-3">Liên kết hữu ích</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Sản phẩm mới</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Bán chạy nhất</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Combo tiết kiệm</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Thẻ quà tặng online</a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-md-4">
                            <h3 className="mb-3">Thông tin</h3>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Đổi trả hàng</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Liên hệ</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Câu hỏi vận chuyển</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Điều khoản & Điều kiện</a>
                                </li>
                                <li className="mb-2">
                                    <a href="#" className="text-decoration-none">- Chính sách bảo mật</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h3 className="mb-4">Nhận ưu đãi qua email</h3>
                    <p className="mb-5">Nhập email để là người đầu tiên biết về bộ sưu tập và sản phẩm mới</p>
                    <div className="subscribe-box d-flex">
                        <input type="email" className="form-control" placeholder="Nhập email của bạn" />
                        <button className="btn" style={{width:'110px'}}>Đăng ký</button>
                    </div>
                </div>

                <div className="footer-bottom mt-5">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className="footer-icon-text d-flex gap-3 justify-content-center justify-content-lg-end">
                                <p>Glowing 2025 | Powered by Shopify</p>
                                <div className="footer-icons d-flex gap-2">
                                    <i className="ri-instagram-line"></i>
                                    <i className="ri-twitter-x-line"></i>
                                    <i className="ri-facebook-circle-fill"></i>
                                    <i className="ri-youtube-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="footer-logo text-center">
                                <a href="#" className="navbar-brand mx-auto order-0">
                                    <h2 className="m-0 fw-bold" style={{ letterSpacing:'2px' }}>LUMINASKIN</h2>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="payment-img mt-4 mt-xl-0 d-flex gap-2 justify-content-center justify-content-lg-end">
                                <img src={payment1} alt="" className="img-fluid" />
                                <img src={payment2} alt="" className="img-fluid" />
                                <img src={payment3} alt="" className="img-fluid" />
                                <img src={payment4} alt="" className="img-fluid" />
                                <img src={payment5} alt="" className="img-fluid" />
                                <img src={payment6} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
