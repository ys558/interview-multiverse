import { useState, useEffect } from 'react';
import NavMenu from '../widgets/NavMenu';
import './Header.scss'
import Logo from '../widgets/Logo'
  
const HamburgerMenu = () => {  
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {  
    if (!isOpen) {  
      const timer = setTimeout(() => {
        const offScreenMenu = document.querySelector('.off-screen-menu')!
        offScreenMenu.classList.remove('active');  
      }, 3000); // 设置一个延时，确保所有li都fade out后才关闭菜单  
  
      return () => clearTimeout(timer); // 清除定时器，防止在组件卸载后仍然执行  
    }  
  }, [isOpen]); 
  
  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
  };  
  
  return (  
    <header className="header-container">
      <Logo/>
      <NavMenu/>
      <div
        className={`ham-menu ${isOpen ? 'active' : ''}`}  
        onClick={toggleMenu}
      >
        <span></span>  
        <span></span>  
        <span></span>  
      </div> 
      <div  
        className={`off-screen-menu ${isOpen ? 'active' : ''}`}  
      >  
        <ul>  
          <li>INTRODUCTION FEE</li>  
          <li>FEED APP</li>  
          <li>MEET THE TEAM</li>  
          <li>SCHEDULE A MEETING</li>  
          <li>SET THE LIVE PROTOTYPE</li>  
        </ul>  
      </div> 
    </header>  
  );  
};  
  
export default HamburgerMenu;