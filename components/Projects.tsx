import Link from 'next/link';
import BlurImage from './BlurImage';
import {
	SiJavascript,
	SiTypescript,
	SiSass,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiNestjs,
	SiGraphql,
	SiPostgresql,
	SiMongodb,
	SiMaterialui,
	SiStyledcomponents,
	SiRedux,
	SiJest,
	SiPrisma,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Projects = () => (
	<div id="projects" className="my-8 min-h-screen scroll-mt-24">
		<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
			Proyectos
		</h3>
		<div className="mt-8 grid w-full grid-cols-1 gap-6 md:gap-8">
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
				<BlurImage src="/images/web-access.png" alt="WebAcess" />

				<div className="flex flex-col items-center justify-between p-4 md:items-start">
					<h3 className="text-md font-medium text-teal-700">WebAccess</h3>
					<p className="mt-2 text-center text-sm md:text-left">
						Herramienta de evaluación automática de accesibilidad web y
						evaluador de contraste.
					</p>
					<div className="mt-4 flex">
						<SiJavascript className='sm:w-8" mr-4 h-6 w-6 text-yellow-400 sm:h-8' />
						<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiSass className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
						<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
						<SiExpress className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
						<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
					</div>
					<Link href="/projects/web-access">
						<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
							Ver Proyecto
						</p>
					</Link>
				</div>
			</motion.article>

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
				className="grid grid-cols-1 gap-4 rounded-xl border border-solid shadow-xl md:grid-cols-2"
			>
				<BlurImage src="/images/sticky-notes.png" alt="WebAcess" />

				<div className="flex flex-col items-center justify-between p-4 md:items-start">
					<h3 className="text-md font-medium text-teal-700">Sticky Notes</h3>
					<p className="mt-2 text-center text-sm md:text-left">
						Aplicación de notas.
					</p>
					<div className="mt-4 flex">
						<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiMaterialui className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
						<SiExpress className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
						<SiPrisma className='sm:w-8" mr-4 h-6 w-6 text-blue-900 sm:h-8' />
						<SiPostgresql className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
					</div>
					<Link href="/projects/sticky-notes">
						<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
							Ver Proyecto
						</p>
					</Link>
				</div>
			</motion.article>

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
				className="grid grid-cols-1 gap-4 rounded-xl border border-solid shadow-xl md:grid-cols-2"
			>
				<BlurImage src="/images/web-access.png" alt="WebAcess" />

				<div className="flex flex-col items-center justify-between p-4 md:items-start">
					<h3 className="text-md font-medium text-teal-700">Coroshop</h3>
					<p className="mt-2 text-center text-sm md:text-left">E-commerce.</p>
					<div className="mt-4 flex flex-wrap justify-center">
						<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
						<SiRedux className='sm:w-8" mr-4 h-6 w-6 text-purple-700 sm:h-8' />
						<SiStyledcomponents className='sm:w-8" mr-4 h-12 w-12 text-pink-700 sm:h-8' />
						<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
						<SiNestjs className='sm:w-8" mr-4 h-6 w-6 text-red-700 sm:h-8' />
						<SiGraphql className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
						<SiMongodb className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
						<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
					</div>
					<Link href="/projects/coroshop">
						<p className="mt-4 cursor-pointer text-sm font-medium text-pink-700">
							Ver Proyecto
						</p>
					</Link>
				</div>
			</motion.article>
		</div>
	</div>
);

export default Projects;
