import './style.css';
import logo from '../../../../assets/img/logo.svg'
function Header() {

    return(
        <div className="header">
            <div class="wrapper">
                    <div className="row">
                        <div className="col-1 v-center-h-left">
                            <a href="#"><img width="64" src={logo} alt="thos"/></a>
                        </div>
                        <div className="col-1 v-center-h-right">
                            <ul className="menu-list">
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#shop">Shop</a></li>
                                <li><a href="#instagram">About</a></li>
                                <li><a href="#footer">Contact</a></li>
                                <li><i class="fa-solid fa-bag-shopping"></i><a href="#">Shopping bag &#40;0&#41;</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        </div>

    )
}
export default Header;