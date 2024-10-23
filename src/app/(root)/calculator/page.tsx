import Calculator from "@/components/calc";
import Header from "@/components/header";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Калькулятор",
};
const CalculatorPage = () => {
	return (
		<div className="h-screen bg-gray-200">
			<Header />
			<Calculator />
		</div>
	);
};

export default CalculatorPage;
