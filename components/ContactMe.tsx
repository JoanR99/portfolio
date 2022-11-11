import ContactMeSVG from './ContactMeSVG';
import FormContact from './FormContact';
import SvgContainer from './SvgContainer';

const ContactMe = () => (
	<div id="contact" className="my-8 mt-24 min-h-screen scroll-mt-24">
		<h3 className="mb-8 text-xl font-bold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
			Contáctame
		</h3>

		<div className="flex flex-col align-middle md:flex-row md:items-center md:justify-between">
			<SvgContainer>
				<ContactMeSVG />
			</SvgContainer>
			<FormContact />
		</div>
	</div>
);

export default ContactMe;
