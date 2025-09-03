import './Footer.css';

function Footer(){

    return(
        <footer className='footer'>
            <div className="footer-container">
                <div className='footer-p'>
                    <p>GREAT SAVINGS</p>
                    <p>24HR SUPPORT</p>
                    <p>MONEYBACK GUARANTEE</p>
                </div>
                <div className="copyright-container">
                    <div>
                        <p className="contact-border">Copyright &copy: 2024</p>
                        <p className="contact-bold">Privacy Policy</p>
                    </div>
                    <p>Powered by <span className="contact-bold">AMAZAN</span></p>                    
                </div>
                <div className="social-container">
                    <a href="#">
                        <i className="fa-brands fa-facebook"></i> 
                    </a>        
                    <a href="">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="">
                        <i className="fa-brands fa-youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;