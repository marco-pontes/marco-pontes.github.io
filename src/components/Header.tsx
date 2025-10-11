export const Header = () => {
	return (
		<header className="header">
			<div className="header__logo-box">
				<img
					src="src/assets/images/logo-white.png"
					alt="Logo"
					className="header__logo"
				/>
			</div>
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary&#45;&#45;main">Viva Pixel</span>
					<span className="heading-primary&#45;&#45;sub">
						is where life happens
					</span>
				</h1>
				<a
					href="#section-tours"
					className="btn btn&#45;&#45;white btn&#45;&#45;animated"
				>
					Discover our software
				</a>
			</div>
		</header>
	);
};
