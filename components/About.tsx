import Developer from './Developer';
import HackerSVG from './hacker';
import SvgContainer from './SvgContainer';

const About = () => (
	<div className="min-h-screen scroll-mt-24" id="about">
		<h3 className="text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
			Sobre mi
		</h3>
		<div className="mt-4 mb-4 flex flex-col align-middle sm:mt-6 sm:gap-8 md:flex-row md:justify-between">
			<p className="mb-4 md:w-3/6">
				Mi viaje en el mundo de la programación comenzó con las primeras clases
				de programación básica cursadas en la universidad. Para ese entonces, mi
				conocimiento en cuanto al desarrollo web y la programación eran
				prácticamente nulos, a tal punto que tenía el pensamiento cliché de que
				todos los programadores eran alguna clase de hacker. De esta manera, a
				través del lenguaje C++ aprendí las nociones básicas de la programación,
				desarrollando pequeños programas que eran ejecutados en la consola.
				Posteriormente, comencé a estudiar HTML, CSS, JavaScript y PHP con el
				fin de desarrollar programas más complejos y con interfaces de usuario
				atractivas para cumplir con los proyectos asignados en la universidad.
			</p>
			<SvgContainer>
				<HackerSVG />
			</SvgContainer>
		</div>
		<div className="mt-4 mb-4 flex flex-col-reverse align-middle sm:mt-16 md:flex-row md:justify-between md:gap-8">
			<SvgContainer>
				<Developer />
			</SvgContainer>
			<p className="mb-4 md:w-3/6">
				Así, el primer proyecto que realice como practica con estas tecnologías
				consistió en un pequeño repositorio con el fin de almacenar y organizar
				información requerida para ayudar a personas de una zona rural donde
				viven algunos familiares a optar a bonos que brinda el gobierno a través
				de un portal web, siendo esta la primera vez que comprendí que quería
				dedicarme a esta profesión, ya que sentí una satisfacción inmensa al ver
				que podía desarrollar software que fuera de alguna utilidad. Desde
				entonces decidí especializarme en desarrollo web, aprendiendo tanto de
				forma autodidacta como a través de cursos y bootcamps.
			</p>
		</div>
	</div>
);

export default About;
