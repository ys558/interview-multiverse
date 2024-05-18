import { useState, useEffect, useRef } from 'react';
import './Texts.scss'
  
const ScrollAnimatedText = () => {  
  const [scrollProgress, setScrollProgress] = useState(0);  
  const textRef = useRef<HTMLDivElement>(null);  
  
  useEffect(() => {  
    const handleScroll = (event: WheelEvent) => {  
      if (event.deltaY > 0) {  
        // 滚轮向下滚动  
        setScrollProgress((prevProgress) => Math.min(prevProgress + 1, 100));  
      }  
    };  
  
    const node = textRef.current!;  
    node.addEventListener('wheel', handleScroll);  
  
    return () => {  
      node.removeEventListener('wheel', handleScroll);  
    };  
  }, []);  
  
  return (
    <>
      <div  
        className="animated-text"  
        // style={{ top: `${scrollProgress}%`, opacity: 1 - scrollProgress / 100, transform: `scale(${1 + scrollProgress / 100})` }}  
        ref={textRef}  
      >  
        这是一行滚动的字  
      </div>  
    </>
  );  
};  
  
export default ScrollAnimatedText;