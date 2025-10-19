import type { FunctionComponent } from "@/types/types.ts";

export const NavBar = (): FunctionComponent => {
	return (
		<div className="navigation">
			<input
				className="navigation__checkbox"
				id="navi-toggle"
				type="checkbox"
			/>
			<label className="navigation__button" htmlFor="navi-toggle">
				<span className="navigation__icon"></span>
			</label>
			<div className="navigation__background">&nbsp;</div>

			<nav className="navigation__nav">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a className="navigation__link" href="#">
							<span>01</span>About Viva{" "}
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#">
							<span>02</span>Technology
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#section-tours">
							<span>03</span>Prices
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#">
							<span>04</span>Clients
						</a>
					</li>
					<li className="navigation__item">
						<a className="navigation__link" href="#">
							<span>05</span>Book now
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
