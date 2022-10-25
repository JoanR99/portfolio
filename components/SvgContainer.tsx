import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type Props = {
	children: ReactNode;
};

const SvgContainer = ({ children }: Props) => (
	<motion.div
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
		className="md:w-2/5 lg:w-1/3"
	>
		{children}
	</motion.div>
);

export default SvgContainer;
