import WebAccessCard from './WebAccessCard';
import StickyNotesCard from './StickyNotesCard';
import CoroshopCard from './CoroshopCard';
import { useTranslation } from 'next-i18next';
import TimeKillerCard from './TimeKillerCard';

const Projects = () => {
	const { t } = useTranslation('');

	return (
		<div id="projects" className="my-8 min-h-fit scroll-mt-24">
			<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('projects.title')}
			</h3>
			<div className="mt-8 grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
				<WebAccessCard />

				<StickyNotesCard />

				<CoroshopCard />

				<TimeKillerCard />
			</div>
		</div>
	);
};

export default Projects;
