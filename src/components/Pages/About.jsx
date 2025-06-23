import React, { useState } from "react";
import head from "../../assets/about-head-shape.webp";
import about1 from "./../../assets/banner-female-2.webp";
import about2 from "../../assets/discover-1.webp";
import client1 from "../../assets/brand-logo-1.png";
import client2 from "../../assets/brand-logo-2.png";
import client3 from "../../assets/brand-logo-3.png";
import client4 from "../../assets/brand-logo-4.png";
import client5 from "../../assets/brand-logo-5.png";
import client6 from "../../assets/brand-logo-6.png";
import team1 from "../../assets/team-1.webp";
import team2 from "../../assets/team-2.webp";
import team3 from "../../assets/team-3.webp";

const About = () => {
    const [quote, setQuote] = useState(
        '"Sản phẩm chất lượng với giá cả tuyệt vời, mang đến sự kết hợp hoàn hảo giữa tiết kiệm và xuất sắc. Mỗi sản phẩm đều đảm bảo giá trị vượt trội."'
    )

  return (
    <>
        {/* About Header */}
        <section className="about-glowing-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-md-start text-center">
                        <p className="text-uppercase text-muted small-mb-2">Giới thiệu</p>
                        <h1 className="fw-bold display-5">Về Glowing</h1>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-5">
            <div className="container text-center mb-5">
                <img src={head} alt="" />
                <h2 className="fw-bold">
                    Chúng tôi luôn sống với sự đồng cảm, <br /> tử tế và thấu hiểu
                </h2>
                <p className="text-muted mx-auto" style={{ maxWidth:'600px' }}>
                    Nhiều loại quần denim co giãn ngoài kia thực chất chỉ là quần thể thao - chúng bị giãn và mất dáng. Không ổn chút nào. Chất vải dệt chặt của chúng tôi giữ form sau nhiều lần mặc. Ngoài ra, Aldays có thể mặc đi chơi hay đi làm đều phù hợp. Bạn hiểu ý chứ?
                </p>
            </div>

            <div className="container mb-5">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0 about-img1">
                        <img src={about1} alt="Face" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="fw-bold">Cho làn da bạn luôn rạng rỡ khỏe mạnh</h4>
                        <p className="text-muted">
                            Nuôi dưỡng làn da bạn với độ ẩm rạng rỡ. Các sản phẩm chăm sóc da của chúng tôi được tạo nên từ những thành phần cao cấp giúp cân bằng, tăng cường độ sáng và giữ cho làn da luôn khỏe mạnh mỗi ngày. Trải nghiệm sự kết hợp hoàn hảo giữa dưỡng chất và sự sang trọng cho vẻ ngoài tự nhiên rạng rỡ.
                        </p>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row align-items-center flex-md-row-reverse">
                    <div className="col-md-6 mb-4 mb-md-0 about-img1">
                        <img src={about2} alt="Products" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="fw-bold">Sứ mệnh của chúng tôi</h4>
                        <p className="text-muted">
                            Chúng tôi tin vào làn da khỏe mạnh, rạng rỡ cho tất cả mọi người. Sản phẩm của chúng tôi được chế tạo tỉ mỉ với thành phần chất lượng cao để nuôi dưỡng, bảo vệ và tôn lên vẻ đẹp tự nhiên—bởi vì sự tự tin bắt đầu từ làn da tuyệt vời. Trải nghiệm sự kết hợp hoàn hảo giữa khoa học và thiên nhiên cho làn da thực sự thay đổi.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Interactive Client Logos Section */}
        <section className="container-fluid bg-light">
            <div className="container py-5 text-center">
                <div className="mx-auto" style={{ maxWidth:'800px' }}>
                    <p className="fs-4 mb-4 fw-bold">{quote}</p>
                </div>

                <div className="row justify-content-center align-items-center mt-5 gy-4">
                    <div 
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                        onClick={() => setQuote(
                            '"Sản phẩm chất lượng với giá cả tuyệt vời, mang đến sự kết hợp hoàn hảo giữa tiết kiệm và xuất sắc. Mỗi sản phẩm đều đảm bảo giá trị vượt trội."'
                        )}
                        style={{ cursor:'pointer' }}
                    >
                        <img src={client1} alt="Grand Golden Gallery" className="img-fluid" style={{ maxHeight:'60px', objectFit:'contain' }} />
                    </div>
                    <div 
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                        onClick={() => setQuote(
                            '"Dịch vụ làm đẹp tuyệt vời! Trải nghiệm thực sự tuyệt vời, tôi cảm thấy tự tin và rạng rỡ hơn sau mỗi lần ghé thăm."'
                        )}
                        style={{ cursor:'pointer' }}
                    >
                        <img src={client2} alt="Parker & Co" className="img-fluid" style={{ maxHeight:'60px', objectFit:'contain' }} />
                    </div>
                    <div 
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                        onClick={() => setQuote(
                            '"Sản phẩm tuyệt vời. Kết quả thay đổi rõ rệt về kết cấu, da mặt tôi căng mọng và khỏe mạnh. Rất đáng để thử!"'
                        )}
                        style={{ cursor:'pointer' }}
                    >
                        <img src={client3} alt="The Beast 1999" className="img-fluid" style={{ maxHeight:'60px', objectFit:'contain' }} />
                    </div>
                    <div 
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                        onClick={() => setQuote(
                            '"Sản phẩm chất lượng với giá cả tuyệt vời, mang đến sự kết hợp hoàn hảo giữa tiết kiệm và xuất sắc. Mỗi sản phẩm đều đảm bảo giá trị vượt trội."'
                        )}
                        style={{ cursor:'pointer' }}
                    >
                        <img src={client4} alt="The Hayden" className="img-fluid" style={{ maxHeight:'60px', objectFit:'contain' }} />
                    </div>
                    <div 
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                        onClick={() => setQuote(
                            '"Dịch vụ làm đẹp tuyệt vời! Trải nghiệm thực sự tuyệt vời, tôi cảm thấy tự tin và rạng rỡ hơn sau mỗi lần ghé thăm."'
                        )}
                        style={{ cursor:'pointer' }}
                    >
                        <img src={client5} alt="Good Mood" className="img-fluid" style={{ maxHeight:'60px', objectFit:'contain' }} />
                    </div>
                    <div 
                        className="col-6 col-sm-4 col-md-2 d-flex justify-content-center brands-img"
                        onClick={() => setQuote(
                            '"Sản phẩm tuyệt vời. Kết quả thay đổi rõ rệt về kết cấu, da mặt tôi căng mọng và khỏe mạnh. Rất đáng để thử!"'
                        )}
                        style={{ cursor:'pointer' }}
                    >
                        <img src={client6} alt="Goodness" className="img-fluid" style={{ maxHeight:'60px', objectFit:'contain' }} />
                    </div>
                </div>
            </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
            <h2 className="team-title">
                Chúng tôi tự hào có đội ngũ chuyên gia giàu kinh nghiệm
            </h2>

            <div className="team-row">
                <div className="team-member">
                    <div className="team-image-wrapper">
                        <img src={team1} alt="" className="team-image" />
                        <div className="team-social">
                            <a href="#"><i className="ri-instagram-line"></i></a>
                            <a href="#"><i className="ri-twitter-line"></i></a>
                            <a href="#"><i className="ri-facebook-line"></i></a>
                            <a href="#"><i className="ri-youtube-line"></i></a>
                        </div>
                    </div>
                    <h3 className="team-name">Ho Duc Hoang Quan</h3>
                    <p className="team-role">- Nhà sáng lập, Giám đốc sáng tạo</p>
                </div>
                <div className="team-member">
                    <div className="team-image-wrapper">
                        <img src={team2} alt="" className="team-image" />
                        <div className="team-social">
                            <a href="#"><i className="ri-instagram-line"></i></a>
                            <a href="#"><i className="ri-twitter-line"></i></a>
                            <a href="#"><i className="ri-facebook-line"></i></a>
                            <a href="#"><i className="ri-youtube-line"></i></a>
                        </div>
                    </div>
                    <h3 className="team-name">Ho Duc Hoang Quan</h3>
                    <p className="team-role">- Nhà sáng lập, Giám đốc sáng tạo</p>
                </div>
                <div className="team-member">
                    <div className="team-image-wrapper">
                        <img src={team3} alt="" className="team-image" />
                        <div className="team-social">
                            <a href="#"><i className="ri-instagram-line"></i></a>
                            <a href="#"><i className="ri-twitter-line"></i></a>
                            <a href="#"><i className="ri-facebook-line"></i></a>
                            <a href="#"><i className="ri-youtube-line"></i></a>
                        </div>
                    </div>
                    <h3 className="team-name">Ho Duc Hoang Quan</h3>
                    <p className="team-role">- Nhà sáng lập, Giám đốc sáng tạo</p>
                </div>
            </div>
        </section>
    </>
  );
}

export default About;
