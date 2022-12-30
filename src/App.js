import logo from './logo.svg';
import './App.css';
import {motion} from "framer-motion"
import {useRef, useEffect, useState} from "react"
import data from "./data"

function App() {
  //console.log(data)
  const [width,setwidth] = useState(0);
  const carousel = useRef();

  useEffect(()=>{
    //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },[width])

  return (
    <div className="App">
      <h1>Image Carousel</h1>
      <motion.div ref={carousel} className='carousel' whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" 
         dragConstraints={{right: 0, left: -width }}
         className='inner-carousel'>
            {
              data.map((e)=>{
                return (
                  <motion.div 
                  className='item'       
                  initial={{ opacity: 0, scale: 0.3 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}>
                  <motion.div className='card'>
                  <motion.img src={e.img}></motion.img>
                      <p>{e.title}</p>
                      <p>{e.price}</p>
                    
                  </motion.div>                
                  </motion.div>
                )
              })
            }
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
