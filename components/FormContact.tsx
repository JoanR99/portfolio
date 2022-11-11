import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const FormContact = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

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
					toast.success('Message sent successfully!', {
						autoClose: 2000,
						hideProgressBar: true,
						closeButton: true,
					});
				},
				(error) => {
					toast.error('Can not sent message!', {
						autoClose: 2000,
						hideProgressBar: true,
						closeButton: true,
					});
				}
			);
	};

	return (
		<form
			onSubmit={submitHandler}
			className="mt-8 flex flex-col justify-between gap-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:w-3/6"
		>
			<div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
				<div className="flex w-full flex-col gap-1 sm:w-1/2">
					<label htmlFor="firstName" className="bold ">
						First Name
					</label>
					<input
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						type="text"
						name="firstName"
						id="firstName"
						className="rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2"
					/>
				</div>

				<div className="flex w-full flex-col gap-1 sm:w-1/2">
					<label htmlFor="lastName" className="bold ">
						Last Name
					</label>
					<input
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						type="text"
						name="lastName"
						id="lastName"
						className="rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2"
					/>
				</div>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="email" className="bold ">
					Email Address
				</label>
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					name="email"
					id="email"
					className="rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2"
				/>
			</div>

			<div className="flex flex-col gap-1">
				<label htmlFor="message" className="bold ">
					Message
				</label>
				<textarea
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					name="message"
					id="message"
					className="resize-none rounded-xl border border-solid border-gray-400 bg-gray-200 p-1 indent-2"
					rows={4}
				/>
			</div>

			<button className="rounded-xl border border-solid border-pink-700 bg-pink-700 p-2 font-medium text-white">
				Send
			</button>
		</form>
	);
};

export default FormContact;
