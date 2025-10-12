import "./App.css";
import { NavBar } from "./components/NavBar.tsx";
import { About } from "./components/About.tsx";
//import { Header } from "./components/Header.tsx";
import { SectionFeatures } from "./components/SectionFeatures.tsx";
import { Tours } from "./components/Tours.tsx";
import { Stories } from "./components/Stories.tsx";
import { Contact } from "./components/Contact.tsx";
import { Footer } from "./components/Footer.tsx";
import { Modal } from "./components/Popup.tsx";
import type { FunctionComponent } from "@/types/types.ts";
import { lazy } from "react";

const Header = lazy(() => import("./components/Header.tsx"));

const App = (): FunctionComponent => {
	return (
		<>
			<NavBar></NavBar>
			<Header></Header>
			<main>
				<About></About>
				<SectionFeatures></SectionFeatures>
				<Tours></Tours>
				<Stories></Stories>
				<Contact></Contact>
			</main>
			<Footer></Footer>
			<Modal></Modal>
		</>
	);
};

export default App;
