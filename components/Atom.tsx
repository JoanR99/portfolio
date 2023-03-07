import { Suspense, useMemo } from 'react';
import { Line, OrbitControls, Sphere } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

const Shape = () => {
	const points = useMemo(
		() =>
			new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
				100
			),
		[]
	);
	return (
		<group>
			<Line worldUnits points={points} color="#5ED3F3" lineWidth={0.3} />
			<Line
				worldUnits
				points={points}
				color="#5ED3F3"
				lineWidth={0.3}
				rotation={[0, 0, 1]}
			/>
			<Line
				worldUnits
				points={points}
				color="#5ED3F3"
				lineWidth={0.3}
				rotation={[0, 0, -1]}
			/>
			<Sphere args={[0.55, 64, 64]}>
				<meshBasicMaterial color="#5ED3F3" toneMapped={false} />
			</Sphere>
		</group>
	);
};

const AtomShape = () => {
	return (
		<>
			<Shape />
			<EffectComposer>
				<Bloom mipmapBlur luminanceThreshold={1} radius={0.7} />
			</EffectComposer>
		</>
	);
};

const Atom = () => (
	<Canvas camera={{ position: [0, 0, 10], fov: 35 }}>
		<Suspense fallback={null}>
			<AtomShape />
			<OrbitControls enableZoom={false} />
		</Suspense>
	</Canvas>
);

export default Atom;
