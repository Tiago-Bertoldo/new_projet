import "./style/desktop.scss";
import "./style/mobile.scss";
import  logo from './assets/logo-tiago.png'
import 'animate.css';


export default function Page1() {
	return (
		<>
			<div className="home-page-container">
				<div className="home-box"></div>
                <div className="home-page-container__section">
                    <div className="home-page-container__section--text">
                       <p className="machine-write">I'm Tiago</p>
                        <p  >Front End Développeur & Intégrateur Web</p>
                        <p>Fan inconditionnel du code et fasciné par la magie qu'il produit.</p>
                    </div>
                    <div className="home-page-container__section--img">
                        <img src={logo} alt="" />
                    </div>
                </div>
			</div>
		</>
	);
}
