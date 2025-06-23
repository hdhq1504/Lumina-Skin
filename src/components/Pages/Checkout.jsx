import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout() {
  const [deliveryOption, setDeliveryOption] = useState("ship");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(savedCart);
  }, []);

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfull");
  };

  const totalPrice = cartItems.reduce((acc, item) => {
    const price = Number(item.price.replace(/[^\d]/g, ''));
    return acc + price * item.quantity;
  }, 0);

  const estimateTax = (totalPrice * 0.1).toFixed(2);

  return (
    <>
        <div className="container my-5 pt-1">
            <div className="row g-4 mt-5">
                <div className="col-lg-7">
                    <h5>Thông tin liên hệ</h5>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Email hoặc số điện thoại" />
                    </div>
                    <div className="form-check mb-4">
                        <input className="form-check-input" type="checkbox" id="newsCheck" />
                        <label className="form-check-label" htmlFor="newsCheck">
                            Gửi email cho tôi về tin tức và ưu đãi
                        </label>
                    </div>
                    <h5>Giao hàng</h5>
                    <div>
                        <div className="mb-3">
                            <div className="btn-group btn-from w-100" role="group">
                                <input 
                                    type="radio"
                                    className="btn-check"
                                    name="deliveryOption"
                                    id="ship"
                                    checked={deliveryOption==='ship'}
                                    onChange={() => setDeliveryOption('ship')}
                                />
                                <label className="btn ship-btn" htmlFor="ship">Giao tận nơi</label>

                                <input 
                                    type="radio"
                                    className="btn-check"
                                    name="deliveryOption"
                                    id="pickup"
                                    checked={deliveryOption==='pickup'}
                                    onChange={() => setDeliveryOption('pickup')}
                                />
                                <label className="btn pickup-btn" htmlFor="pickup">Nhận tại cửa hàng</label>
                            </div>
                        </div>

                        {deliveryOption === 'ship' && (
                            <div className="row mb-3">
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option value="">Việt Nam</option>
                                        <option value="">Pháp</option>
                                        <option value="">Hoa Kỳ</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Họ (không bắt buộc)" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Tên (không bắt buộc)" />
                                </div>
                            </div>
                        )}

                        {deliveryOption === 'pickup' && (
                            <div className="container my-4">
                                <div className="d-flex justify-content-between align-items-center mb-2">
                                    <h6 className="fw-semibold mb-0">Địa điểm cửa hàng</h6>
                                    <a href="#" className="text-decoration-none small">Thay đổi địa điểm</a>
                                </div>

                                <div 
                                    className="alert alert-danger d-flex flex-column rounded-3" 
                                    role="alert" 
                                    style={{
                                        color: '#7B1C1C',
                                        backgroundColor: '#FEF6F6',
                                        border: '1px solid rgba(145, 137, 137, 0.59)' 
                                    }}
                                >
                                    <div className="d-flex align-items-center mb-1">
                                        <i className="bi bi-exclamation-circle-fill me-2"></i>
                                        <strong>Không có cửa hàng nào có sản phẩm của bạn</strong>
                                    </div>

                                    <div>
                                        <a href="#" className="text-decoration-underline" style={{color:'#7B1C1C'}}>Giao đến địa chỉ</a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Địa chỉ" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control"  placeholder="Căn hộ, tầng, v.v. (không bắt buộc)" />
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Thành phố" />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Mã bưu điện (không bắt buộc)" />
                        </div>
                    </div>
                    <div className="form-check mb-4">
                        <input type="checkbox" className="form-check-input" id="saveInfo" />
                        <label htmlFor="saveInfo" className="form-check-label">Lưu thông tin này cho lần sau</label>
                    </div>

                    <h6>Phương thức vận chuyển</h6>
                    <div className="rounded p-3 d-flex justify-content-between align-items-center" style={{border:'1px solid darkblue', backgroundColor:'#F0F5FF'}}>
                        <span>Tiêu chuẩn</span>
                        <span className="text-success">MIỄN PHÍ</span>
                    </div>

                    <div className="container my-5">
                        <h4 className="fw-semibold">Thanh toán</h4>
                        <p className="text-muted mb-3">Tất cả giao dịch đều được bảo mật và mã hóa.</p>

                        <div className="border rounded">
                            <div className="bg-light border-bottom d-flex justify-content-between align-items-center p-3">
                                <span className="fw-semibold">Thẻ tín dụng</span>
                                <div className="bg-warning text-white rounded px-2 py-1 fw-bold" style={{ fontSize:'0.9rem' }}>B</div>
                            </div>

                            <div className="p-3 bg-light">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Số thẻ" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Ngày hết hạn (MM / YY)" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <input type="text" className="form-control" placeholder="Mã bảo mật" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Tên trên thẻ" />
                                </div>

                                <div className="form-check mb-3">
                                    <input type="checkbox" className="form-check-input" id="billingCheck" checked />
                                    <label className="form-check-label" htmlFor="billingCheck">
                                        Sử dụng địa chỉ giao hàng làm địa chỉ thanh toán
                                    </label>
                                </div>
                            </div>
                        </div>

                        <button className="btn w-100 mt-4 py-2 fw-semibold">Thanh toán ngay</button>

                        <div className="mt-5 border-top pt-3">
                            <a href="#" className="text-decoration-none small text-decoration-underline">Chính sách bảo mật</a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="card border-0 shadow-sm rounded-4 p-4">
                        <h5 className="fw-bold mb-3">
                            <i className="ri-shopping-cart-2-line me-2 text-info"></i> Tóm tắt đơn hàng
                        </h5>
                        {cartItems.length === 0 ? (
                            <p className="text-muted">Giỏ hàng của bạn đang trống.</p>
                        ) : (
                            cartItems.map(item => (
                                <div key={item.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
                                <img src={item.image} className="rounded" width='60' height='60' style={{objectFit:'cover', marginRight:'10px'}}  alt="" />
                                <div className="flex-grow-1">
                                    <h6 className="mb-1">{item.productName}</h6>
                                    <small className="text-muted">Số lượng: {item.quantity}</small>
                                </div>
                                <div className="fw-semibold">${(parseFloat(item.price.replace('$','')) * item.quantity).toFixed(2)}</div>
                                </div>
                            ))
                        )}
                        <hr />
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Tạm tính</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Phí vận chuyển</span>
                            <span>Nhập địa chỉ</span>
                        </div>
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Thuế tạm tính</span>
                            <span>${estimateTax}</span>
                        </div>
                        <div className="d-flex justify-content-between small mb-1">
                            <span>Tổng cộng</span>
                            <span>${(totalPrice + parseFloat(estimateTax)).toFixed(2)}</span>
                        </div>
                        <button className="btn w-100 mt-3" onClick={handlePlaceOrder}>
                            <i className="ri-secure-payment-line me-2"></i> Đặt hàng
                        </button>

                        <Link to='/cart' className="btn mt-2 text-decoration-none">
                            <i className="ri-arrow-left-line me-1"></i> Quay lại giỏ hàng
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <ToastContainer />
    </>
  );
}

export default Checkout;
