import buns from '../../../assets/img/hot-cross-buns.png';
import snacks from '../../../assets/img/healthy-snacks.png';
import pears from '../../../assets/img/pear-desserts.png';
import sourdough from '../../../assets/img/sourdough.png';
import Button from '../../components/button/index';
import Title from '../../components/title';
import Card from '../../components/card';
import './style.css';

function Blog() {

    return(
            
        <div id="blog" className="blog">
                <div className="wrapper">
                    <Title/>
                    <div className="row ptb-30">
                        <div className="col-1 v-center-h-left">
                            <Card pic={buns} title="Hot-cross buns and Eastern fun" subtitle="If you thought Easter was all about chocolate, you're badly mistaken"/>
                        </div>
                        <div className="col-1 v-center-h-right">
                            <Card pic={snacks} title="Tasty and  healthy snacks for the road" subtitle="Finding snacks that keep well and taste good is sometimes tricky"/>
                        </div> 
                    </div>
                    <div className="row ptb-30">
                        <div className="col-1">
                            <Card pic={pears} title="My first attempt at making pear desserts" subtitle="Growing up, I always associated pears with fruit salad and nothing else."/>
                        </div>
                        <div className="col-1 v-center-h-right">
                            <Card pic={sourdough} title="Sourdough baking 101" subtitle="I actually jumped on the sourdough bandwagon way back in middle school."/>
                        </div> 
                    </div>
                    <div className="row">
                        <div class="col-1 vh-center pt-25">
                    <Button title="More articles"/>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Blog;