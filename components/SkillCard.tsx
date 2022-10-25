import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const SkillCard = ({ children }: Props) => (
	<div className="flex h-12 items-center rounded-xl border border-solid p-2 shadow-xl duration-300 ease-in hover:scale-105 sm:h-12">
		{children}
	</div>
);

export default SkillCard;
