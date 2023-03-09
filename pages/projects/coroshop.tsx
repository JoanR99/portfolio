import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
	SiTypescript,
	SiReact,
	SiNodedotjs,
	SiNestjs,
	SiGraphql,
	SiMongodb,
	SiRedux,
	SiJest,
} from 'react-icons/si';
import GithubButton from '../../components/GithubButton';
import VisitButton from '../../components/VisitButton';
import ImageContainer from '../../components/ImageContainer';
import WebAccessCard from '../../components/WebAccessCard';
import StickyNotesCard from '../../components/StickyNotesCard';
import { RxStitchesLogo } from 'react-icons/rx';
import { TbBrandRadixUi } from 'react-icons/tb';
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
				<title>Joan Romero - Coroshop</title>
				<meta name="description" content="Coroshop Project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="mx-auto max-w-sm  px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
				<div className="min-h-screen pt-24">
					<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
						Coroshop
					</h3>

					<p className="text-md mt-4">{t('coroshop.desc')}</p>

					<div className="mt-6 flex w-full justify-center">
						<GithubButton href="https://github.com/JoanR99/coroshop-server">
							Backend
						</GithubButton>
						<GithubButton href="https://github.com/JoanR99/coroshop-client">
							Frontend
						</GithubButton>
						<VisitButton href="https://coroshop-client.vercel.app/">
							{t('visit')}
						</VisitButton>
					</div>

					<div className="mt-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2">
							<Image
								src="/images/coroshop-frame.png"
								alt="Coroshop"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 flex h-fit flex-col lg:mt-0">
							<div>
								<h4 className="text-xl font-bold text-teal-700">Stack</h4>
								<div className="mt-4 flex w-fit">
									<SiTypescript className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
									<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
									<SiRedux className='sm:w-8" mr-4 h-6 w-6 text-purple-700 sm:h-8' />
									<RxStitchesLogo className='sm:w-8" mr-4 h-7 w-7 text-black sm:h-8' />
									<TbBrandRadixUi className='sm:w-8" mr-4 h-7 w-7 text-black sm:h-8' />
									<SiNodedotjs className='sm:w-8" mr-4 h-6 w-6 text-lime-700 sm:h-8' />
									<SiNestjs className='sm:w-8" mr-4 h-6 w-6 text-red-700 sm:h-8' />
									<SiGraphql className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
									<SiMongodb className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
									<SiJest className='sm:w-8" mr-4 h-6 w-6 text-red-800 sm:h-8' />
								</div>
								<p className="text-md mt-4">{t('coroshop.stack.f_desc')}</p>
								<p className="text-md mt-2">{t('coroshop.stack.s_desc')}</p>
							</div>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700">
							<Image
								src="/images/cs-2.png"
								alt="Coroshop - Login"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 h-fit">
							<h4 className="text-xl font-bold text-teal-700">
								{t('projects.titles.origin')}
							</h4>
							<p className="text-md mt-4">{t('coroshop.origin.desc')}</p>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2 lg:mt-6">
							<Image
								src="/images/cs-3.png"
								alt="Coroshop - All Products"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="my-8 h-fit lg:col-span-2 lg:mb-4">
							<h4 className="text-xl font-bold text-teal-700">
								{t('projects.titles.development')}
							</h4>
							<p className="text-md mt-4">{t('coroshop.development.f_desc')}</p>
							<p className="text-md mt-2">{t('coroshop.development.s_desc')}</p>
						</div>

						<ImageContainer className="m-2 mt-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-3 lg:mt-6">
							<Image
								src="/images/cs-4.png"
								alt="Coroshop - Categories"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>
					</div>

					<div className="my-8 lg:mt-10">
						<div className="h-fit lg:col-span-2">
							<h4 className="text-xl font-bold text-teal-700">
								{t('projects.titles.challenges')}
							</h4>
							<p className="text-md mt-4">{t('coroshop.challenges.f_desc')}</p>
							<p className="text-md mt-2">{t('coroshop.challenges.s_desc')}</p>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2">
							<Image
								src="/images/cs-5.png"
								alt="Coroshop - Product"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 flex h-fit flex-col">
							<div>
								<h4 className="text-xl font-bold text-teal-700">
									{t('projects.titles.learning')}
								</h4>
								<p className="text-md mt-4">{t('coroshop.learning.f_desc')}</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-24">
					<h4 className="text-xl font-bold text-teal-700">
						{t('projects.other')}
					</h4>
					<div className="mt-8 grid w-full gap-6 lg:grid-cols-3 lg:gap-8">
						<WebAccessCard />

						<StickyNotesCard />

						<TimeKillerCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
