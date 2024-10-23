import { useState } from "react";

const Calculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState("");

	const handleButtonClick = (value: string) => {
		if (value === "=") {
			try {
				setResult(eval(input).toString());
			} catch {
				setResult("Ошибка");
			}
		} else if (value === "C") {
			setInput("");
			setResult("");
		} else {
			setInput(input + value);
		}
	};

	return (
		<div>
			<div>{input || "0"}</div>
			<div>{result}</div>
			<div>
				<button onClick={() => handleButtonClick("1")}>1</button>
				<button onClick={() => handleButtonClick("2")}>2</button>
				{/* Добавить остальные кнопки */}
				<button onClick={() => handleButtonClick("=")}>=</button>
				<button onClick={() => handleButtonClick("C")}>C</button>
			</div>
		</div>
	);
};

export default Calculator;
