import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import {
	SiTypescript,
	SiNodedotjs,
	SiPostgresql,
	SiTailwindcss,
	SiJest,
	SiExpress,
} from 'react-icons/si';
import GithubButton from '../../components/GithubButton';
import VisitButton from '../../components/VisitButton';
import ImageContainer from '../../components/ImageContainer';
import WebAccessCard from '../../components/WebAccessCard';
import CoroshopCard from '../../components/CoroshopCard';
import { RiVuejsFill } from 'react-icons/ri';
import TimeKillerCard from '../../components/TimeKillerCard';

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

const Home: NextPage = () => {
	const { t } = useTranslation('');
	return (
		<div className="mb-8">
			<Head>
				<title>Joan Romero - Sticky Notes</title>
				<meta name="description" content="Sticky Notes project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="mx-auto max-w-sm  px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
				<div className="min-h-screen pt-24">
					<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
						Sticky Notes
					</h3>

					<p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
						{t('sticky_notes.desc')}
					</p>

					<div className="mt-6 flex w-full justify-center">
						<GithubButton href="https://github.com/JoanR99/sticky-notes-server">
							<p className="text-sm md:text-base">Backend</p>
						</GithubButton>
						<GithubButton href="https://github.com/JoanR99/sticky-notes-client-vue">
							<p className="text-sm md:text-base">Frontend</p>
						</GithubButton>
						<VisitButton href="https://sticky-notes-client-vue.vercel.app/">
							<p className="text-sm md:text-base">{t('visit')}</p>
						</VisitButton>
					</div>

					<div className="mt-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2">
							<Image
								src="/images/sticky-notes.png"
								alt="Sticky Notes"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 flex h-fit flex-col lg:mt-0">
							<div>
								<h4 className="text-xl font-bold text-teal-700 md:text-2xl">
									Stack
								</h4>
								<div className="mt-4 flex w-fit">
									<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
									<RiVuejsFill className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
									<SiTailwindcss className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
									<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
									<SiExpress className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
									<SiPostgresql className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
									<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-700 sm:h-8' />
								</div>
								<p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
									{t('sticky_notes.stack.f_desc')}
								</p>
								<p className="mt-2 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
									{t('sticky_notes.stack.s_desc')}
								</p>
							</div>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700">
							<Image
								src="/images/sn-2.png"
								alt="Sticky Notes - Login"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 h-fit">
							<h4 className="text-xl font-bold text-teal-700 md:text-2xl">
								{t('projects.titles.origin')}
							</h4>
							<p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
								{t('sticky_notes.origin.desc')}
							</p>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2 lg:mt-6">
							<Image
								src="/images/sn-3.png"
								alt="Sticky Notes - Sign up"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="my-8 h-fit lg:col-span-2 lg:mb-4">
							<h4 className="text-xl font-bold text-teal-700 md:text-2xl">
								{t('projects.titles.development')}
							</h4>
							<p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
								{t('sticky_notes.development.f_desc')}
							</p>
							<p className="mt-2 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
								{t('sticky_notes.development.s_desc')}
							</p>
						</div>

						<ImageContainer className="m-2 mt-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-3 lg:mt-6">
							<Image
								src="/images/sn-4.png"
								alt="Sticky Notes - Add note"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>
					</div>

					<div className="my-8 lg:mt-10">
						<div className="h-fit lg:col-span-2">
							<h4 className="text-xl font-bold text-teal-700 md:text-2xl">
								{t('projects.titles.challenges')}
							</h4>
							<p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
								{t('sticky_notes.challenges.f_desc')}
							</p>
							<p className="mt-2 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
								{t('sticky_notes.challenges.s_desc')}
							</p>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2">
							<Image
								src="/images/sn-5.png"
								alt="Sticky Notes - Note"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 flex h-fit flex-col">
							<div>
								<h4 className="text-xl font-bold text-teal-700 md:text-2xl">
									{t('projects.titles.learning')}
								</h4>
								<p className="mt-4 text-sm font-light leading-relaxed text-gray-600 dark:text-gray-300 md:text-base">
									{t('sticky_notes.learning.f_desc')}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-24">
					<h4 className="text-xl font-bold text-teal-700 md:text-2xl">
						{t('projects.other')}
					</h4>
					<div className="mt-8 grid w-full gap-6 lg:grid-cols-3 lg:gap-8">
						<WebAccessCard />

						<CoroshopCard />

						<TimeKillerCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
