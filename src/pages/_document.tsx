import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900&display=optiona"
					rel="stylesheet"
				/>
				<link
					rel="shortcut icon"
					type="image/png"
					href="/images/favicon-4x.png"
				/>
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
