import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
	children: ReactNode;
	className: string;
};

const ImageContainer = ({ children, className }: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0,
				scale: 0.8,
			}}
			whileInView={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				duration: 0.5,
			}}
			className={className}
		>
			{children}
		</motion.div>
	);
};

export default ImageContainer;
