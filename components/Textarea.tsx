import { InputHTMLAttributes } from 'react';

const Textarea = (props: InputHTMLAttributes<HTMLTextAreaElement>) => {
	return (
		<textarea
			{...props}
			className="rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2 dark:bg-[#1E293B]"
			rows={4}
		/>
	);
};

export default Textarea;
