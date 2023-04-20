import './style/desktop.scss'
import './style/mobile.scss'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
export default function Navegation() {
    return (
        <>
            <div className="navegation-container">
                <div className="navegation-container-section">
                    <div className="navegation-container-section__menu-resposive">
                        <div className='burguer'></div>
                        <div className='burguer'></div>
                        <div className='burguer'></div>
                    </div>
                    <div className="navegation-container-section__logo">
                            <a href="/"> TIAGO <span>BERTOLDO</span></a>
                    </div>
                    <div className="navegation-container-section__navegation">
                        <ul>
                            <li>
                                <span className="btn-page1">Home</span>
                            </li>
                            <li>
                                <span className="btn-page2">À propos</span>
                            </li>
                            <li>
                                <span className="btn-page3">Portfolio</span>
                            </li>
                            <li>
                                <span className="btn-page4">Contact</span>
                            </li>

                        </ul>
                    </div>
                    <div className="navegation-container-section__social">
                        <ul>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillGithub size={18}/></a>
                            </li>
                            <li>
                                <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size={18} /></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}
