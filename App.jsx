import { useState,useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime,setCurrentTime]=useState(new Date())
  useEffect(()=>
  {
    const timer = setInterval(()=>{
      setCurrentTime(new Date())
    },1000)
    return ()=>clearInterval(timer)
  },[])
  const formatehour = (hour)=>
  {
  return hour === 0?12 :hour>12?hour-12:hour;    
  }
  const FormateTimeWithLeadingZero=(num)=>
  {
    return num<10 ?`0${num}` : num;
  }
  const formateDate=(date)=>
  {
    const optoins ={weekday: "long",year: "numeric",month: "long",day: "numeric"}
     return date.toLocaleDateString(undefined,optoins);
  }
 return (
    <>
    <div className="digital-clock">
      <h1>Digital Clock</h1>
      <div className="time">{FormateTimeWithLeadingZero(formatehour(currentTime.getHours()))} : {FormateTimeWithLeadingZero(currentTime.getMinutes())} : {FormateTimeWithLeadingZero(currentTime.getSeconds())} {currentTime.getHours()>12?"PM":"AM"}</div>
      <div className="date">{formateDate(currentTime)}</div>
    </div>
    </>
  )
}

export default App
