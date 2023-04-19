import { useState, useEffect } from 'react';
import {BiSun, BiMoon } from "react-icons/bi";

function ThemeButton() {

	const [theme, setTheme] = useState('light');

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark')
		} else {
			document.documentElement.classList.remove('dark')
		}
	}, [theme]);

	const handleTheme = () => {
		setTheme(theme === "dark" ? "light" : "dark")
	}

	return (
		<button className='text-xl mx-2' onClick={handleTheme}>
			{
				theme === 'dark' ?
					<BiSun className='inline' />
					:
					<BiMoon className='inline' />
			}
		</button>
	)
}

export default ThemeButton