import { ReactElement, useEffect, useRef, useState } from "react";
import Image from "next/image";

type LazyImageLoaderProps = { src: string };
export const LazyImageLoader = ({
	src,
}: LazyImageLoaderProps): ReactElement | null => {
	const [isIntersecting, setIsIntersecting] = useState(false);
	const ref = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setIsIntersecting(true);
				if (ref.current) observer.unobserve(ref.current);
			}
		});

		if (ref.current) {
			observer.observe(ref.current);
		}
		const element = ref.current;

		return () => {
			if (element) observer.unobserve(element);
		};
	}, []);

	const imgSrc = isIntersecting
		? src
		: "https://placehold.co/400x400/dddddd/png";

	return (
		<Image
			src={imgSrc}
			ref={ref}
			width={400}
			height={400}
			alt={"Lazy Image"}
		></Image>
	);
};
