import { useEffect } from "react";
import "./style/desktop.scss";
import "./style/mobile.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Navegation() {
	const removeMenu = () => {
		let getNavegationMenu = document.querySelector(
			".navegation-container-section__navegation"
		);
		getNavegationMenu.classList.remove("hidden-menu");
	};

	const handleEffectHidden = e => {
		let getNavegationMenu = document.querySelector(
			".navegation-container-section__navegation"
		);
		let animationClose = document.querySelector(
			".navegation-container-section__menu-resposive"
		);
		let el = e.target;
		if (
			el.className ===
				"navegation-container-section__menu-resposive" ||
			el.className === "burguer"
		) {
			getNavegationMenu.classList.toggle("hidden-menu");
			animationClose.classList.toggle("toggle");
		}else {
            getNavegationMenu.classList.remove("hidden-menu");
			animationClose.classList.remove("toggle");
        }
	};
	return (
		<>
			<div
				className="navegation-container"
				onClick={e => handleEffectHidden(e)}
			>
				<div className="navegation-container-section">
					<div className="navegation-container-section__menu-resposive">
						<div className="burguer line1"></div>
						<div className="burguer line2"></div>
						<div className="burguer line3"></div>
					</div>
					<div className="navegation-container-section__logo">
						<a href="/">
							{" "}
							TIAGO <span>BERTOLDO</span>
						</a>
					</div>
					<div
						className="navegation-container-section__navegation"
						onClick={removeMenu}
					>
						<ul>
							<li>
								<span className="btn-page1">Home</span>
							</li>
							<li>
								<span className="btn-page2">
									À propos
								</span>
							</li>
							<li>
								<span className="btn-page3">
									Portfolio
								</span>
							</li>
							<li>
								<span className="btn-page4">
									Contact
								</span>
							</li>
						</ul>
						<div className="flow"></div>
					</div>
					<div className="navegation-container-section__social">
						<ul>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillGithub size={18} />
								</a>
							</li>
							<li>
								<a
									href="http://"
									target="_blank"
									rel="noopener noreferrer"
								>
									<AiFillLinkedin size={18} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
