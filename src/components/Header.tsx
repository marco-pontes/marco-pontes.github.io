import logoWhite from "../assets/images/logo-white.png";
import logoWhite1x from "../assets/images/logo-white-1x.png";
import logoWhite2x from "../assets/images/logo-white-2x.png";
import type { FunctionComponent } from "@/types/types.ts";

export const Header = (): FunctionComponent => {
	return (
		<header className="header">
			<div className="header__logo-box">
				<img alt="Logo" className="header__logo" src={logoWhite} />
			</div>
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary&#45;&#45;main">
						<img
							alt="Full logo"
							className="footer__logo"
							src={logoWhite2x}
							srcSet={`${logoWhite1x} 1x, ${logoWhite2x} 2x`}
						/>
					</span>
					<span className="heading-primary&#45;&#45;sub">
						Smart Software Development
					</span>
				</h1>
				<a
					className="btn btn&#45;&#45;white btn&#45;&#45;animated"
					href="#section-tours"
				>
					Discover our software
				</a>
			</div>
		</header>
	);
};

export default Header;
