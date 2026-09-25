import {Studio} from "@/components/studio";

export default function StudioPage() {
  return (
    <div className="shell">
      <header className="page-header">
        <span className="eyebrow">3D</span>
        <h1>Studio</h1>
        <p>Interactive material preview. Replace the demo object with your product GLB when ready.</p>
      </header>
      <Studio />
    </div>
  );
}
