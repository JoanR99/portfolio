import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { motion } from 'framer-motion';

const Header = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => setNav((prevState) => !prevState);

	const menu = {
		open: {
			x: 0,
			opacity: 1,
			transition: { duration: 1 },
		},
		closed: {
			x: -750,
			opacity: 0,
			transition: { duration: 1 },
		},
	};

	return (
		<header className="w fixed top-0 z-[100] h-16 w-full bg-[#ecf0f3] text-teal-700 shadow-lg md:shadow-lg">
			<section className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
				<motion.h1
					initial={{
						x: -500,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					className="text-2xl font-bold sm:text-3xl md:text-4xl"
				>
					<a href="#hero">JR</a>
				</motion.h1>

				<div>
					<motion.nav
						initial={{
							y: -500,
							opacity: 0,
							scale: 0.5,
						}}
						animate={{
							y: 0,
							opacity: 1,
							scale: 1,
						}}
						transition={{
							duration: 1.5,
						}}
						className="hidden space-x-8 text-lg font-medium md:flex"
						aria-label="main"
					>
						<a
							href="#about"
							className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
						>
							Sobre mi
						</a>

						<a
							href="#skills"
							className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
						>
							Habilidades
						</a>

						<a
							href="#projects"
							className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
						>
							Proyectos
						</a>

						<a
							href="#contact"
							className="ml-10 cursor-pointer hover:border-b hover:opacity-90"
						>
							Contáctame
						</a>
					</motion.nav>

					<div onClick={handleNav} className="cursor-pointer md:hidden">
						<AiOutlineMenu size={25} />
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
						'fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10  sm:w-[60%] md:w-[45%]'
					}
				>
					<div>
						<div className="flex w-full items-center justify-between">
							<h1
								className="text-2xl font-bold sm:text-3xl md:text-4xl"
								onClick={handleNav}
							>
								<a href="#hero">JR</a>
							</h1>
							<div
								onClick={handleNav}
								className="cursor-pointer p-3 text-pink-700"
							>
								<AiOutlineClose size={25} />
							</div>
						</div>
					</div>
					<div className="flex flex-col p-4 text-xl">
						<nav onClick={handleNav} className="flex flex-col p-4 text-xl">
							<a href="#about" className="py-4 hover:opacity-90">
								Sobre mi
							</a>

							<a href="#skills" className="py-4 hover:opacity-90">
								Habilidades
							</a>

							<a href="#projects" className="py-4 hover:opacity-90">
								Proyectos
							</a>

							<a href="#contact" className="py-4 hover:opacity-90">
								Contáctame
							</a>
						</nav>
						<div className="pt-40">
							<p className="font-medium">Vamos a conectar</p>
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
