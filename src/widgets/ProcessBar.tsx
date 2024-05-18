import { useState, useEffect } from 'react';  
import './ProcessBar.scss';  
  
const ProgressBar = () => {  
  const [progress, setProgress] = useState(0);  
  
  useEffect(() => {  
    const handleWheel = (event: WheelEvent) => {  
      event.preventDefault();  
      const step = event.deltaY < 0 ? -1 : 1;  
      setProgress(Math.max(0, Math.min(100, progress + step)));  
    };  
  
    window.addEventListener('wheel', handleWheel, { passive: false });  
    
    return () => {  
      window.removeEventListener('wheel', handleWheel);  
    };  
  }, [progress]); 
  
  
  return (  
    <div className="progress-bar-container">  
      <div className="progress-bar" style={{ width: `${progress}%` }} />  
    </div>  
  );  
};  
  
export default ProgressBar;