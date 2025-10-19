import Image from "next/image";
import React from "react";
import { FunctionComponent } from "@/types/types";

export const Header = (): FunctionComponent => {
	return (
		<header className="header">
			<div className="header__logo-box">
				<Image
					className="header__logo"
					src="/images/logo-4x.png"
					width={37}
					height={35}
					alt="Logo"
					priority
				/>
			</div>
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">
						<Image
							alt="Full logo"
							src="/images/marco-aurelio-4x.png"
							width={500}
							height={150}
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
