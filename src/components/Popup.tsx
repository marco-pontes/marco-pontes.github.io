import type { FunctionComponent } from "@/types/types.ts";

export const Modal = (): FunctionComponent => {
	return (
		<div className="popup" id="popup">
			<div className="popup__content">
				<div className="popup__left">
					<img
						alt="Tour photo"
						className="popup__img"
						src="src/assets/images/nat-8.jpg"
					/>
					<img
						alt="Tour photo"
						className="popup__img"
						src="src/assets/images/nat-9.jpg"
					/>
				</div>
				<div className="popup__right">
					<a className="popup__close" href="#section-tours">
						&times;
					</a>
					<h2 className="heading_secondary u-margin-bottom-small">
						Start booking now
					</h2>
					<h3 className="heading-tertiary u-margin-bottom-small">
						Important &ndash; Please read these terms before booking
					</h3>
					<p className="popup__text">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
						amet consectetur debitis dicta distinctio dolores eius, error facere
						facilis inventore magni necessitatibus nulla officia omnis pariatur
						possimus quae rerum sequi. Lorem ipsum dolor sit amet, consectetur
						adipisicing elit. Ab aliquam dicta fuga in incidunt omnis ullam
						voluptatum! Asperiores beatae eos inventore obcaecati officiis
						omnis, quia quisquam quos, sed veniam vero. Lorem ipsum dolor sit
						amet, consectetur adipisicing elit.
					</p>
					<a className="btn btn--green" href="#">
						Book now
					</a>
				</div>
			</div>
		</div>
	);
};
