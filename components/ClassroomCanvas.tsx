import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Classroom = () => {
	const classroom = useGLTF('./classroom/scene.gltf');

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[10, 10, 10]}
				angle={1}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={classroom.scene}
				scale={16}
				position={[5, -1, -1.5]}
				rotation={[0, 0.5, 0]}
			/>
		</mesh>
	);
};

const ClassroomCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 10, 10], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Classroom />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default ClassroomCanvas;
