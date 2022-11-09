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
import SkillCard from './SkillCard';

const Skills = () => (
	<div id="skills" className="mt-8 min-h-screen scroll-mt-24">
		<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
			Habilidades
		</h3>
		<div className="mt-6">
			<p>
				Ademas de programación básica, en la universidad aprendí conceptos mas
				de programación mas avanzados, como es el caso de la programación
				orientada a objetos, las estructuras de datos, los algoritmos y la
				recursividad, aunado a conceptos básicos de la ingeniería de software,
				como es el caso del ciclo de vida del software, partiendo desde el
				análisis hasta el diseño e implementación de sistemas. Por otro lado, he
				terminado ciertos cursos como{' '}
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

			<h3 className="mt-8 text-xl font-bold text-teal-700">
				Principales Tecnologías
			</h3>
		</div>
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
			className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-8"
		>
			<SkillCard>
				<SiJavascript className='sm:w-8" mr-2 h-6 w-6 text-yellow-400 sm:h-8' />
				<p className="font-medium">JavaScript</p>
			</SkillCard>

			<SkillCard>
				<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">TypeScript</p>
			</SkillCard>

			<SkillCard>
				<SiHtml5 className='sm:w-8" mr-2 h-6 w-6 text-orange-600 sm:h-8' />
				<p className="font-medium">HTML5</p>
			</SkillCard>

			<SkillCard>
				<SiCss3 className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">CSS3</p>
			</SkillCard>

			<SkillCard>
				<SiTailwindcss className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">Tailwind</p>
			</SkillCard>

			<SkillCard>
				<SiMaterialui className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">Material UI</p>
			</SkillCard>

			<SkillCard>
				<SiSass className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
				<p className="font-medium">SASS</p>
			</SkillCard>

			<SkillCard>
				<SiReact className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">React</p>
			</SkillCard>

			<SkillCard>
				<SiNextdotjs className='sm:w-8" mr-2 h-6 w-6 text-black sm:h-8' />
				<p className="font-medium">Next</p>
			</SkillCard>

			<SkillCard>
				<SiNodedotjs className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
				<p className="font-medium">Node</p>
			</SkillCard>

			<SkillCard>
				<SiExpress className='sm:w-8" mr-2 h-6 w-6 text-lime-700 sm:h-8' />
				<p className="font-medium">Express</p>
			</SkillCard>

			<SkillCard>
				<SiNestjs className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
				<p className="font-medium">Nest</p>
			</SkillCard>

			<SkillCard>
				<SiFirebase className='sm:w-8" mr-2 h-6 w-6 text-orange-500 sm:h-8' />
				<p className="font-medium">Firebase</p>
			</SkillCard>

			<SkillCard>
				<SiGraphql className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
				<p className="font-medium">GraphQL</p>
			</SkillCard>

			<SkillCard>
				<SiPostgresql className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
				<p className="font-medium">PostgreSQL</p>
			</SkillCard>

			<SkillCard>
				<SiMongodb className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
				<p className="font-medium">MongoDB</p>
			</SkillCard>
		</motion.div>
	</div>
);

export default Skills;