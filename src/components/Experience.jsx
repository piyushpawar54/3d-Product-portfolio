import { Environment, useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

const Loading = () => 'Loading...';

export default function Experience() {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf'
  );

  return (
    <Suspense fallback={<Loading />}>
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 2000,
          position: [-3, 1.5, 4],
        }}
        style={{ width: '50%', height: '100vh' }}
      >
        <OrbitControls makeDefault />
        <Environment preset="city" />
        {!!computer ? (
          <primitive object={computer.scene} position-y={-1.2} />
        ) : (
          'Loading...'
        )}
      </Canvas>{' '}
    </Suspense>
  );
}
