import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Web = () => {
	const web = useGLTF('./web_development/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={0.3} />
			<spotLight
				position={[10, 10, 10]}
				angle={1}
				penumbra={1}
				intensity={0.1}
			/>
			<primitive
				object={web.scene}
				scale={1.3}
				position={[0, -3, 2.5]}
				rotation={[0, 0, 0]}
			/>
		</mesh>
	);
};

const WebDev = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [18, 3, 5], fov: 37 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Web />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default WebDev;
