export const NavBar = () => {
	return (
		<div className="navigation">
			<input
				type="checkbox"
				className="navigation__checkbox"
				id="navi-toggle"
			/>
			<label htmlFor="navi-toggle" className="navigation__button">
				<span className="navigation__icon"></span>
			</label>
			<div className="navigation__background">&nbsp;</div>

			<nav className="navigation__nav">
				<ul className="navigation__list">
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							<span>01</span>About Viva{" "}
						</a>
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							<span>02</span>Technology
						</a>
					</li>
					<li className="navigation__item">
						<a href="#section-tours" className="navigation__link">
							<span>03</span>Prices
						</a>
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							<span>04</span>Clients
						</a>
					</li>
					<li className="navigation__item">
						<a href="#" className="navigation__link">
							<span>05</span>Book now
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
};
