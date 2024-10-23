import { useState } from "react";

const PasswordForm = () => {
	const [password, setPassword] = useState("");

	const generatePassword = () => {
		const chars =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		let newPassword = "";
		for (let i = 0; i < 8; i++) {
			newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		setPassword(newPassword);
	};

	return (
		<div>
			<button onClick={generatePassword}>Сгенерировать пароль</button>
			<p>Ваш пароль: {password}</p>
		</div>
	);
};

export default PasswordForm;
