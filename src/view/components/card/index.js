function Card(props) {

    return(
        <a href="#">
                            <img width="575" height="340" src={props.pic}/>
                            <h3>{props.title}</h3>
                            <p>{props.subtitle}</p>
                            <p>6/10/2021 &#183; 1 min read</p>
                            </a>
    )
}

export default Card;