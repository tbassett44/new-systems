import { useEffect } from "react";

const AetherAI = () => {
  useEffect(() => {
    document.title = "Aether AI | New Systems";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Aether AI - New Systems");
    }
  }, []);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold tracking-tight">Aether AI</h1>
    </div>
  );
};

export default AetherAI;
