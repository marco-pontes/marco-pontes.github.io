import { LazyImageLoader } from "@/components/ui/LazyListComponent";
import React, { MouseEventHandler } from "react";

export const Tests = () => {
	const { name, dispatch } = {
		name: "",
		dispatch: (a: Record<string, string>) => {
			console.log(a);
		},
	}; //useAppContext();
	const images = [
		{ id: 1, url: "https://placehold.co/400x400/000000/FFFFFF/png" },
		{ id: 2, url: "https://placehold.co/400x400/eee/FFFFFF/png" },
		{ id: 3, url: "https://placehold.co/400x400/ddd/FFFFFF/png" },
		{ id: 4, url: "https://placehold.co/400x400/ccc/FFFFFF/png" },
		{ id: 5, url: "https://placehold.co/400x400/bbb/FFFFFF/png" },
		{ id: 6, url: "https://placehold.co/400x400/aaa/FFFFFF/png" },
		{ id: 7, url: "https://placehold.co/400x400/999/FFFFFF/png" },
		{ id: 8, url: "https://placehold.co/400x400/888/FFFFFF/png" },
		{ id: 9, url: "https://placehold.co/400x400/777/FFFFFF/png" },
	];

	const handleClick = (n: number): MouseEventHandler<HTMLButtonElement> => {
		return (event) => {
			console.log(event);
			console.log(n);
			dispatch({ type: "TEST" });
		};
	};
	return (
		<>
			{name}
			<button onClick={handleClick(1)}>AAAAAAAA</button>
			{images.map((image) => (
				<LazyImageLoader src={image.url} key={image.id} />
			))}
		</>
	);
};
