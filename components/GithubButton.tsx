import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';

type Props = {
	children: ReactNode;
	href: string;
};

const GithubButton = ({ children, href }: Props) => {
	return (
		<motion.a
			initial={{
				x: 200,
				opacity: 0,
				scale: 0.5,
			}}
			animate={{
				x: 0,
				opacity: 1,
				scale: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="mr-4 flex flex-col items-center justify-center"
		>
			<BsGithub className="h-6 w-6 text-pink-700 hover:scale-105 hover:opacity-90 sm:h-7 sm:w-7" />
			{children}
		</motion.a>
	);
};

export default GithubButton;
