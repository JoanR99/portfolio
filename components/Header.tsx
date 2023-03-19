import Link from 'next/link';
import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import LangButton from './LangButton';
import ThemeButton from './ThemeButton';
import NavItems from './NavItems';
import SidebarNavItems from './SidebarNavItems';

const Header = () => {
	const [nav, setNav] = useState(false);

	const router = useRouter();
	const { t } = useTranslation('');

	const handleNav = () => setNav((prevState) => !prevState);

	const menu = {
		open: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.3 },
		},
		closed: {
			x: -750,
			opacity: 0,
			transition: { duration: 0.3 },
		},
	};

	return (
		<header className="w fixed top-0 z-[100] h-16 w-full bg-neutral-100 text-teal-700 shadow-lg dark:bg-slate-800 md:shadow-lg">
			<section className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
				<h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">
					{!router.pathname.includes('/projects') ? (
						<a href="#hero">JR</a>
					) : (
						<Link href="/#hero">JR</Link>
					)}
				</h1>

				<div>
					<nav
						className="hidden space-x-8 text-lg font-medium md:flex"
						aria-label="main"
					>
						<NavItems />
					</nav>

					<div onClick={handleNav} className="cursor-pointer md:hidden">
						<AiOutlineMenu size={25} />
					</div>
				</div>

				<div className="hidden md:block">
					<div className="flex items-center gap-5">
						<LangButton />
						<ThemeButton />
					</div>
				</div>
			</section>

			<div
				className={
					nav ? 'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden' : ''
				}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={nav ? 'open' : 'closed'}
					variants={menu}
					className={
						'fixed left-0 top-0 flex h-screen w-[75%] flex-col justify-between bg-[#ecf0f3] p-4 dark:bg-[#1E293B]  sm:w-[60%] md:w-[45%] md:p-10'
					}
				>
					<div className="flex w-full items-center justify-between">
						<h1
							className="text-2xl font-bold sm:text-3xl md:text-4xl"
							onClick={handleNav}
						>
							<a href="#hero">JR</a>
						</h1>

						<div className="flex items-center gap-4">
							<LangButton />
							<ThemeButton />
						</div>

						<div onClick={handleNav} className="cursor-pointer text-pink-700">
							<AiOutlineClose size={25} />
						</div>
					</div>

					<div className="flex flex-col p-4 text-xl">
						<nav onClick={handleNav} className="flex flex-col p-4 text-xl">
							<SidebarNavItems />
						</nav>

						<div className="pt-40">
							<p className="font-medium">{t('header.connect')}</p>
							<div className="mt-2 flex w-[30%] items-center">
								<a
									href="https://www.linkedin.com/in/joanr99/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<BsLinkedin className="mr-4 h-8 w-8 text-pink-700  hover:scale-105 hover:opacity-90" />
								</a>
								<a
									href="https://github.com/JoanR99"
									target="_blank"
									rel="noopener noreferrer"
								>
									<BsGithub className="h-8 w-8 text-pink-700  hover:scale-105 hover:opacity-90" />
								</a>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</header>
	);
};

export default Header;
