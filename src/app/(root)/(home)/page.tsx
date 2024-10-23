import NameForm from "@/components/name-form";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Главная",
};
const Home = () => {
	return (
		<div>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<div className="bg-white p-8 rounded shadow-lg w-[60%]">
					<h1 className="text-xl font-semibold mb-4">Начать</h1>
					<NameForm />
				</div>
			</div>
		</div>
	);
};

export default Home;
