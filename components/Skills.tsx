import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiSass,
	SiReact,
	SiExpress,
	SiNestjs,
	SiGraphql,
	SiPostgresql,
	SiMongodb,
	SiNextdotjs,
	SiTailwindcss,
	SiFirebase,
	SiFastapi,
	SiPython,
	SiRedux,
	SiJest,
	SiGit,
	SiStyledcomponents,
	SiVitest,
	SiPytest,
	SiNodedotjs,
} from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';
import { RiVuejsFill } from 'react-icons/ri';
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
				<p className="text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
					{t('skills.first_p')}{' '}
					<a
						href="https://www.udemy.com/certificate/UC-b9587b26-e83f-40ba-b75c-26ad65272178/"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium"
					>
						The Complete Web Developer in 2022: Zero to Mastery
					</a>
					,{' '}
					<a
						href="https://www.udemy.com/certificate/UC-3f7c2991-e797-414a-82ea-8a40f5cd972d/"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium"
					>
						The Complete 2022 Web Development Bootcamp
					</a>
					,{' '}
					<a
						href="https://www.udemy.com/certificate/UC-87b6084e-2757-4d91-ab46-4bb2c3d8191d/"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium"
					>
						Advance CSS and SASS: Flexbox, Grid, Animations and More!
					</a>{' '}
					{t('skills.&')}{' '}
					<a
						href="https://www.udemy.com/certificate/UC-bddeb759-c5c5-4bce-abf2-4ca44e0add52/"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium"
					>
						Complete React Developer in 2022 (w/ Redux, Hooks, GraphQL)
					</a>
					{t('skills.second_p')}
				</p>
			</div>

			<h3 className="font-semi-bold mt-8 text-xl text-teal-700 md:text-2xl">
				{t('skills.languages')}
			</h3>
			<div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
				<SkillCard>
					<SiHtml5 className='sm:w-8" mr-2 h-6 w-6 text-sm text-orange-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						HTML5
					</p>
				</SkillCard>
				<SkillCard>
					<SiCss3 className='sm:w-8" mr-2 h-6 w-6 text-sm text-sky-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						CSS3
					</p>
				</SkillCard>
				<SkillCard>
					<SiJavascript className='sm:w-8" mr-2 h-6 w-6 text-sm text-yellow-400 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						JavaScript
					</p>
				</SkillCard>

				<SkillCard>
					<SiTypescript className='sm:w-8" mr-2 h-6 w-6 text-sm text-blue-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						TypeScript
					</p>
				</SkillCard>

				<SkillCard>
					<SiPython className='sm:w-8" mr-2 h-6 w-6 text-sm text-yellow-400 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Python
					</p>
				</SkillCard>
				<SkillCard>
					<FaDatabase className='sm:w-7" mr-2 h-5 w-5 text-sm text-sky-600 sm:h-7 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						SQL
					</p>
				</SkillCard>
			</div>

			<h3 className="font-semi-bold mt-8 text-xl text-teal-700 md:text-2xl">
				{t('skills.frontend')}
			</h3>
			<div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
				<SkillCard>
					<SiReact className='sm:w-8" mr-2 h-6 w-6 text-sm text-sky-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						React
					</p>
				</SkillCard>

				<SkillCard>
					<RiVuejsFill className='sm:w-8" mr-2 h-6 w-6 text-sm text-green-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Vue
					</p>
				</SkillCard>

				<SkillCard>
					<SiSass className='sm:w-8" mr-2 h-6 w-6 text-sm text-pink-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						SASS
					</p>
				</SkillCard>

				<SkillCard>
					<SiTailwindcss className='sm:w-8" mr-2 h-6 w-6 text-sm text-sky-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Tailwind
					</p>
				</SkillCard>

				<SkillCard>
					<SiStyledcomponents className='sm:w-8" mr-2 h-8 w-8 text-sm text-pink-400 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Styled Components
					</p>
				</SkillCard>

				<SkillCard>
					<SiRedux className='sm:w-8" mr-2 h-6 w-6 text-sm text-purple-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Redux
					</p>
				</SkillCard>
			</div>

			<h3 className="font-semi-bold mt-8 text-xl text-teal-700 md:text-2xl">
				{t('skills.backend')}
			</h3>
			<div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
				<SkillCard>
					<SiNodedotjs className='sm:w-8" mr-2 h-6 w-6 text-sm text-lime-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Node
					</p>
				</SkillCard>
				<SkillCard>
					<SiExpress className='sm:w-8" mr-2 h-6 w-6 text-sm text-lime-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Express
					</p>
				</SkillCard>

				<SkillCard>
					<SiNestjs className='sm:w-8" mr-2 h-6 w-6 text-sm text-red-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Nest
					</p>
				</SkillCard>

				<SkillCard>
					<SiFastapi className='sm:w-8" mr-2 h-6 w-6 text-sm text-green-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Fastapi
					</p>
				</SkillCard>

				<SkillCard>
					<SiFirebase className='sm:w-8" mr-2 h-6 w-6 text-sm text-orange-500 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Firebase
					</p>
				</SkillCard>

				<SkillCard>
					<SiPostgresql className='sm:w-8" mr-2 h-6 w-6 text-sm text-sky-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						PostgreSQL
					</p>
				</SkillCard>

				<SkillCard>
					<SiMongodb className='sm:w-8" mr-2 h-6 w-6 text-sm text-green-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						MongoDB
					</p>
				</SkillCard>
			</div>

			<h3 className="font-semi-bold mt-8 text-xl text-teal-700 md:text-2xl">
				{t('skills.other')}
			</h3>
			<div className="mt-6 flex flex-wrap justify-center gap-6 md:justify-start">
				<SkillCard>
					<SiNextdotjs className='sm:w-8" mr-2 h-6 w-6 text-sm text-black sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Next
					</p>
				</SkillCard>

				<SkillCard>
					<SiGraphql className='sm:w-8" mr-2 h-6 w-6 text-sm text-pink-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						GraphQL
					</p>
				</SkillCard>

				<SkillCard>
					<SiGit className='sm:w-8" mr-2 h-6 w-6 text-sm text-red-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Git
					</p>
				</SkillCard>

				<SkillCard>
					<SiJest className='sm:w-8" mr-2 h-6 w-6 text-sm text-red-700 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Jest
					</p>
				</SkillCard>

				<SkillCard>
					<SiVitest className='sm:w-8" mr-2 h-6 w-6 text-sm text-yellow-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Vitest
					</p>
				</SkillCard>

				<SkillCard>
					<SiPytest className='sm:w-8" mr-2 h-6 w-6 text-sm text-blue-600 sm:h-8 md:text-base' />
					<p className="font-regular text-base leading-relaxed text-gray-600 dark:text-gray-300">
						Pytest
					</p>
				</SkillCard>
			</div>
		</div>
	);
};

export default Skills;
