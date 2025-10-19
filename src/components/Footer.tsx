import Image from "next/image";
import React from "react";
import { FunctionComponent } from "@/types/types";

export const Footer = (): FunctionComponent => {
	return (
		<footer className="footer">
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					gap: "20px",
					width: "959px",
					flexWrap: "wrap",
				}}
			></div>
			<div className="footer__logo-box">
				<picture className="footer__logo">
					<source
						media="(max-width: 37.5em)"
						srcSet={`/images/logo-side-1x.png 1x, /images/logo-side-2x.png 2x`}
					/>
					<Image
						alt="Full logo"
						className="footer__logo"
						src="/images/marco-logo-white-4x.png"
						width={200}
						height={200}
					/>
				</picture>
				<div>
					<a href="https://vite.dev" target="_blank">
						<Image
							alt="Vite logo"
							className="tech-logos"
							src="/images/vite.svg"
							width={36}
							height={32}
						/>
					</a>
					<a href="https://react.dev" target="_blank">
						<Image
							alt="React logo"
							className="tech-logos"
							src="images/react.svg"
							width={36}
							height={32}
						/>
					</a>
					<a href="https://nextjs.org/" target="_blank">
						<Image
							alt="Next logo"
							className="tech-logos"
							src="images/next.svg"
							width={36}
							height={32}
						/>
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
