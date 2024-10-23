import Header from "@/components/header";
import PasswordForm from "@/components/password-form";
import PasswordList from "@/components/password-list";
import { Metadata } from "next";
export const metadata: Metadata = {
	title: "Генератор",
};

const PasswordGenerator = () => {
	return (
		<div className="bg-gray-100 min-h-screen">
			<Header />
			<div className="flex justify-center mt-20">
				<div className="flex flex-col bg-white p-8 rounded shadow-lg w-[60%]">
					<PasswordForm />
					<PasswordList />
				</div>
			</div>
		</div>
	);
};

export default PasswordGenerator;
