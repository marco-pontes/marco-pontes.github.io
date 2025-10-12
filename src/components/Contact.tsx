import type { FunctionComponent } from "@/types/types.ts";

export const Contact = (): FunctionComponent => {
	return (
		<section className="section-book">
			<div className="row">
				<div className="book">
					<div className="book__form">
						<form action="#" className="form">
							<div className="u-margin-bottom-medium">
								<h2 className="heading-secondary">Start booking now</h2>
							</div>
							<div className="form__group">
								<input
									required
									className="form__input"
									id="name"
									placeholder="Full name"
									type="text"
								/>
								<label className="form__label" htmlFor="name">
									Full name
								</label>
							</div>

							<div className="form__group">
								<input
									required
									className="form__input"
									id="email"
									placeholder="Email address"
									type="email"
								/>
								<label className="form__label" htmlFor="email">
									Email address
								</label>
							</div>

							<div className="form__group u-margin-bottom-medium">
								<div className="form__radio-group">
									<input
										className="form__radio-input"
										id="small"
										name="size"
										type="radio"
									/>
									<label className="form__radio-label" htmlFor="small">
										<span className="form__radio-button"></span>
										Small tour group
									</label>
								</div>
								<div className="form__radio-group">
									<input
										className="form__radio-input"
										id="large"
										name="size"
										type="radio"
									/>
									<label className="form__radio-label" htmlFor="large">
										<span className="form__radio-button"></span>
										Large tour group
									</label>
								</div>
							</div>
							<div className="form__group">
								<button className="btn btn--green">Next step &rarr;</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
