 "use client";

import {Canvas} from "@react-three/fiber";
import {OrbitControls, Environment} from "@react-three/drei";
import {useState} from "react";

function ObjectPreview({finish}: {finish: "deep"|"light"}) {
  return (
    <mesh rotation={[0.15, 0.3, 0]}>
      <cylinderGeometry args={[1.1, 0.8, 2.2, 64]} />
      <meshStandardMaterial
        color={finish === "deep" ? "#17433f" : "#d7b89e"}
        roughness={finish === "deep" ? 0.35 : 0.72}
        metalness={0.08}
      />
    </mesh>
  );
}

export function Studio() {
  const [finish, setFinish] = useState<"deep"|"light">("deep");

  return (
    <div className="studio">
      <div className="studio-canvas">
        <Canvas camera={{position:[3.6,2.6,4.2], fov:45}}>
          <ambientLight intensity={1.6} />
          <directionalLight position={[4,6,3]} intensity={3} />
          <Environment preset="studio" />
          <ObjectPreview finish={finish} />
          <OrbitControls enablePan={false} />
        </Canvas>
      </div>
      <aside className="studio-panel">
        <span className="eyebrow">MATERIAL PREVIEW</span>
        <h2>Explore the finish</h2>
        <p>Replace the demo geometry with your optimized GLB model in components/studio.tsx.</p>
        <div className="button-row">
          <button className={finish === "deep" ? "button button-dark" : "button"} onClick={() => setFinish("deep")}>Deep enamel</button>
          <button className={finish === "light" ? "button button-dark" : "button"} onClick={() => setFinish("light")}>Pastel enamel</button>
        </div>
      </aside>
    </div>
  );
}
