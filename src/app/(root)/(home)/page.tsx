"use client";
import { useState, useEffect, FormEvent } from "react";
import Link from "next/link";
import { useStore } from "@/store/useStore";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const Home = () => {
	const [inputName, setInputName] = useState("");
	const setName = useStore((state) => state.setName);

	useEffect(() => {
		const savedName = localStorage.getItem("name");
		if (savedName) {
			setInputName(savedName);
			setName(savedName);
		}
	}, [setName]);

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputName.trim()) {
			localStorage.setItem("name", inputName);
			setName(inputName);
			Toastify({
				text: "Name is submited",
				duration: 2000,
				newWindow: true,
				close: true,
				gravity: "top",
				position: "right",
				stopOnFocus: true,
				style: {
					background: "green",
					color: "white",
				},
				onClick: function () {},
			}).showToast();
		}
	};

	return (
		<div>
			<div className="flex items-center justify-center min-h-screen bg-gray-100">
				<div className="bg-white p-8 rounded shadow-lg w-[60%]">
					<h1 className="text-xl font-semibold mb-4">Начать</h1>
					<form
						onSubmit={submitHandler}
						className="mb-4">
						<div className="mb-4">
							<label className="block text-gray-700">Напишите ваше имя</label>
							<input
								type="text"
								value={inputName}
								onChange={(e) => setInputName(e.target.value)}
								className="mt-2 p-2 border rounded w-full"
								placeholder="Ваше имя"
							/>
						</div>

						<div className="flex justify-end gap-4 mt-4">
							<button
								type="submit"
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
								Сохранить имя
							</button>
							<Link href="/calculator">
								<button
									type="button"
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
									Открыть калькулятор
								</button>
							</Link>
							<Link href="/password-generator">
								<button
									type="button"
									className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
									Открыть генератор
								</button>
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Home;
