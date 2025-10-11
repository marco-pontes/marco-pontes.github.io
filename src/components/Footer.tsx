import reactLogo from "../assets/images/react.svg";
import viteLogo from "/vite.svg";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__logo-box">
				<picture className="footer__logo">
					<source
						srcSet="src/assets/images/logo-green-small-1x.png 1x, src/assets/images/logo-green-small-2x.png 2x"
						media="(max-width: 37.5em)"
					/>
					<img
						srcSet="src/assets/images/logo-green-1x.png 1x, src/assets/images/logo-green-2x.png 2x"
						alt="Full logo"
						className="footer__logo"
						src="src/assets/images/logo-green-2x.png"
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
