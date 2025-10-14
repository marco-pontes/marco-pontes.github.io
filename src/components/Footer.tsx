import reactLogo from "../assets/images/react.svg";
import logoGreenSmall1x from "../assets/images/logo-side-yellow-1x.png";
import logoGreenSmall2x from "../assets/images/logo-side-yellow-2x.png";
import logoWhite1x from "../assets/images/vivid-white-1x.png";
import logoWhite2x from "../assets/images/vivid-white-2x.png";

import viteLogo from "/vite.svg";
import type { FunctionComponent } from "@/types/types.ts";

export const Footer = (): FunctionComponent => {
	return (
		<footer className="footer">
			<div className="footer__logo-box">
				<picture className="footer__logo">
					<source
						media="(max-width: 37.5em)"
						srcSet={`${logoGreenSmall1x} 1x, ${logoGreenSmall2x} 2x`}
					/>
					<img
						alt="Full logo"
						className="footer__logo"
						src={logoWhite2x}
						srcSet={`${logoWhite1x} 1x, ${logoWhite2x} 2x`}
					/>
				</picture>
				<div>
					<a href="https://vite.dev" target="_blank">
						<img alt="Vite logo" className="tech-logos" src={viteLogo} />
					</a>
					<a href="https://react.dev" target="_blank">
						<img alt="React logo" className="tech-logos" src={reactLogo} />
					</a>
				</div>
			</div>
			<div className="row">
				<div className="col-1-of-2">
					<div className="footer__navigation">
						<ul className="footer__list">
							<li className="footer__item">
								<a className="footer__link" href="#">
									Company
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link" href="#">
									Contact us
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link" href="#">
									Careers
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link" href="#">
									Privacy policy
								</a>
							</li>
							<li className="footer__item">
								<a className="footer__link" href="#">
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-1-of-2">
					<p className="footer__copyright">
						Built by
						<a className="footer__link" href="https://github.com/marco-pontes/">
							Marco Pontes
						</a>{" "}
						for practicing
						<a
							className="footer__link"
							href="https://github.com/marco-pontes/advanced-css-practice"
						>
							CSS
						</a>
						. Copyright &copy; by
						<a
							className="footer__link"
							href="https://github.com/jonasschmedtmann"
						>
							Jonas Schmedtmann
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
};
