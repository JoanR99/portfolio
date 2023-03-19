import { ReactNode } from 'react';
import { IoOpen } from 'react-icons/io5';

type Props = {
	children: ReactNode;
	href: string;
};
const VisitButton = ({ children, href }: Props) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="mr-4 flex flex-col items-center justify-center"
		>
			<IoOpen className="h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
			{children}
		</a>
	);
};

export default VisitButton;
