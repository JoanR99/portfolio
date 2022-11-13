import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeButton = () => {
	const [mounted, setMounted] = useState(false);
	const { systemTheme, theme, setTheme } = useTheme();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const currentTheme = theme === 'system' ? systemTheme : theme;

	if (currentTheme === 'dark') {
		return (
			<FaSun
				className="h-6 w-6 text-yellow-500 md:h-8 md:w-8"
				role="button"
				onClick={() => setTheme('light')}
			/>
		);
	} else {
		return (
			<FaMoon
				className="h-6 w-6 text-gray-900 md:h-8 md:w-8"
				role="button"
				onClick={() => setTheme('dark')}
			/>
		);
	}
};

export default ThemeButton;
