import type { FunctionComponent } from "@/types/types.ts";
import Image from "next/image";
import { memo } from "react";

export const Stories = memo(function Stories(): FunctionComponent {
	//const t = useTranslations("Stories");
	console.count("Stories Renders");
	return (
		<section className="section-stories">
			<div className="bg-video">
				<video autoPlay loop muted className="bg-video__content">
					<source src="/images/video.mp4" type="video/mp4" />
					<source src="/images/video.webm" type="video/webm" />
					Your browser is not supported
				</video>
			</div>
			<div className="u-center-text u-margin-bottom-big">
				<h2 className="heading-secondary">{/*t("stories.title")*/}</h2>
			</div>
			<div className="row">
				<div className="story">
					<figure className="story__shape">
						<Image
							alt="Person on a tour"
							className="story__image"
							src="/images/nat-8.jpg"
							width={400}
							height={400}
						/>
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
						<Image
							alt="Person on a tour"
							className="story__image"
							src="/images/nat-9.jpg"
							width={400}
							height={400}
						/>
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
				<a className="btn-text" href="#">
					Read all stories &rarr;
				</a>
			</div>
		</section>
	);
});
