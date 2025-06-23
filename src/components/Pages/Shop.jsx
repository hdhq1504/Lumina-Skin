import React, { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import productsData from "../../Product.json";

function Shop() {
    const[filterSortOption, setFilterSortOption] = useState('all');
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const searchKeyword = searchParams.get('search')?.toLowerCase() || '';

    const handleFilterSort = () => {
        let filtered = [...productsData];

        if (searchKeyword) {
            filtered = filtered.filter(product =>
                product.productName.toLowerCase().includes(searchKeyword) ||
                (product.description && product.description.toLowerCase().includes(searchKeyword))
            );
        }

        if (filterSortOption === 'New' || filterSortOption === 'Sale') {
            filtered = filtered.filter(product => product.tag === filterSortOption);
        }

        if (filterSortOption === 'low') {
            filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')))
        }

        if (filterSortOption === 'high') {
            filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')))
        }

        return filtered;
    };

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
    };
    
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
    };

    const displayedProducts = handleFilterSort();
  
    return (
    <>
        <ol className='section-banner py-3 position-relative'>
            <li className='position-relative'><Link to='/'>Home</Link></li>
            <li className='position-relative active'><span className='ps-5'>Sản phẩm</span></li>
        </ol>

        <div className="shop-container">
            <div className="container">
                <h1 className="text-center py-4 fw-semibold">Tất cả sản phẩm</h1>

                <div className="container my-4">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">
                        <div className='text-muted' style={{ fontSize:'1.1rem' }}>
                            Hiển thị <strong>{displayedProducts.length}</strong> sản phẩm cho "
                            {filterSortOption === 'all' ? 'Tất cả' : filterSortOption === 'New' ? 'Mới' : filterSortOption === 'Sale' ? 'Giảm giá' : filterSortOption === 'low' ? 'Giá thấp đến cao' : 'Giá cao đến thấp'}"
                        </div>
                        <div>
                            <select 
                                className="form-select py-2 fs-6"
                                style={{ minWidth:'260px', backgroundColor:'#F5F5F5', border:'0px' }}
                                value={filterSortOption}
                                onChange={(e) => setFilterSortOption(e.target.value)}
                            >
                                <option value="all">Tất cả sản phẩm</option>
                                <option value="New">Sản phẩm mới</option>
                                <option value="Sale">Sản phẩm giảm giá</option>
                                <option value="low">Giá: Thấp đến cao</option>
                                <option value="high">Giá: Cao đến thấp</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {displayedProducts.map(product => (
                        <div className="col-md-3 mb-4" key={product.id}>
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
                                        <span className={`tag badge text-white ${product.tag === 'Mới' ? 'bg-danger' : 'bg-success'}`}>
                                            {product.tag}
                                        </span>
                                    </div>
                                    <Link to={`/product/${product.id}`} className="text-decoration-none text-black">
                                        <div className="product-content pt-3">
                                            {product.oldPrice ? (
                                                <div className="price">
                                                    <span className="text-muted text-decoration-line-through me-2">{product.oldPrice}</span>
                                                    <span className='fw-bold text-muted'>{product.price}</span>
                                                </div>
                                            ) : (
                                                <span className='price'>{product.price}</span>
                                            )}
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

        <ToastContainer
            position='top-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}      
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
    </>
  )
}

export default Shop