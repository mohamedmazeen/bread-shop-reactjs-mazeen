import Button from '../../../components/button/index';
import './style.css';

function Footer() {

    return(

        <div className="footer">
            <div class="wrapper">
                    <h4 className="footer-title">Subscribe to our newsletter</h4>
                    <div className="row">
                        <div className="col-1">
                            <div className="field-set">
                            <label className="field-label">Email address*</label>
                            <input className="text-field" type="email" placeholder="Your email address"/>
                            </div>
                            </div>
                    </div>
                    <div className="row">
                        <div className="col-1 vh-center">
                            <Button title="Subscribe"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1 vh-center pt-40">
                            <ul className="social-list">
                                <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
        </div>
    )
}

export default Footer;