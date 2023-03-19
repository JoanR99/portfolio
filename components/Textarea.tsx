import { InputHTMLAttributes } from 'react';

const Textarea = (props: InputHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			{...props}
			className="rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2 font-light text-gray-600 dark:bg-[#1E293B] dark:text-gray-300"
			rows={4}
		/>
	);
};

export default Textarea;
