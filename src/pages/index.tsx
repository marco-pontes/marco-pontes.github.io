import Header from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { About } from "@/components/About";
import { SectionFeatures } from "@/components/SectionFeatures";
import { Stories } from "@/components/Stories";
import { Tours } from "@/components/Tours";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Modal } from "@/components/Popup";

export default function Home() {
	//const t = useTranslations("Index");
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
}
