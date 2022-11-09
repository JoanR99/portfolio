import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
	children: ReactNode;
};

const ProjectCard = ({ children }: Props) => {
	return (
		<motion.article
			initial={{
				opacity: 0,
				scale: 0.5,
			}}
			whileInView={{
				opacity: 1,
				scale: 1,
			}}
			transition={{
				duration: 1.5,
			}}
			className="grid grid-cols-1 gap-6 rounded-xl border border-solid p-2 shadow-xl md:grid-cols-2"
		>
			{children}
		</motion.article>
	);
};

export default ProjectCard;
