import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Html = () => {
	const html = useGLTF('./html_logo/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={html.scene}
				scale={0.03}
				position={[0.3, -5.7, 0]}
				rotation={[0, 0, 0]}
			/>
		</mesh>
	);
};

const HtmlLogo = () => {
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
				<Html />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default HtmlLogo;
