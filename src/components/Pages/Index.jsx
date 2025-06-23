import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Product from "./../../Product.json";
import subBanner1 from "./../../assets/banner-1.webp";
import subBanner2 from "./../../assets/banner-2.webp";
import serviceImg1 from "./../../assets/service-icon-1.svg";
import serviceImg2 from "./../../assets/service-icon-2.svg";
import serviceImg3 from "./../../assets/service-icon-3.svg";
import serviceImg4 from "./../../assets/service-icon-4.svg";
import brand1 from "./../../assets/brand-1.png";
import brand2 from "./../../assets/brand-2.png";
import brand3 from "./../../assets/brand-3.png";
import femaleBanner from "./../../assets/banner-female.webp";
import discover1 from "./../../assets/discover-1.webp";
import discover2 from "./../../assets/discover-2.webp";
import socialImage1 from "./../../assets/social-image-1.jpg";
import socialImage2 from "./../../assets/social-image-2.jpg";
import socialImage3 from "./../../assets/social-image-3.jpg";
import socialImage4 from "./../../assets/social-image-4.jpg";
import socialImage5 from "./../../assets/social-image-5.jpg";

function Index() {
  const addToWishlist = (product) => {
    const existing = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (!existing.some(p => p.id === product.id)) {
      const updated = [...existing, product];
      localStorage.setItem('wishlist', JSON.stringify(updated));
      window.dispatchEvent(new Event('wishlistUpdated'));
      toast.success("Đã được thêm vào wishlist");
    }
    else {
      toast.info("Đã có trong wishlist");
    }
  }

  const addToCart = (product) => {
    const existing = JSON.parse(localStorage.getItem('cart')) || [];
    const alreadyInCart = existing.find(p => p.id === product.id);

    if (!alreadyInCart) {
      const updatedProduct = {...product, quantity: 1};
      const updatedCart = [...existing, updatedProduct];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success("Đã được thêm vào giỏ hàng");
    }
    else {
      toast.info("Đã có trong giỏ hàng");
    }
  }

  return (
    <>
      {/* Hero */}
      <div className="hero">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          modules={[Autoplay, EffectFade]}
          effect="fade"
          loop={true}
          autoplay={{ delay: 3000 }}
        >
          <SwiperSlide>
            <div className="hero-wrap hero-wrap1">
              <div className="hero-content">
                <h5>- SẢN PHẨM CẦN THIẾT -</h5>
                <h1>Làm đẹp lấy cảm hứng từ cuộc sống thực</h1>
                <p className="my-3">
                  Sử dụng thành phần sạch, không độc hại, sản phẩm của chúng tôi phù hợp cho mọi người.
                </p>
                <a href="#" className="btn hero-btn mt-3">Mua ngay</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap2">
              <div className="hero-content">
                <h5>- BỘ SƯU TẬP MỚI -</h5>
                <h1>Làn da ngậm nước hoàn hảo</h1>
                <p className="my-3">
                  Sử dụng thành phần sạch, không độc hại, sản phẩm của chúng tôi phù hợp cho mọi người.
                </p>
                <a href="#" className="btn hero-btn mt-3">Mua ngay</a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-wrap hero-wrap3">
              <div className="hero-content">
                <h5>- TỎA SÁNG -</h5>
                <h1>Hãy là phiên bản đẹp nhất của chính bạn</h1>
                <p className="my-3">
                  Sử dụng thành phần sạch, không độc hại, sản phẩm của chúng tôi phù hợp cho mọi người.
                </p>
                <a href="#" className="btn hero-btn mt-3">Mua ngay</a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Products */}
      <div className="product-container py-5 my-5">
        <div className="container position-relative">
          <div className="row">
            <div className="section-title mb-5 product-title text-center">
              <h2 className="fw-semibold fs-1">Sản phẩm nổi bật</h2>
              <p className="text-muted">Sở hữu làn da bạn mong muốn</p>
            </div>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{ nextEl: ".product-swiper-next", prevEl: ".product-swiper-prev" }}
              breakpoints={{
                1399: { slidesPerView: 4 },
                1199: { slidesPerView: 3 },
                991: { slidesPerView: 2 },
                767: { slidesPerView: 1.5 },
                0: { slidesPerView: 1 },
              }}
              className="mt-4 swiper position-relative"
            >
              {Product.filter(product => product.id >= 5 && product.id <= 10).map(product => (
                <SwiperSlide key={product.id}>
                  <div className="product-item text-center position-relative">
                    <div className="product-image w-100 position-relative overflow-hidden">
                      <img src={product.image} className="img-fluid" alt="" />
                      <img src={product.secondImage} className="img-fluid" alt="" />
                      
                      <div className="product-icons gap-3">
                        <div className="product-icon" title="Thêm vào yêu thích" onClick={() => addToWishlist(product)}>
                          <i className="bi bi-heart fs-5"></i>
                        </div>
                        
                        <div className="product-icon" title="Thêm vào giỏ hàng" onClick={() => addToCart(product)}>
                          <i className="bi bi-cart3 fs-5"></i>
                        </div>
                      </div>
                      <span className={`tag badge text-white ${product.tag === "Mới" ? "bg-danger" : "bg-success"}`}>
                        {product.tag}
                      </span>
                    </div>
                    
                    <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                      <div className="product-content pt-3">
                        <span className="price text-decoration-none">{product.price}</span>
                        <h3 className="title pt-1">{product.productName}</h3>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Banners */}
        <div className="banner py-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 banner-card overflow-hidden position-relative">
                <img src={subBanner1} alt="" className="img-fluid rounded banner-img" />
                <div className="banner-content position-absolute">
                  <h3>BỘ SƯU TẬP MỚI</h3>
                  <h1>Serum C+ Tỏa Sáng<br /></h1>
                  <button className="btn banner-btn mt-2">KHÁM PHÁ THÊM</button>
                </div>
              </div>

              <div className="col-lg-6 banner-card overflow-hidden position-relative banner-mt">
                <img src={subBanner2} alt="" className="img-fluid rounded banner-img" />
                <div className="banner-content banner-content2 position-absolute">
                  <h1>GIẢM GIÁ 25%</h1>
                  <p>Trang điểm với bảng màu đa dạng <br /> phù hợp với mọi tông màu da.</p>
                  <button className="btn banner-btn mt-2">MUA NGAY</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service */}
        <div className="container py-5 my-5">
          <div className="row text-center">
            <div className="col-lg-3 col-sm-6 mb-4">
              <img src={serviceImg1} alt="" className="img-fluid" />
              <h4 className="mt-3 mb-1">Miễn phí vận chuyển</h4>
              <p className="text-muted fs-6 fw-semibold">Miễn phí vận chuyển cho đơn hàng trên 3.000.000đ</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <img src={serviceImg2} alt="" className="img-fluid" />
              <h4 className="mt-3 mb-1">Đổi trả hàng</h4>
              <p className="text-muted fs-6 fw-semibold">Trong vòng 30 ngày để được đổi trả</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <img src={serviceImg3} alt="" className="img-fluid" />
              <h4 className="mt-3 mb-1">Hỗ trợ trực tuyến</h4>
              <p className="text-muted fs-6 fw-semibold">24 giờ một ngày, 7 ngày một tuần</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-4">
              <img src={serviceImg4} alt="" className="img-fluid" />
              <h4 className="mt-3 mb-1">Thanh toán linh hoạt</h4>
              <p className="text-muted fs-6 fw-semibold">Thanh toán bằng nhiều loại thẻ tín dụng</p>
            </div>
          </div>
        </div>

        {/* Seen In */}
        <div className="text-center my-5 seen-in">
          <div className="container">
            <h1 className="mb-5 fw-semibold">Đã thấy trên</h1>
            <div className="row pt-3 justify-content-center">
              <div className="col-md-4 mb-4 seen-card">
                <img src={brand1} alt="" className="img-fluid" />
                <p className="text-dark fs-5 mt-2 fw-semibold">"Dịch vụ khách hàng thật tuyệt vời. Tôi sẽ mua hàng lần nữa."</p>
              </div>
              <div className="col-md-4 mb-4 seen-card">
                <img src={brand2} alt="" className="img-fluid" />
                <p className="text-dark fs-5 mt-2 fw-semibold">"Sản phẩm tuyệt vời. Nhân viên rất tận tình."</p>
              </div>
              <div className="col-md-4 mb-4 seen-card">
                <img src={brand3} alt="" className="img-fluid" />
                <p className="text-dark fs-5 mt-2 fw-semibold">"Bạn đang tìm kiếm sản phẩm làm đẹp với giá cả phải chăng? Không cần tìm đâu xa"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Favourite Beauty */}
        <div className="favourite-beauty py-5 my-5">
          <div className="container">
            <div className="row">
              <div className="section-title mb-5 favourite-beauty-title text-center">
                <h2 className="fw-semibold fs-1">Sản phẩm làm đẹp được yêu thích</h2>
                <p>Được làm từ các thành phần sạch, không độc hại, sản phẩm của chúng tôi phù hợp cho mọi người.</p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-5">
                <div className="favourite-beauty-banner mb-lg-0 mb-5 position-relative">
                  <img src={femaleBanner} className="img-fluid" alt="" />
                  <div className="favourite-beauty-banner-title ">
                    <h3 className="fs-2">Trau dồi bản thân</h3>
                    <p className="fs-6">Sở hữu làn da bạn mong muốn</p>
                    <button className="btn btn-default">Khám phá thêm</button>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="row">
                  {Product
                    .filter(product => product.id >= 10 && product.id <= 15)
                    .map(product => (
                      <div className="col-md-4 mb-0">
                        <div key={product.id}>
                          <div className="product-item mb-5 text-center position-relative">
                            <div className="product-image w-100 position-relative overflow-hidden">
                              <img src={product.image} alt="product" className="img-fluid" />
                              <img src={product.secondImage} alt="product" className="img-fluid" />
                              <div className="product-icons gap-3">
                                <div className="product-icon" title="Thêm vào yêu thích" onClick={() => addToWishlist(product)}>
                                  <i className="bi bi-heart fs-5"></i>
                                </div>
                                <div className="product-icon" title="Thêm vào giỏ hàng" onClick={() => addToCart(product)}>
                                  <i className="bi bi-cart3 fs-5"></i>
                                </div>
                              </div>
                              <span className={`tag badge text-white ${product.tag === 'New' ? 'bg-danger' : 'bg-success'}`}>
                                {product.tag}
                              </span>
                            </div>

                            <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                              <div className="product-content pt-3">
                                <span className="price">{product.price}</span>
                                <h3 className="title pt-1">{product.productName}</h3>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="discover container py-5">
          <div className="section-title mb-5 favourite-beauty-title text-center">
            <h2 className="fw-semibold fs-1">Khám phá thêm</h2>
            <p className="text-center">Các bộ sản phẩm của chúng tôi được thiết kế để đóng gói tiện lợi <br /> các sản phẩm chăm sóc da của bạn trong khi tiết kiệm chi phí</p>
          </div>
          <div className="row g-5">
            <div className="col-md-6 discover-card text-center">
              <div className="discover-img section-image rounded">
                <img src={discover1} alt="Bộ sưu tập Mùa hè" className="img-fluid rounded" />
              </div>
              <div className="discover-info mt-3">
                <div>Bộ sưu tập Mùa hè</div>
                <button className="btn mt-2">Mua ngay <i className="bi bi-arrow-right ms-2"></i></button>
              </div>
            </div>
            <div className="col-md-6 discover-card text-center">
              <div className="discover-img section-image rounded">
                <img src={discover2} alt="Từ Blog của chúng tôi" className="img-fluid rounded" />
              </div>
              <div className="discover-info mt-3">
                <div>Bộ sưu tập Mùa hè</div>
                <button className="btn mt-2">Đọc thêm <i className="bi bi-arrow-right ms-2"></i></button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Image */}
        <div className="social-image-container py-5 px-5 mx-auto">
          <div className="row g-4">
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">
                <img src={socialImage1} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">
                <img src={socialImage2} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">
                <img src={socialImage3} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">
                <img src={socialImage4} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">
                <img src={socialImage5} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className="col-lg-2 col-md-4">
              <div className="social-wrapper position-relative overflow-hidden">
                <img src={socialImage1} alt="" className="img-fluid" />
                <i className="bi bi-instagram"></i>
              </div>
            </div>
          </div>
        </div>

      </div>

      <ToastContainer 
        position='top-right'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default Index;
