import bread from '../../../assets/img/bread.png';
import coffee from '../../../assets/img/coffee.png';
import pie from '../../../assets/img/pie.png';
import waffle from '../../../assets/img/waffle.png';
import './style.css';

function Instagram() {

    return(

        <div id="instagram" className="instagram">
                <div className="wrapper">
                    <h2 className="instagram-title">Follow on Instagram &#64;Thos</h2>
                    <div className="grid-4c">
                            <img width="290" src={bread}/>   
                            <img width="290" src={coffee}/>   
                            <img width="290" src={pie}/>   
                            <img width="290" src={waffle}/>   
                    </div>
                </div>
            </div>
    )
}

export default Instagram;