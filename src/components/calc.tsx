"use client";
import { buttons } from "@/constants";
import React, { useState, useEffect, useCallback } from "react";

const Calculator = () => {
	const [currentValue, setCurrentValue] = useState("0");

	const appendToDisplay = useCallback((value: string) => {
		setCurrentValue((prev) => (prev === "0" ? value : prev + value));
	}, []);

	const clearDisplay = useCallback(() => {
		setCurrentValue("0");
	}, []);

	const backspace = useCallback(() => {
		setCurrentValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
	}, []);

	const toggleSign = useCallback(() => {
		setCurrentValue((prev) =>
			prev.startsWith("-") ? prev.slice(1) : `-${prev}`,
		);
	}, []);

	const calculatePercentage = useCallback(() => {
		setCurrentValue((prev) => (parseFloat(prev) / 100).toString());
	}, []);

	const calculate = useCallback(() => {
		try {
			setCurrentValue(eval(currentValue.replace(/%/g, "/100")).toString());
		} catch {
			setCurrentValue("Error");
		}
	}, [currentValue]);

	useEffect(() => {
		const handleKeydown = (event: { key: string }) => {
			switch (event.key) {
				case "0":
				case "1":
				case "2":
				case "3":
				case "4":
				case "5":
				case "6":
				case "7":
				case "8":
				case "9":
				case ".":
					appendToDisplay(event.key);
					break;
				case "/":
				case "*":
				case "-":
				case "+":
					appendToDisplay(event.key);
					break;
				case "Enter":
					calculate();
					break;
				case "Backspace":
					backspace();
					break;
				case "Escape":
					clearDisplay();
					break;
				default:
					break;
			}
		};

		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [appendToDisplay, backspace, calculate, clearDisplay]);

	return (
		<div className="flex justify-center">
			<div className="bg-gray-100 text-gray-900 rounded-lg shadow-lg p-6 w-80">
				<div className="mb-4 bg-white text-right text-gray-800 rounded-md p-4">
					<span className="text-4xl">{currentValue}</span>
				</div>
				<div className="grid grid-cols-4 gap-2">
					<button
						className="bg-gray-200 hover:bg-gray-300 rounded-md px-6 py-4 text-lg"
						onClick={clearDisplay}>
						C
					</button>
					<button
						className="bg-gray-200 hover:bg-gray-300 rounded-md px-6 py-4 text-lg"
						onClick={toggleSign}>
						+/-
					</button>
					<button
						className="bg-gray-200 hover:bg-gray-300 rounded-md px-6 py-4 text-lg"
						onClick={calculatePercentage}>
						%
					</button>
					<button
						className="bg-gray-200 hover:bg-gray-300 rounded-md px-6 py-4 text-lg"
						onClick={backspace}>
						⌫
					</button>
					{buttons.map((button, index) => (
						<button
							key={index}
							className="bg-gray-200 hover:bg-gray-300 rounded-md px-6 py-4 text-lg"
							onClick={() => appendToDisplay(button.label)}>
							{button.label}
						</button>
					))}

					<button
						className="bg-blue-500 text-white rounded-md px-6 py-4 text-lg"
						onClick={calculate}>
						=
					</button>
				</div>
			</div>
		</div>
	);
};

export default Calculator;
