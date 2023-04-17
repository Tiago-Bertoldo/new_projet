import { useState, useRef, useEffect } from 'react'
import Page1 from './components/page1';
import Page2 from './components/page2';
import Page3 from './components/page3';
import Navigator from './components/Navigation';
import handleChangesEffect from './functions/handleChangesEffect';
import 'animate.css';
import './value.css'

function App() {
  const [isValid, setIsValid] = useState('')
  const isPage = {
    page1: <Page1 />,
    page2: <Page2 />,
    page3: <Page3 />,
  }

  const handleClearEffect = (changeClass, getPrincipalSelector) => {
    setTimeout(() => {
      changeClass.remove('effect-change-first-page')
      getPrincipalSelector.classList.remove('effect-change-toggle')
    }, 1400);
  }

  const handleTeste = (e) => {
    let changeClass = e.target.classList
    let getPrincipalSelector = document.querySelector('.principal')
    switch (changeClass.value) {
      case 'page1':
        setIsValid(isPage.page1)
        changeClass.toggle('effect-change-first-page')
        getPrincipalSelector.classList.add('effect-change-toggle')
        handleClearEffect(changeClass, getPrincipalSelector)
        break;
      case 'page2':
        setIsValid(isPage.page2)
        changeClass.toggle('effect-change-first-page')
        getPrincipalSelector.classList.add('effect-change-toggle')
        handleClearEffect(changeClass, getPrincipalSelector)
        break;
      case 'page3':
        setIsValid(isPage.page3)
        changeClass.toggle('effect-change-first-page')
        getPrincipalSelector.classList.add('effect-change-toggle')
        handleClearEffect(changeClass, getPrincipalSelector)
        break;
      default:
        break;
    }
  }
  return (
    <>
      <nav>
          <Navigator/>
      </nav>
      <div className="bloco-central" onClick={(e) => handleTeste(e)}>
        <div id="page1" className="page1" ></div>
        <div id="page2" className="page2" ></div>
        <div id="page3" className="page3" ></div>
      <div className="bloco-affiche">
        <div id="principal" className="principal">
          {isValid ? isValid : isPage.page1}
        </div>
      </div>
      </div>
    </>
  )
}

export default App




// }