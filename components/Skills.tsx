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
	SiFastapi,
	SiDocker,
	SiSvelte,
	SiPython,
	SiPhp,
	SiCplusplus,
	SiRedux,
	SiFastify,
	SiJest,
	SiPostman,
	SiPrisma,
	SiSequelize,
	SiMysql,
	SiSqlite,
	SiGit,
	SiGithub,
	SiVisualstudiocode,
	SiFigma,
	SiGo,
	SiPytest,
} from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import { motion } from 'framer-motion';
import SkillCard from './SkillCard';
import { useTranslation } from 'next-i18next';

const Skills = () => {
	const { t } = useTranslation('');

	return (
		<div id="skills" className="my-24 min-h-fit scroll-mt-24">
			<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
				{t('skills.title')}
			</h3>
			<div className="mt-6">
				<p>
					{t('skills.first_p')}{' '}
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
					{t('skills.&')}{' '}
					<a
						href="https://www.udemy.com/certificate/UC-bddeb759-c5c5-4bce-abf2-4ca44e0add52/"
						target="_blank"
						rel="noopener noreferrer"
						className="text-pink-700"
					>
						Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
					</a>
					{t('skills.second_p')}
				</p>
			</div>

			<h3 className="mt-8 text-xl font-bold text-teal-700">
				{t('skills.languages')}
			</h3>
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
					<SiHtml5 className='sm:w-8" mr-2 h-6 w-6 text-orange-600 sm:h-8' />
					<p className="font-medium">HTML5</p>
				</SkillCard>
				<SkillCard>
					<SiCss3 className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<p className="font-medium">CSS3</p>
				</SkillCard>
				<SkillCard>
					<SiJavascript className='sm:w-8" mr-2 h-6 w-6 text-yellow-400 sm:h-8' />
					<p className="font-medium">JavaScript</p>
				</SkillCard>

				<SkillCard>
					<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<p className="font-medium">TypeScript</p>
				</SkillCard>

				<SkillCard>
					<SiPython className='sm:w-8" mr-2 h-6 w-6 text-yellow-400 sm:h-8' />
					<p className="font-medium">Python</p>
				</SkillCard>

				<SkillCard>
					<SiGo className='sm:w-8" mr-2 h-7 w-7 text-sky-600 sm:h-8' />
					<p className="font-medium">Go</p>
				</SkillCard>

				<SkillCard>
					<SiPhp className='sm:w-8" mr-2 h-7 w-7 text-sky-600 sm:h-8' />
					<p className="font-medium">PHP</p>
				</SkillCard>

				<SkillCard>
					<SiCplusplus className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<p className="font-medium">C++</p>
				</SkillCard>
			</motion.div>

			<h3 className="mt-12 text-xl font-bold text-teal-700">
				{t('skills.frontend')}
			</h3>
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
					<SiReact className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<p className="font-medium">React</p>
				</SkillCard>

				<SkillCard>
					<RiVuejsFill className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<p className="font-medium">Vue</p>
				</SkillCard>

				<SkillCard>
					<SiSvelte className='sm:w-8" mr-2 h-6 w-6 text-orange-600 sm:h-8' />
					<p className="font-medium">Svelte</p>
				</SkillCard>

				<SkillCard>
					<SiNextdotjs className='sm:w-8" mr-2 h-6 w-6 text-black sm:h-8' />
					<p className="font-medium">Next</p>
				</SkillCard>

				<SkillCard>
					<SiSass className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
					<p className="font-medium">SASS</p>
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
					<SiRedux className='sm:w-8" mr-2 h-6 w-6 text-purple-600 sm:h-8' />
					<p className="font-medium">Redux</p>
				</SkillCard>
			</motion.div>

			<h3 className="mt-12 text-xl font-bold text-teal-700">
				{t('skills.backend')}
			</h3>
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
					<SiFastify className='sm:w-8" mr-2 h-6 w-6 text-black sm:h-8' />
					<p className="font-medium">Fastify</p>
				</SkillCard>

				<SkillCard>
					<SiFastapi className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<p className="font-medium">Fastapi</p>
				</SkillCard>

				<SkillCard>
					<SiFirebase className='sm:w-8" mr-2 h-6 w-6 text-orange-500 sm:h-8' />
					<p className="font-medium">Firebase</p>
				</SkillCard>

				<SkillCard>
					<SiPrisma className='sm:w-8" mr-2 h-6 w-6 text-blue-800 sm:h-8' />
					<p className="font-medium">Prisma</p>
				</SkillCard>

				<SkillCard>
					<SiSequelize className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<p className="font-medium">Sequelize</p>
				</SkillCard>

				<SkillCard>
					<SiPostgresql className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<p className="font-medium">PostgreSQL</p>
				</SkillCard>

				<SkillCard>
					<SiMongodb className='sm:w-8" mr-2 h-6 w-6 text-green-700 sm:h-8' />
					<p className="font-medium">MongoDB</p>
				</SkillCard>

				<SkillCard>
					<SiMysql className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<p className="font-medium">MySQL</p>
				</SkillCard>
				<SkillCard>
					<SiSqlite className='sm:w-8" mr-2 h-6 w-6 text-blue-600 sm:h-8' />
					<p className="font-medium">SQLite</p>
				</SkillCard>
			</motion.div>

			<h3 className="mt-12 text-xl font-bold text-teal-700">
				{t('skills.other')}
			</h3>
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
					<SiDocker className='sm:w-8" mr-2 h-6 w-6 text-sky-600 sm:h-8' />
					<p className="font-medium">Docker</p>
				</SkillCard>

				<SkillCard>
					<SiGraphql className='sm:w-8" mr-2 h-6 w-6 text-pink-700 sm:h-8' />
					<p className="font-medium">GraphQL</p>
				</SkillCard>

				<SkillCard>
					<SiGit className='sm:w-8" mr-2 h-6 w-6 text-red-600 sm:h-8' />
					<p className="font-medium">Git</p>
				</SkillCard>

				<SkillCard>
					<SiGithub className='sm:w-8" mr-2 h-6 w-6 text-black sm:h-8' />
					<p className="font-medium">Github</p>
				</SkillCard>

				<SkillCard>
					<SiJest className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
					<p className="font-medium">Jest</p>
				</SkillCard>

				<SkillCard>
					<SiPytest className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
					<p className="font-medium">Pytest</p>
				</SkillCard>

				<SkillCard>
					<SiFigma className='sm:w-8" mr-2 h-6 w-6 text-red-700 sm:h-8' />
					<p className="font-medium">Figma</p>
				</SkillCard>

				<SkillCard>
					<SiPostman className='sm:w-8" mr-2 h-6 w-6 text-orange-700 sm:h-8' />
					<p className="font-medium">Postman</p>
				</SkillCard>
			</motion.div>
		</div>
	);
};

export default Skills;
