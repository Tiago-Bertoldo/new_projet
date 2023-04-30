import { useEffect, useState } from "react";
import Page1 from "../../pages/home";
import Page2 from "../../pages/propos";
import Page3 from "../../pages/portfolio";
import Page4 from "../../pages/contact";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import "./style/main.scss";
import "./style/mobile.scss";
import Navegation from "../Navegation/navegation";
export default function BannerGap() {
  const [isValid, setIsValid] = useState("");
  const isPage = {
    page1: <Page1 />,
    page2: <Page2 />,
    page3: <Page3 />,
    page4: <Page4 />,
  };

  const handleClearEffect = (changeClass, getPrincipalSelector) => {
    setTimeout(() => {
      changeClass.remove("effect-change-first-page");
      getPrincipalSelector.classList.remove("effect-change-toggle");
    }, 1000);
  };

  const handleClearEffectBtn = (btn, getPrincipalSelector) => {
    setTimeout(() => {
      btn.classList.remove("effect-change-first-page");
      getPrincipalSelector.classList.remove("effect-change-toggle");
    }, 1000);
  };

  const handleChangeClass = (getPrincipalSelector, changeClass) => {
    changeClass.toggle("effect-change-first-page");
    getPrincipalSelector.classList.add("effect-change-toggle");
    handleClearEffect(changeClass, getPrincipalSelector);

  }
  const handleChageClassMenu = (getPrincipalSelector, pagePrincipal) => {
    pagePrincipal.classList.toggle("effect-change-first-page");
    getPrincipalSelector.classList.add("effect-change-toggle");
    handleClearEffectBtn(pagePrincipal, getPrincipalSelector);
  }

  const handleExecEffect = (e) => {
    let changeClass = e.target.classList;
    let getPrincipalSelector = document.querySelector(".principal");
    let getPage1 = document.querySelector(".page1");
    let getPage2 = document.querySelector(".page2");
    let getPage3 = document.querySelector(".page3");
    let getPage4 = document.querySelector(".page4");
    switch (changeClass.value) {
      case "page1":
        setIsValid(isPage.page1);
        handleChangeClass(getPrincipalSelector, changeClass)
        break;
      case "page2":
        setIsValid(isPage.page2);
        handleChangeClass(getPrincipalSelector, changeClass)
        break;
      case "page3":
        setIsValid(isPage.page3);
        handleChangeClass(getPrincipalSelector, changeClass)
        break;
      case "page4":
        setIsValid(isPage.page4);
        handleChangeClass(getPrincipalSelector, changeClass)
        break;
      case "btn-page1":
        setIsValid(isPage.page1);
        handleChageClassMenu(getPrincipalSelector, getPage1)
        break;
      case "btn-page2":
        setIsValid(isPage.page2);
        handleChageClassMenu(getPrincipalSelector, getPage2)
        break;
      case "btn-page3":
        setIsValid(isPage.page3);
        handleChageClassMenu(getPrincipalSelector, getPage3)
        break;
      case "btn-page4":
        setIsValid(isPage.page4);
        handleChageClassMenu(getPrincipalSelector, getPage4)
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div onClick={(e) => handleExecEffect(e)}>
        <Navegation />
        <div className="bloco-central">
          <div id="page1" className="page1">

          </div>
          <div id="page2" className="page2">

          </div>
          <div id="page3" className="page3">

          </div>
          <div id="page4" className="page4">

          </div>
          <div className="bloco-affiche">
            <div id="principal" className="principal">
              {isValid ? isValid : isPage.page1}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
