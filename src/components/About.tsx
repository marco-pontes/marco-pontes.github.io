import type { FunctionComponent } from "@/types/types.ts";
import Image from "next/image";
import { memo } from "react";

export const About = memo(function About(): FunctionComponent {
	console.count("About Renders");

	return (
		<section className="section-about">
			<div className="u-center-text u-margin-bottom-big">
				<h2 className="heading-secondary">
					Exciting tours for adventurous people
				</h2>
			</div>

			<div className="row">
				<div className="col-1-of-2">
					<h3 className="heading-tertiary u-margin-bottom-small">
						Youre going to fall in love with nature
					</h3>
					<p className="paragraph">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
						dignissimos id nisi quaerat quibusdam quis reiciendis. Eos ex harum
						ipsam, labore molestias temporibus voluptatibus. Aliquid aperiam
						exercitationem minima neque obcaecati.
					</p>

					<h3 className="heading-tertiary u-margin-bottom-small">
						Live adventures like you never have before
					</h3>
					<p className="paragraph">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Accusantium adipisci aperiam dignissimos harum, id incidunt,
						inventore labore!
					</p>

					<a className="btn-text" href="#">
						Learn more &rarr;
					</a>
				</div>
				<div className="col-1-of-2">
					<div className="composition">
						<Image
							alt="Photo 1"
							className="composition__photo composition__photo--p1"
							sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
							src="/images/nat-1-large.jpg"
							width={200}
							height={200}
						/>
						<Image
							alt="Photo 2"
							className="composition__photo composition__photo--p2"
							sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
							src="/images/nat-2-large.jpg"
							width={200}
							height={200}
						/>
						<Image
							alt="Photo 3"
							className="composition__photo composition__photo--p3"
							sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
							src="/images/nat-3-large.jpg"
							width={200}
							height={200}
						/>
					</div>
				</div>
			</div>
		</section>
	);
});
