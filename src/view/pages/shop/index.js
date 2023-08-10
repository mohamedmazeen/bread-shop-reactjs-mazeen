import book from '../../../assets/img/book.png';
import Button from '../../components/button/index';
import './style.css';

function Shop() {

    return(

        <div id="shop" className="shop">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-1">
                            <h2 className="shop-title">It's official: The<br/>best of Thos</h2>
                            <p className="shop-subtitle">You asked, we delivered. Thos&#697; best 100 recipes are<br/>now available as a hardback and we deliver<br/>worldwide!</p>
                            <Button title="Go to shop"/>
                        </div>
                        <div className="col-1">
                            <img width="495" src={book} alt='book'/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Shop;