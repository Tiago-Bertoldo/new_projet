import Page1 from '../components/page1';
import Page2 from '../components/page2';
import Page3 from '../components/page3';
import { useState } from 'react';
const handleEffectChanges = (e) => {
    const [isValid, setIsValid] = useState('')
    const isPage = {
      page1: <Page1 />,
      page2: <Page2 />,
      page3: <Page3 />,
    }
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
    return isValid
  }

  export default handleEffectChanges;