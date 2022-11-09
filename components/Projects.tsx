import WebAccessCard from './WebAccessCard';
import StickyNotesCard from './StickyNotesCard';
import CoroshopCard from './CoroshopCard';

const Projects = () => (
	<div id="projects" className="my-8 min-h-screen scroll-mt-24">
		<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
			Proyectos
		</h3>
		<div className="mt-8 grid w-full grid-cols-1 gap-6 md:gap-8">
			<WebAccessCard />

			<StickyNotesCard />

			<CoroshopCard />
		</div>
	</div>
);

export default Projects;
