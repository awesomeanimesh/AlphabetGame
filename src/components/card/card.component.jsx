import './card.styles.css';
const Card=({display, stylingClass})=>{
  

    return(
        <div className="display-card">
      <div className={`output ${stylingClass === 'Success'? 'success': stylingClass === 'Failure'? 'failure' : ''}`}>{display}</div>
        </div>
        
    );
}

export default Card;