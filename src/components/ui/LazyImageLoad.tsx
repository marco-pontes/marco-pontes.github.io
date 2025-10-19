import { useEffect, useRef, useState } from "react";

type LazyImageLoadType = React.ReactElement | null;
type LazyImageLoadProps = { imageUrl: string };
export const LazyImageLoad = ({
	imageUrl,
}: LazyImageLoadProps): LazyImageLoadType => {
	const [inViewport, setInViewPort] = useState(false);
	const ref = useRef<HTMLImageElement>(null);
	const lowQualityPlaceholder = "https://placehold.co/400x400/000000/red/png";

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					setInViewPort(true);
					console.log("Image loaded");
					if (ref.current) {
						observer.unobserve(ref.current);
					}
				}
			},
			{ rootMargin: "100px" }
		);
		if (ref.current) {
			observer.observe(ref.current);
		}

		return (): void => {
			if (ref.current) {
				observer.unobserve(ref.current);
			}
		};
	}, []);

	const source = inViewport ? imageUrl : lowQualityPlaceholder;
	return (
		<img
			ref={ref}
			alt={"Lazy loaded image"}
			src={source}
			style={{ width: "300px", height: "300px" }}
		/>
	);
};
