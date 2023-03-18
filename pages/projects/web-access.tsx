import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
	SiSass,
	SiTypescript,
	SiSvelte,
	SiPython,
	SiFastapi,
	SiPytest,
	SiJavascript,
	SiReact,
} from 'react-icons/si';
import GithubButton from '../../components/GithubButton';
import VisitButton from '../../components/VisitButton';
import ImageContainer from '../../components/ImageContainer';
import StickyNotesCard from '../../components/StickyNotesCard';
import CoroshopCard from '../../components/CoroshopCard';
import TimeKillerCard from '../../components/TimeKillerCard';

export async function getStaticProps({ locale }: { locale: string }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ['common'])),
		},
	};
}

const Page: NextPage = () => {
	const { t } = useTranslation('');
	return (
		<div className="mb-8">
			<Head>
				<title>Joan Romero - WebAccess</title>
				<meta name="description" content="WebAccess project" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="mx-auto max-w-sm  px-4 sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
				<div className="min-h-screen pt-24">
					<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
						WebAccess
					</h3>

					<p className="text-md mt-4">{t('web_access.desc')}</p>

					<div className="mt-6 flex w-full justify-center">
						<GithubButton href="https://github.com/JoanR99/web-access-server-fastapi">
							Backend
						</GithubButton>
						<GithubButton href="https://github.com/JoanR99/web-access-client">
							Frontend
						</GithubButton>
						<VisitButton href="https://web-access-client.vercel.app/">
							{t('visit')}
						</VisitButton>
					</div>

					<div className="mt-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2">
							<Image
								src="/images/web-access-frame.png"
								alt="WebAccess"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 flex h-fit flex-col lg:mt-0">
							<div>
								<h4 className="text-xl font-bold text-teal-700">Stack</h4>
								<div className="mt-4 flex w-fit">
									<SiJavascript className='sm:w-8" mr-4 h-6 w-6 text-yellow-400 sm:h-8' />
									<SiReact className='sm:w-8" mr-4 h-6 w-6 text-sky-600 sm:h-8' />
									<SiSass className='sm:w-8" mr-4 h-6 w-6 text-pink-700 sm:h-8' />
									<SiPython className='sm:w-8" mr-4 h-6 w-6 text-yellow-600 sm:h-8' />
									<SiFastapi className='sm:w-8" mr-4 h-6 w-6 text-green-700 sm:h-8' />
									<SiPytest className='sm:w-8" mr-4 h-6 w-6 text-blue-600 sm:h-8' />
								</div>
								<p className="text-md mt-4">{t('web_access.stack.desc')}</p>
							</div>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700">
							<Image
								src="/images/wa-2.png"
								alt="WebAccess - Section"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="mt-8 h-fit">
							<h4 className="text-xl font-bold text-teal-700">
								{t('projects.titles.origin')}
							</h4>
							<p className="text-md mt-4">{t('web_access.origin.desc')}</p>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2 lg:mt-6">
							<Image
								src="/images/wa-3.png"
								alt="WebAccess - Accessibility evaluation"
								width={2000}
								height={1400}
								className="rounded-xl"
							/>
						</ImageContainer>

						<div className="my-8 h-fit lg:col-span-2 lg:mb-4">
							<h4 className="text-xl font-bold text-teal-700">
								{t('projects.titles.development')}
							</h4>
							<p className="text-md mt-4">
								{t('web_access.development.f_desc')}
							</p>
							<p className="text-md mt-2">
								{t('web_access.development.s_desc')}
							</p>
						</div>

						<ImageContainer className="m-2 mt-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-3 lg:mt-6">
							<Image
								src="/images/wa-4.png"
								alt="WebAccess - Results"
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
							<p className="text-md mt-4">{t('web_access.challenges.desc')}</p>
						</div>
					</div>

					<div className="my-8 grid w-full grid-cols-1 lg:mt-10 lg:grid-cols-2 lg:items-center lg:gap-x-10">
						<ImageContainer className="m-2 h-fit w-full rounded-xl shadow-lg shadow-gray-400 dark:border-[#1E293B] dark:shadow-teal-700 lg:order-2">
							<Image
								src="/images/wa-5.png"
								alt="WebAccess - Contrast checker"
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
								<p className="text-md mt-4">
									{t('web_access.learning.f_desc')}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className=" mt-24">
					<h4 className="text-xl font-bold text-teal-700">
						{t('projects.other')}
					</h4>
					<div className="mt-8 grid w-full gap-6 lg:grid-cols-3 lg:gap-8">
						<StickyNotesCard />

						<CoroshopCard />

						<TimeKillerCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;
