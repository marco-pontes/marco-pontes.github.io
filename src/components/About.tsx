import nat1 from "../assets/images/nat-1.jpg";
import nat1Large from "../assets/images/nat-1-large.jpg";
import nat2 from "../assets/images/nat-2.jpg";
import nat2Large from "../assets/images/nat-2-large.jpg";
import nat3 from "../assets/images/nat-3.jpg";
import nat3Large from "../assets/images/nat-3-large.jpg";
import type { FunctionComponent } from "@/types/types.ts";

export const About = (): FunctionComponent => {
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
						You're going to fall in love with nature
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
						<img
							alt="Photo 1"
							className="composition__photo composition__photo--p1"
							sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
							src={nat1Large}
							srcSet={`${nat1} 300w, ${nat1Large} 1000w`}
						/>
						<img
							alt="Photo 2"
							className="composition__photo composition__photo--p2"
							sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
							src={nat2Large}
							srcSet={`${nat2} 300w, ${nat2Large} 1000w`}
						/>
						<img
							alt="Photo 3"
							className="composition__photo composition__photo--p3"
							sizes="(max-width: 37.5em) 20vw, (max-width: 56.25em) 30vw, 300px"
							src={nat3Large}
							srcSet={`${nat3} 300w, ${nat3Large} 1000w`}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
