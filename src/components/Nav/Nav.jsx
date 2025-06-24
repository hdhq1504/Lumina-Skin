import React, { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";

function Nav() {
  const [cartCount, setCartCount] = useState();
  const [wishlistCount, setWishlistCount] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const updateCounts = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    const totalCartItems = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
    setCartCount(totalCartItems);
    setWishlistCount(wishlist.length);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  useEffect(() => {
    updateCounts();

    const handleCartUpdate = () => updateCounts();
    const handleWishlistUpdate = () => updateCounts();

    window.addEventListener('cartUpdated', handleCartUpdate);
    window.addEventListener('wishlistUpdated', handleWishlistUpdate);

    const onStorageChange = (e) => {
      if (e.key === 'cart' || e.key === 'wishlist') {
        updateCounts();
      }
    };
    window.addEventListener('storage', onStorageChange);

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdate);
      window.removeEventListener('wishlistUpdated', handleWishlistUpdate);
      window.removeEventListener('storage', onStorageChange);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <div className="nav w-100 fixed-top bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg py-2 justify-content-between align-items-center w-100 nav-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Mobile Logo */}
          <Link to='/' className="navbar-brand mx-auto order-0 d-lg-none d-flex">
            <img src={logo} alt="" width="64px" />
          </Link>

          {/* Mobile Icon */}
          <ul className="d-lg-none d-flex align-items-center gap-3">
            <li className="nav-item">
              <form onSubmit={handleSearch} className="d-flex align-items-center">
                <input
                  type="text"
                  className="form-control form-control-sm search-bar-input"
                  style={{ width: 100 }}
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="btn p-0 ms-1 search-bar-btn">
                  <i className="bi bi-search fs-5 text-dark"></i>
                </button>
              </form>
            </li>
            <li className="nav-item">
              <a href="#" data-bs-toggle="modal" data-bs-target="#signupModal">
                <i className="bi bi-person fs-5 text-dark"></i>
              </a>
            </li>
            <li className="nav-item position-relative">
              <Link to='/wishlist'>
                <i className="bi bi-heart fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">{wishlistCount}</span>
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link to='/cart'>
                <i className="bi bi-bag fs-5 text-dark"></i>
                <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">{cartCount}</span>
              </Link>
            </li>
          </ul>

          {/* Main Navbar */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNav"
          >
            {/* Left Navbar */}
            <Link to='/' className="navbar-brand order-0 d-none d-lg-flex">
              <img src={logo} alt="" width="64px" />
            </Link>

            {/* Navbar */}
            <ul className="navbar-nav nav-menu align-items-center gap-4">
              <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/about' className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/shop' className="nav-link">Shop</Link>
              </li>
              <li className="nav-item">
                <Link to='/stores' className="nav-link">Store</Link>
              </li>
              <li className="nav-item">
                <Link to='/blog' className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to='/contact' className="nav-link">Contact</Link>
              </li>
            </ul>

            {/* Right Navbar */}
            <ul className="navbar-nav d-none d-lg-flex align-items-center gap-4">
              <li className="nav-item">
                <form onSubmit={handleSearch} className="d-flex align-items-center position-relative">
                  <input
                    type="text"
                    className="form-control form-control-sm search-bar-input pe-5"
                    style={{ width: 200 }}
                    placeholder="Tìm kiếm..."
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                  <button type="submit" className="p-0 search-bar-btn position-absolute end-0 top-50 translate-middle-y me-2">
                    <i className="bi bi-search fs-5 text-dark"></i>
                  </button>
                </form>
              </li>
              <li className="nav-item">
                <a href="#" data-bs-toggle="modal" data-bs-target="#signinModal">
                  <i className="bi bi-person fs-5 text-dark"></i>
                </a>
              </li>
              <li className="nav-item position-relative">
                <Link to='/wishlist'>
                  <i className="bi bi-heart fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">{wishlistCount}</span>
                </Link>
              </li>
              <li className="nav-item position-relative">
                <Link to='/cart'>
                  <i className="bi bi-bag fs-5 text-dark"></i>
                  <span className="position-absolute top-0 start-100 translate-middle cart-qount rounded-pill">{cartCount}</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      {/* Sign Up Modal */}
      <div className="modal fade" id="signupModal" tabIndex='-1' aria-labelledby="signupModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="signupModalLabel">Đăng ký</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Họ và tên</label>
                  <input type="text" className="form-control" placeholder="Nhập họ tên của bạn" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Nhập địa chỉ email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mật khẩu</label>
                  <input type="password" className="form-control" placeholder="Nhập mật khẩu" required />
                </div>
                <p className="text-muted">
                  Khi đăng ký, bạn đã đồng ý với <a href="#" className="text-success text-decoration-none">Điều khoản</a> & <a href="#" className="text-success text-decoration-none">Chính sách bảo mật</a>
                </p>
                <button type="button" className="btn btn-dark w-100">Đăng ký</button>
              </form>
              <div className="text-center mt-3">
                <p>Đã có tài khoản? <a href="#" className="text-success fw-bold" data-bs-toggle="modal" data-bs-target="#signinModal" onClick={() => document.getElementById('signupModal').classList.remove('show')}>Đăng nhập</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sign In Modal */}
      <div className="modal fade" id="signinModal" tabIndex='-1' aria-labelledby="signinModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div className="modal-header border-0">
              <h5 className="modal-title fw-bold" id="signinModalLabel">Đăng nhập</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Đóng"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Nhập địa chỉ email" required />
                </div>
                <div className="mb-3">
                  <label className="form-label">Mật khẩu</label>
                  <input type="password" className="form-control" placeholder="Nhập mật khẩu" required />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Ghi nhớ đăng nhập</label>
                  </div>
                  <a href="#" className="text-success text-decoration-none">Quên mật khẩu?</a>
                </div>
                <button type="button" className="btn btn-dark w-100">Đăng nhập</button>
              </form>
              <div className="text-center mt-3">
                <p>Chưa có tài khoản? <a href="#" className="text-success fw-bold" data-bs-toggle="modal" data-bs-target="#signupModal" onClick={() => document.getElementById('signinModal').classList.remove('show')}>Đăng ký</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
