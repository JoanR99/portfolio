import { InputHTMLAttributes } from 'react';

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
	return (
		<input
			{...props}
			className="rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2 font-light text-gray-600 dark:bg-[#1E293B] dark:text-gray-300"
		/>
	);
};

export default Input;
