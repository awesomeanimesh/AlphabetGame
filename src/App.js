import './App.css';
import {useState,useEffect} from 'react';
import Enterbox from './components/enter-box/enter-box.component';
import Button from './components/buttons/button.component';
import Card from './components/card/card.component';

function App() {
  
  
  const[alpha,setAlpha]=useState('');
  const[time,setTime]=useState(0);
  const[high,setHigh]=useState(Number.MAX_VALUE);
  const[count,setCount]=useState(0);
  const[inputField,setInputField]=useState("");
  const[result,setResult]=useState("Default");

  const[isActive,setIsActive]=useState(false);
    const[isStopped,setIsStopped]=useState(false);
  
  const alphabets='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  //render alphabets
  useEffect(()=>{
    var currentAlpha='';
    const alphaLength=alphabets.length;
    
    currentAlpha=alphabets.charAt(Math.floor(Math.random() * alphaLength));
   
  
   setAlpha(currentAlpha);
   
   
  },[count]);
  
  //set timer
   useEffect(()=>{
    var startTime = Date.now();
    let interval=null;
    if(isActive && isStopped===false)
    {
     interval = setInterval(function() {
      
        var elapsedTime = Date.now() - startTime;
        setTime((elapsedTime / 1000).toFixed(3));
      
    }, 0);
    }
    else {
      clearInterval(interval);
    }

    if(localStorage.getItem("highScore")!=null)
    setHigh(localStorage.getItem("highScore"));
    return () => {
      clearInterval(interval);
    };

  },[isActive,isStopped])
  const timer=(run)=>{
    


  }
  //check whether user entered correct input
  const check=(input)=>{
    
    let c= input.charAt(input.length-1);
    
    let temp=0;
    
  if(c===alpha)
    {
      console.log("this logic is current");
      setCount(count+1);
      
      temp=count+1;
     }
     else if(c!==alpha){
       setTime(time+0.500);
     }
     if(count+1===1)
     setIsActive(true);
     
    console.log("temp "+temp);
    if(temp===20)
    { setIsStopped(true);
        gameOver();
    }

     

  }
  //when user gives input
  const onInputChange= (e)=>{
   // console.log(e.target.value);

    let input=e.target.value.toLocaleUpperCase();
    setInputField(input);
    console.log("user input"+input);
     check(input);
     
     

  }
  //when user enters correct 20 alphabets
  const gameOver=()=>{
   // console.log("high"+high);
    if(time<high)
    { localStorage.setItem("highScore",time);
      setHigh(time);
      setResult("Success");
    }
    else{
      setResult("Failure")
    }
  }
  const handleReset=()=>{
    setIsActive(false);
  setIsStopped(false);
  setTime(0);
  setCount(0);
  setInputField("");
  setResult("Default");
  

  }

 

  const displayContent=()=>{
    if(count===20)
    {
      if(time)
      setAlpha()
    }
 
   }
  return (
    <div className="App">
      <h2 className='app-title'>Type the alphabet</h2>
      <p className='app-description'>Typing game to see how fast you type.</p>
      <p className="app-description">Timer starts when you do :)</p>
      

      <Card
        display={count<20?alpha:result} stylingClass={result}
      />

      <p><span>Time: {time}</span></p>
      {/* <p>{count}</p> */}
      <p>my best time: {!localStorage.getItem("highScore") ? (
        // render 1st time played view
        <span>
          Not available!
        </span>
      ):(
        //render more than once played player view
        <span>
        {Math.trunc(high*100)/100}s!
        </span>
      )}</p>


      
    
    <Enterbox
     placeholder="Type here"
     onChangeHandler={onInputChange}
     disableHandler={count>=20}
     value={inputField}
    />  
     <Button
     onClickHandler={handleReset}
     type="reset"
     />
    

           

    </div>
  );
}

export default App;
