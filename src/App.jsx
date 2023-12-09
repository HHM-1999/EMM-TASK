import { useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider } from 'react-router-dom';
import { routes } from './Route/Routes';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'



var scrollBtn
function App() {

  const element = <FontAwesomeIcon icon={faArrowUp} />
  
  const scrollTop = (e) => {
    if (!e.ctrlKey) {
        setTimeout(function () {
            window.scrollTo({ top: 0, behavior: 'auto' });
        }, 100);
    }
};
  useEffect(() => {
    window.addEventListener('scroll', scrollToTopBtn);
    scrollBtn = document.querySelector("#back_to_top");
  }, [])

  function scrollToTopBtn() {
    if (window.scrollY > 150) {
      scrollBtn.style.visibility = "visible";
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.visibility = "hidden";
      scrollBtn.style.display = "none";
    }
  }

  return (
    <>
      <div>
      <div id="back_to_top" style={{ visibility: "hidden" }} onClick={scrollTop} className="back_to_top on d-print-none"><span className="go_up">{element}</span></div>
      <RouterProvider router={routes} />
      </div>
    
    </>
  )
}

export default App
