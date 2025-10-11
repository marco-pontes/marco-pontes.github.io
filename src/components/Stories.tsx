import videoMp4 from "../assets/images/video.mp4";
import videoWebm from "../assets/images/video.webm";
import nat8 from "../assets/images/nat-8.jpg";
import nat9 from "../assets/images/nat-9.jpg";

export const Stories = () => {
	return (
		<section className="section-stories">
			<div className="bg-video">
				<video className="bg-video__content" autoPlay muted loop>
					<source src={videoMp4} type="video/mp4" />
					<source src={videoWebm} type="video/webm" />
					Your browser is not supported
				</video>
			</div>
			<div className="u-center-text u-margin-bottom-big">
				<h2 className="heading-secondary">We make people genuinely happy</h2>
			</div>
			<div className="row">
				<div className="story">
					<figure className="story__shape">
						<img className="story__image" src={nat8} alt="Person on a tour" />
						<figcaption className="story__caption">Mary Smith</figcaption>
					</figure>
					<div className="story__text">
						<h3 className="heading-tertiary u-margin-bottom-small">
							I had the best week ever with my family
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at
							debitis earum eligendi ex harum nam nulla odit quae quas quibusdam
							quisquam, sunt ut. Aspernatur consectetur cupiditate delectus, eum
							illum inventore ipsam iure necessitatibus optio qui quidem
							reiciendis rem reprehenderit ullam, ut, velit.
						</p>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="story">
					<figure className="story__shape">
						<img className="story__image" src={nat9} alt="Person on a tour" />
						<figcaption className="story__caption">Jack Wilson</figcaption>
					</figure>
					<div className="story__text">
						<h3 className="heading-tertiary u-margin-bottom-small">
							WOW! My life is completely different now
						</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet at
							debitis earum eligendi ex harum nam nulla odit quae quas quibusdam
							quisquam, sunt ut. Aspernatur consectetur cupiditate delectus, eum
							illum inventore ipsam iure necessitatibus optio qui quidem
							reiciendis rem reprehenderit ullam, ut, velit.
						</p>
					</div>
				</div>
			</div>
			<div className="u-center-text u-margin-top-huge">
				<a href="#" className="btn-text">
					Read all stories &rarr;
				</a>
			</div>
		</section>
	);
};
