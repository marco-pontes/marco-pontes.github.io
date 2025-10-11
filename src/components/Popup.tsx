export const Popup = () => {
	return (
		<div className="popup" id="popup">
			<div className="popup__content">
				<div className="popup__left">
					<img
						src="src/assets/images/nat-8.jpg"
						alt="Tour photo"
						className="popup__img"
					/>
					<img
						src="src/assets/images/nat-9.jpg"
						alt="Tour photo"
						className="popup__img"
					/>
				</div>
				<div className="popup__right">
					<a href="#section-tours" className="popup__close">
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
					<a href="#" className="btn btn--green">
						Book now
					</a>
				</div>
			</div>
		</div>
	);
};
