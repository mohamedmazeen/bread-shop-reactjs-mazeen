import './style.css';

function Button(props) {

    return(
        <button class="primary-btn" type="button">{props.title}</button>
    )
}

export default Button;