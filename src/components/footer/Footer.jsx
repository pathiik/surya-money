export default function Footer() {

    return (
        <footer className="footer-sec">
            <div className="footer-top">
                <div className="container-2">
                    <div className="footer-top-wrapper">
                        <div className="footer-top-up">
                            <img src="assets/footerAssets/logo.svg" alt="Logo" />
                            <p>Surya</p>
                        </div>
                        <div className="footer-top-down">
                            <div className="footer-t-d-box">
                                <h4>Owner</h4>
                                <ul>
                                    <li>Pathik Bhattarai</li>
                                    <li><a href="tel:+977-9746850018">+977-9746850018</a></li>
                                    <li><a href="mailto:pathik.b45@gmail.com">pathik.b45@gmail.com</a></li>
                                    <li>Address: Biratnagar, Nepal</li>
                                </ul>
                            </div>
                            <div className="footer-t-d-box">
                                <h4>Policy</h4>
                                <ul>
                                    <li><a href="#">Privacy Policies</a></li>
                                    <li><a href="#">Information Security Policy</a></li>
                                    <li><a href="#">Terms & Conditions</a></li>
                                    <li><a href="#">Report Fraud / Misuse of Account</a></li>
                                    <li><a href="#">Transaction Limit</a></li>
                                </ul>
                            </div>
                            <div className="footer-t-d-box">
                                <h4>Partners</h4>
                                <ul>
                                    <li><a href="#">Banks</a></li>
                                    <li><a href="#">Western Union</a></li>
                                    <li><a href="#">Agent</a></li>
                                </ul>
                            </div>
                            <div className="footer-t-d-box">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Career</a></li>
                                    <li><a href="#">Blogs / News</a></li>
                                    <li><a href="#">Developer's Guide</a></li>
                                    <li><a href="#">FAQ's</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container-2">
                    <div className="footer-bottom-wrapper">
                        <p>&copy;2020-2023 All Rights Reserved</p>
                        <div>
                            <a href="#"><i class="fa-brands fa-facebook" style={{ color: '#4267b2' }}></i></a>
                            <a href="#"><i class="fa-brands fa-instagram" style={{ color: '#ff244c' }}></i></a>
                            <a href="#"><i class="fa-brands fa-youtube" style={{ color: '#ff0000' }}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}