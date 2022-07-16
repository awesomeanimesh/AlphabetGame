import "./button.styles.css";
const Button=({onClickHandler,type})=>{
    return(
        <button
        className="reset-button"
        onClick={onClickHandler}
        type={type}
        >
        Reset    
        </button>
        );
    }


export default Button;
//<button type="reset" data-testid="resetButton" className="outline danger" value={'reset'} onClick={handleReset}>Reset</button>