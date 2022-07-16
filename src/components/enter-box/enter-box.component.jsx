import './enter-box.styles.css';
const Enterbox=({placeholder,onChangeHandler,disableHandler,value})=>{
    return(
        <input 
      className="enter-box"
      type='text'
      placeholder={placeholder}
      onChange={onChangeHandler}
      disabled={disableHandler}
      value={value}
      >
        
      </input>
    );
}

export default Enterbox;