"use client";

import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import Header from "@/components/header";
import { useState } from "react";

const PasswordGenerator = () => {
	const [length, setLength] = useState(8);
	const [includeUppercase, setIncludeUppercase] = useState(true);
	const [includeLowercase, setIncludeLowercase] = useState(true);
	const [includeNumbers, setIncludeNumbers] = useState(false);
	const [includeSymbols, setIncludeSymbols] = useState(false);
	const [passwordList, setPasswordList] = useState(["kjeng4awAWD"]);

	const generatePassword = () => {
		let chars = "";
		if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (includeLowercase) chars += "abcdefghijklmnopqrstuvwxyz";
		if (includeNumbers) chars += "0123456789";
		if (includeSymbols) chars += "%*{}?@#$~";

		if (chars.length === 0) return;

		let newPassword = "";
		const usedChars = new Set();

		while (newPassword.length < length) {
			const randomChar = chars[Math.floor(Math.random() * chars.length)];
			if (!usedChars.has(randomChar) || !includeSymbols) {
				newPassword += randomChar;
				usedChars.add(randomChar);
			}
		}
		Toastify({
			text: "Пароль создан!",
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
		setPasswordList((prevList) => [...prevList, newPassword]);
	};

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
					onClick: function () {},
				}).showToast();
			})
			.catch((err) => {
				console.error("Ошибка при копировании: ", err);
			});
	};

	return (
		<div className="bg-gray-100 min-h-screen">
			<Header />
			<div className="flex justify-center mt-20">
				<div className="flex justify-between bg-white p-8 rounded shadow-lg w-[60%]">
					<div>
						<h1 className="text-2xl font-semibold mb-4">Генератор паролей</h1>
						<label className="block text-gray-700">Длина пароля:</label>
						<input
							type="number"
							value={length}
							onChange={(e) => setLength(Number(e.target.value))}
							className="mt-2 p-2 border rounded w-full"
						/>
						<div className="mt-4">
							<label>
								<input
									type="checkbox"
									checked={includeUppercase}
									onChange={() => setIncludeUppercase(!includeUppercase)}
								/>
								Использовать прописные буквы
							</label>
							<br />
							<label>
								<input
									type="checkbox"
									checked={includeLowercase}
									onChange={() => setIncludeLowercase(!includeLowercase)}
								/>
								Использовать строчные буквы
							</label>
							<br />
							<label>
								<input
									type="checkbox"
									checked={includeNumbers}
									onChange={() => setIncludeNumbers(!includeNumbers)}
								/>
								Использовать цифры
							</label>
							<br />
							<label>
								<input
									type="checkbox"
									checked={includeSymbols}
									onChange={() => setIncludeSymbols(!includeSymbols)}
								/>
								Использовать символы: % * {} ? @ # $ ~
							</label>
						</div>
						<div className="mt-4">
							<button
								onClick={generatePassword}
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
								Сгенерировать пароль
							</button>
						</div>
					</div>
					<div>
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
					</div>
				</div>
			</div>
		</div>
	);
};

export default PasswordGenerator;
