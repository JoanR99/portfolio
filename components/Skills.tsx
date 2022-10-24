import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiSass,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiNestjs,
	SiGraphql,
	SiPostgresql,
	SiMongodb,
	SiNextdotjs,
	SiTailwindcss,
	SiMaterialui,
	SiFirebase,
} from 'react-icons/si';
import { motion } from 'framer-motion';

const Skills = () => (
	<div id="skills" className="mt-8 h-screen scroll-mt-24">
		<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
			Habilidades
		</h3>
		<div className="mt-4">
			<p>
				A parte de los conocimientos adquiridos en la universidad, he terminado
				ciertos cursos como{' '}
				<a
					href="https://www.udemy.com/certificate/UC-b9587b26-e83f-40ba-b75c-26ad65272178/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-700"
				>
					The Complete Web Developer in 2022: Zero to Mastery
				</a>
				,{' '}
				<a
					href="https://www.udemy.com/certificate/UC-3f7c2991-e797-414a-82ea-8a40f5cd972d/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-700"
				>
					The Complete 2022 Web Development Bootcamp
				</a>
				,{' '}
				<a
					href="https://www.udemy.com/certificate/UC-87b6084e-2757-4d91-ab46-4bb2c3d8191d/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-700"
				>
					Advance CSS and SASS: Flexbox, Grid, Animations and More!
				</a>{' '}
				y{' '}
				<a
					href="https://www.udemy.com/certificate/UC-bddeb759-c5c5-4bce-abf2-4ca44e0add52/"
					target="_blank"
					rel="noopener noreferrer"
					className="text-pink-700"
				>
					Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
				</a>
				, además de aprender otras tecnologías, frameworks y librerías con
				recursos gratuitos como es el caso de Youtube o de la propia
				documentación de dichas tecnologías.
			</p>
		</div>
		<motion.div
			initial={{
				opacity: 0,
				y: 200,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 1.5,
			}}
			className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8"
		>
			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiJavascript className='sm:w-8" mr-2 h-6 w-6 text-yellow-400 sm:h-8' />
				<p className="font-medium">JavaScript</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">TypeScript</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiHtml5 className='sm:w-8" mr-2 h-6 w-6 text-orange-600 sm:h-8' />
				<p className="font-medium">HTML5</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiCss3 className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">CSS3</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiTailwindcss className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">Tailwind</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiMaterialui className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">Material UI</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiSass className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
				<p className="font-medium">SASS</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiReact className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">React</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiNextdotjs className='sm:w-8" mr-2 h-6 w-6 text-black sm:h-8' />
				<p className="font-medium">Next</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiNodedotjs className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
				<p className="font-medium">Node</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiExpress className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
				<p className="font-medium">Express</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiNestjs className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
				<p className="font-medium">Nest</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiFirebase className='sm:w-8" mr-2 h-6 w-6 text-orange-500 sm:h-8' />
				<p className="font-medium">Firebase</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiGraphql className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
				<p className="font-medium">GraphQL</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiPostgresql className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">PostgreSQL</p>
			</div>

			<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
				<SiMongodb className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
				<p className="font-medium">MongoDB</p>
			</div>
		</motion.div>
	</div>
);

export default Skills;
