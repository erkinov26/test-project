"use client";
import { useStore } from "@/store/useStore";
import React from "react";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
const PasswordList = () => {
	const { passwordList } = useStore();

	const copyToClipboard = (password: string) => {
		navigator.clipboard
			.writeText(password)
			.then(() => {
				Toastify({
					text: "Пароль скопирован в буфер обмена!",
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
				}).showToast();
			})
			.catch((err) => {
				console.error("Ошибка при копировании: ", err);
			});
	};

	return (
		<div className="mt-4">
			<h2 className="text-lg font-semibold">Список паролей:</h2>
			<ul>
				{passwordList.map((pass, index) => (
					<li
						key={index}
						className="mt-1 p-2 border rounded bg-gray-100 flex justify-between">
						{pass}
						<button
							onClick={() => copyToClipboard(pass)}
							className="ml-2 text-blue-500">
							Копировать
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PasswordList;
