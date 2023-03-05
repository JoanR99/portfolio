import { useTranslation } from 'next-i18next';
import ClassroomCanvas from './ClassroomCanvas';
import RoomCanvas from './RoomCanvas';
import { motion } from 'framer-motion';

const About = () => {
	const { t } = useTranslation('');
	return (
		<div className="dm:my-24 my-8 min-h-fit scroll-mt-24" id="about">
			<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('about.title')}
			</h3>
			<div className="mt-4 mb-4 flex flex-col align-middle sm:mt-2 sm:gap-8 md:flex-row md:items-center md:justify-between">
				<motion.p
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
					className="mb-4 md:w-3/6"
				>
					{t('about.first_p')}
				</motion.p>
				<div className="h-[200px] w-[300px] sm:h-[300px] sm:w-[450px]">
					<ClassroomCanvas />
				</div>
			</div>
			<div className="mt-4 mb-4 flex flex-col-reverse align-middle sm:mt-2 md:flex-row md:items-center md:justify-between md:gap-8">
				<div className="h-[200px] w-[300px] sm:h-[300px] sm:w-[450px]">
					<RoomCanvas />
				</div>

				<motion.p
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
					className="mb-4 md:w-3/6"
				>
					{t('about.second_p')}
				</motion.p>
			</div>
		</div>
	);
};

export default About;
