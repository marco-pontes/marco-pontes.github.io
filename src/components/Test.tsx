import { LazyImageLoad } from "@/components/ui/LazyImageLoad.tsx";
import type { ReactElement } from "react";

export const Test = (): ReactElement => {
	const placeholderImages = [
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
		"https://placehold.co/400x400/000000/FFFFFF/png",
	];

	return (
		<>
			{/*{state.name}*/}
			<button
				onClick={() => {
					// dispatch({ type: "UPDATE_ACTION", payload: { name: "Marco" } });
				}}
			>
				AAaaaaaaa
			</button>
			{placeholderImages.map((image) => (
				<LazyImageLoad imageUrl={image} />
			))}
		</>
	);
};
