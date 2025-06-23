import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import products from "./../../Product.json";
import { Link, useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id == id);

  const [mainImage, setMainImage] = useState("");
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      setImages([product.image, product.secondImage].filter(Boolean));
      setQuantity(1);
    }
  }, [product]);

  const colors = ["#000000", "#7B3F00", "#9BBEC8"];

  return (
    <>
      <ol className="section-banner py-3 position-relative">
        <li className="position-relative"><Link to="/">Home</Link></li>
        <li className="position-relative active"><a href="#" className="ps-5">Làm đẹp & Mỹ phẩm</a></li>
        <li className="position-relative active"><a href="#" className="ps-5">{product.productName}</a></li>
      </ol>

      <div className="container py-5">
        <div className="row">
            <div className="col-xl-6">
                <div className="d-flex flex-column-reverse flex-md-row mb-4">
                    <div className="d-flex flex-column me-3 thumbnail-images">
                        {images.map((img, idx) => (
                            <img
                                key={idx}
                                src={img}
                                alt={`Thumb ${idx}`}
                                onClick={() => setMainImage(img)}
                                className={`img-thumbnail ${mainImage === img ? 'border-dark' : ''}`}
                                style={{ width:60, height:80, objectFit:'cover', cursor:'pointer' }}
                            />
                        ))}
                    </div>
                    <img src={mainImage} alt="Main" className="img-fluid" />
                </div>
            </div>

            <div className="col-xl-6">
                <h5 className="fw-bold">{product.price}</h5>
                <h2 className="mb-4 fw-semibold">{product.productName}</h2>

                <p className="mb-1 fw-semibold">Màu sắc: Đen</p>
                <div className="d-flex gap-2 mb-4">
                    {colors.map((color, idx) => (
                        <div
                            key={idx}
                            style={{
                                backgroundColor: color,
                                width: 25,
                                height: 25,
                                borderRadius: '50%',
                                border: '1px solid #CCC',
                                cursor: 'pointer'
                            }}
                        >
                        </div>
                    ))}
                </div>
                <p className="fw-semibold mb-1">Số lượng</p>
                <div className="d-flex align-items-center gap-3 mb-4 quantity">
                    <div className="d-flex align-items-center quantity-box" style={{ maxWidth:'200px' }}>
                        <button className="btn-count border-0" onClick={() => setQuantity((q) => Math.max(1, q-1))}>-</button>
                        <input type="text" className="form-control text-center mx-2" value={quantity} readOnly/>
                        <button className="btn-count border-0" onClick={() => setQuantity((q) => Math.max(1, q+1))}>+</button>
                    </div>
                    <button className="btn-custom w-100">Thêm vào giỏ hàng</button>
                </div>
                <button className="btn-custom2 w-100 border-0">Mua ngay</button>
                
                <hr />
                <p><strong>Nhà cung cấp:</strong> Vendor 4</p>
                <p><strong>Bộ sưu tập:</strong> Làm đẹp & Mỹ phẩm, Bán chạy, Nổi bật, Hàng mới, Chăm sóc da, dưới 1 triệu</p>
                <p><strong>Mã SKU:</strong> 501</p>
            </div>
        </div>
      </div>

      <div className="container my-5">
        <ul className="nav nav-tabs border-0 justify-content-center mb-4" id="productTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link tab active border-0 fw-bold fs-4 text-capitalize"
                    id="description-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#description"
                    type="button"
                >
                    Mô tả
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button
                    className="nav-link tab border-0 text-muted fs-4 text-capitalize"
                    id="shipping-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#shipping"
                    type="button"
                >
                    Giao hàng & Đổi trả
                </button>
            </li>
        </ul>

        <div className="tab-content" id="productTabContent">
            <div className="tab-pane fade show active" id="description" role="tabpanel">
                <p><strong>Phù hợp cho da thường, da dầu, da hỗn hợp</strong></p>
                <p>
                    Kem nền tự nhiên hoàn thiện làn da, giàu chất chống oxy hóa từ siêu trái cây, vitamin và các dưỡng chất nuôi dưỡng da...
                </p>
                <h5 className="mt-4">Công dụng</h5>
                <ul className="benefits-list p-0">
                    <li className="position-relative">Che phủ từ trung bình đến cao, có thể điều chỉnh</li>
                    <li className="position-relative">Cảm giác nhẹ, không gây bí da!</li>
                    <li className="position-relative">Bền màu lâu trôi</li>
                    <li className="position-relative">Làm đều màu da</li>
                    <li className="position-relative">Có 07 tông màu (độc quyền tại Makeaholic!)</li>
                </ul>
            </div>

            <div className="tab-pane fade" id="shipping" role="tabpanel">
                <p>
                    Đơn hàng sẽ được xử lý và giao trong vòng 1 tuần, phí vận chuyển tính tại trang thanh toán tùy theo địa chỉ và phương thức bạn chọn. Miễn phí vận chuyển cho đơn hàng từ 500.000₫ tùy chương trình. Khi đơn hàng được gửi đi, bạn sẽ nhận email xác nhận cùng mã vận đơn để theo dõi. Giao hàng tiêu chuẩn thường mất 5-7 ngày làm việc, có thể chọn giao nhanh nếu cần. Nếu muốn đổi địa chỉ sau khi đặt, vui lòng liên hệ sớm nhất. Nếu đơn hàng bị thất lạc, hãy liên hệ đơn vị vận chuyển trước, đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ. Đổi trả trong vòng 1 tuần với sản phẩm chưa sử dụng, còn nguyên bao bì. Hoàn tiền trong 3-5 ngày làm việc sau khi nhận và kiểm tra hàng trả về. Có thể đổi size hoặc loại sản phẩm khác nếu cần. Nếu có thắc mắc về giao hàng hoặc đổi trả, hãy liên hệ đội ngũ hỗ trợ.
                </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
