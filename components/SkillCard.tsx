import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const SkillCard = ({ children }: Props) => (
	<div className="flex h-12 w-fit items-center rounded-xl border py-2 px-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105 dark:border-[#1E293B]  dark:shadow-teal-700 sm:h-12">
		{children}
	</div>
);

export default SkillCard;
