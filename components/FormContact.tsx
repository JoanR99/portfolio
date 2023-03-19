import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Theme, toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';
import Input from './Input';
import Textarea from './Textarea';
import { useTheme } from 'next-themes';

const FormContact = () => {
	const { t } = useTranslation('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const { systemTheme, theme } = useTheme();
	const [loading, setLoading] = useState(false);

	const currentTheme = theme === 'system' ? systemTheme : theme;

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setLoading(true);

		emailjs
			.sendForm(
				'service_0nsxq5w',
				'template_mnciwbw',
				e.target as any,
				'eYgFS2O2pJ3spV5xr'
			)
			.then(
				(result) => {
					setFirstName('');
					setLastName('');
					setEmail('');
					setMessage('');
					toast.success(t('contact.form.success') as string, {
						autoClose: 2000,
						hideProgressBar: true,
						closeButton: true,
						theme: currentTheme as Theme,
					});
					setLoading(false);
				},
				(error) => {
					toast.error(t('contact.form.fail') as string, {
						autoClose: 2000,
						hideProgressBar: true,
						closeButton: true,
						theme: currentTheme as Theme,
					});
					setLoading(false);
				}
			);
	};

	return (
		<form
			onSubmit={submitHandler}
			className="mt-8 flex flex-col justify-between gap-4 rounded-xl border bg-neutral-100 p-4 shadow-xl shadow-gray-400 dark:border-[#1E293B] dark:bg-slate-900 dark:shadow-teal-700  md:w-3/6"
		>
			<div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
				<div className="flex w-full flex-col gap-1 sm:w-1/2">
					<label htmlFor="firstName" className="bold ">
						{t('contact.form.f_name')}
					</label>
					<Input
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						name="firstName"
						id="firstName"
					/>
				</div>

				<div className="flex w-full flex-col gap-1 sm:w-1/2">
					<label htmlFor="lastName" className="bold ">
						{t('contact.form.s_name')}
					</label>
					<Input
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						type="text"
						name="lastName"
						id="lastName"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="email" className="bold ">
					{t('contact.form.email')}
				</label>
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					id="email"
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="message" className="bold ">
					{t('contact.form.message')}
				</label>
				<Textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					id="message"
				/>
			</div>

			<button
				className="rounded-xl border border-solid border-pink-700 bg-pink-700 p-2 font-medium text-white"
				disabled={loading}
			>
				{loading ? 'Sending...' : t('contact.form.send')}
			</button>
		</form>
	);
};

export default FormContact;
