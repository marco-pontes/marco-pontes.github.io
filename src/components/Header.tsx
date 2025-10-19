import logoWhite from "../assets/images/logo-white-4x.png";
import logoWhite1x from "../assets/images/marco-aurelio-1x.png";
import logoWhite2x from "../assets/images/marco-aurelio-4x.png";
import type { FunctionComponent } from "@/types/types.ts";

export const Header = (): FunctionComponent => {
	return (
		<header className="header">
			<div className="header__logo-box">
				<img alt="Logo" className="header__logo" src={logoWhite} />
			</div>
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">
						<img
							alt="Full logo"
							className="header__full-logo"
							src={logoWhite2x}
							srcSet={`${logoWhite1x} 1x, ${logoWhite2x} 2x`}
						/>
					</span>
					<span className="heading-primary--sub">
						Smart Software Development
					</span>
				</h1>
				<a className="btn btn--white btn--animated" href="#section-tours">
					Discover our software
				</a>
			</div>
		</header>
	);
};

export default Header;
