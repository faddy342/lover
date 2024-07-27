import { useState, useRef, useEffect } from "react";
import { motion,animate } from "framer-motion";

function App() {

  const [state, setState] = useState(true);
  const [limit, setLimit] = useState(null);
  const btnRef = useRef(null)
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  
  useEffect(() => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setLimit({
        xmin: rect.x * -1,
        xmax: windowWidth.current - rect.x - rect.width,
        ymin: rect.y * -1,
        ymax: windowHeight.current - rect.y - rect.height
      }) 
    }
  }, []);

  const changePos = () => {
    setState(false)
    const posx = Math.floor(Math.random() * (limit.xmax - limit.xmin + 1) + limit.xmin) 
    const posy = Math.floor(Math.random() * (limit.ymax - limit.ymin + 1) + limit.ymin)
    animate("#no",{y: posy, x: posx}, {duration: 0.3} )
    }
    
  const resetPos = () => {
      animate("#no",{y: 0, x: 0}, {duration: 0.3} )
      }
      
  return (
    <div className="App">
      <h1 id="reaction">{state ? "(˶ᵔ ᵕ ᵔ˶)" : "(ㅠ﹏ㅠ)"}</h1>
      <h1 id="question">9a7ba will you be my valentine?</h1>
      <div className="button-container">
        <button id="yes" onClick={() => { setState(true); resetPos() }}>{"yes <3"}</button>
        <motion.button ref={btnRef} id="no" onClick={() => { changePos() }}>{"no :("}</motion.button>
      </div>
    </div>
  );
}

export default App;
