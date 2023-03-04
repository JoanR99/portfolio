import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { random } from 'maath';

type Rotation = {
	rotation: {
		x: number;
		y: number;
	};
};

const Stars = () => {
	const ref = useRef();

	const sphere = random.inSphere(new Float32Array(1000), {
		radius: 1.2,
	}) as Float32Array;

	useFrame((state, delta) => {
		if (!ref.current) return;
		(ref.current as Rotation).rotation.x -= delta / 10;
		(ref.current as Rotation).rotation.y -= delta / 15;
	});

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

const StarsCanvas = () => {
	return (
		<div className="absolute inset-0 z-[-1] h-auto w-full">
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>

				<Preload all />
			</Canvas>
		</div>
	);
};

export default StarsCanvas;
