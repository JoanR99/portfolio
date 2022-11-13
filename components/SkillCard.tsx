import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const SkillCard = ({ children }: Props) => (
	<div className="flex h-12 items-center rounded-xl border p-2 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105 dark:border-[#1E293B]  dark:shadow-teal-700 sm:h-12">
		{children}
	</div>
);

export default SkillCard;
