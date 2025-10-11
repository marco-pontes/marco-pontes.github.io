import reactLogo from "../assets/images/react.svg";
import logoGreenSmall1x from "../assets/images/logo-green-small-1x.png";
import logoGreenSmall2x from "../assets/images/logo-green-small-2x.png";
import logoGreen1x from "../assets/images/logo-green-1x.png";
import logoGreen2x from "../assets/images/logo-green-2x.png";

import viteLogo from "/vite.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__logo-box">
				<picture className="footer__logo">
					<source
						srcSet={`${logoGreenSmall1x} 1x, ${logoGreenSmall2x} 2x`}
						media="(max-width: 37.5em)"
					/>
					<img
						srcSet={`${logoGreen1x} 1x, ${logoGreen2x} 2x`}
						alt="Full logo"
						className="footer__logo"
						src={logoGreen2x}
					/>
				</picture>
				<div>
					<a href="https://vite.dev" target="_blank">
						<img src={viteLogo} className="logo" alt="Vite logo" />
					</a>
					<a href="https://react.dev" target="_blank">
						<img src={reactLogo} className="logo react" alt="React logo" />
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col-1-of-2">
					<div className="footer__navigation">
						<ul className="footer__list">
							<li className="footer__item">
								<a href="#" className="footer__link">
									Company
								</a>
							</li>
							<li className="footer__item">
								<a href="#" className="footer__link">
									Contact us
								</a>
							</li>
							<li className="footer__item">
								<a href="#" className="footer__link">
									Careers
								</a>
							</li>
							<li className="footer__item">
								<a href="#" className="footer__link">
									Privacy policy
								</a>
							</li>
							<li className="footer__item">
								<a href="#" className="footer__link">
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-1-of-2">
					<p className="footer__copyright">
						Built by
						<a href="https://github.com/marco-pontes/" className="footer__link">
							Marco Pontes
						</a>{" "}
						for practicing
						<a
							href="https://github.com/marco-pontes/advanced-css-practice"
							className="footer__link"
						>
							CSS
						</a>
						. Copyright &copy; by
						<a
							href="https://github.com/jonasschmedtmann"
							className="footer__link"
						>
							Jonas Schmedtmann
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
