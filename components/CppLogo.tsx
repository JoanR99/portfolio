import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Cpp = () => {
	const cpp = useGLTF('./c/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 20, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={cpp.scene}
				scale={0.11}
				position={[0.3, 0, 0]}
				rotation={[0, 0, 0]}
			/>
		</mesh>
	);
};

const CppLogo = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			gl={{ preserveDrawingBuffer: true }}
			camera={{ position: [0, 0, 10], fov: 45 }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Cpp />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default CppLogo;
