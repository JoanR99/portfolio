import Image from 'next/image';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const Hero = () => {
	const [text, count] = useTypewriter({
		words: ['Desarrollador Full Stack', 'Ingeniero de Sistemas'],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<main className="min-h-screen pt-24 sm:pt-28 md:pt-32" id="hero">
			<h2 className="text-center text-2xl font-bold sm:text-3xl md:mb-2 md:text-4xl lg:text-5xl">
				¿Hola que tal? Soy <span className="text-teal-600">Joan Romero</span>
			</h2>
			<h2 className="text-center text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
				<span className="text-teal-600">{text}</span>
				<Cursor cursorColor="#0D9488" />
			</h2>
			<p className="text-md mt-6 text-center sm:mt-8 sm:text-lg md:text-xl">
				Puedo desarrollar aplicaciones full stack con tecnologías como
				JavaScript, TypeScript, React, Node, Express, Nest, PostgreSQL o MongoDB
			</p>
			<div className="mt-5 flex justify-center align-middle">
				<motion.a
					initial={{
						x: -200,
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
					href="https://www.linkedin.com/in/joanr99/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsLinkedin className="mr-4 h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-8 sm:w-8" />
				</motion.a>
				<motion.a
					initial={{
						x: 200,
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
					href="https://github.com/JoanR99"
					target="_blank"
					rel="noopener noreferrer"
				>
					<BsGithub className="mr-4 h-6 w-6 text-pink-700  hover:scale-105 hover:opacity-90 sm:h-8 sm:w-8" />
				</motion.a>
			</div>
			<motion.div
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 1.5,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				className="mt-12 flex justify-center"
			>
				<Image
					src="/images/profile.jpg"
					alt="profile"
					width={200}
					height={200}
					className="rounded-full"
				/>
			</motion.div>

			<div className="mt-8 flex justify-center">
				<motion.button
					initial={{
						y: 100,
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
					whileHover={{
						scale: 1.05,
						opacity: 0.9,
						transition: { duration: 0.1 },
					}}
					className="rounded-xl border border-solid border-pink-700 bg-pink-700 p-2 font-medium text-white shadow-xl shadow-gray-400"
				>
					Descargar CV
				</motion.button>
			</div>
		</main>
	);
};

export default Hero;
