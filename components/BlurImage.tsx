import Image from 'next/image';

type Props = {
	src: string;
	alt: string;
};

const BlurImage = ({ src, alt }: Props) => (
	<div className="aspect-w-2 aspect-h-1 w-full overflow-hidden rounded-lg">
		<Image alt={alt} src={src} layout="fill" objectFit="cover" />
	</div>
);

export default BlurImage;
