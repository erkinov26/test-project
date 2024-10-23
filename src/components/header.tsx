import Link from "next/link";

const Header = () => {
	const name = localStorage.getItem("name");

	return (
		<header className="flex justify-between p-3">
			<nav className="flex justify-between items-center">
				<Link href="/">
					<div className="mx-4 text-gray-600 hover:text-black">Главная</div>
				</Link>
				<Link href="/calculator">
					<div className="mx-4 text-gray-600 hover:text-black">Калькулятор</div>
				</Link>
				<Link href="/password-create">
					<div className="mx-4 text-gray-600 hover:text-black">
						Генератор паролей
					</div>
				</Link>
			</nav>
			<div>Ваше имя: {name || "Не указано"}</div>
		</header>
	);
};

export default Header;
