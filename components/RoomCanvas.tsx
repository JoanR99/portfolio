import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const Room = () => {
	const room = useGLTF('./hacker_room/scene.gltf');

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
				object={room.scene}
				scale={0.05}
				position={[0, -4, 0]}
				rotation={[0, 0.6, 0]}
			/>
		</mesh>
	);
};

const RoomCanvas = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 37 }}
			gl={{ preserveDrawingBuffer: true }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Room />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default RoomCanvas;
