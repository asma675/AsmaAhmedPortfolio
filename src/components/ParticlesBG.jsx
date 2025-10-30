import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 

export default function ParticlesBG() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  // “links” network preset with subtle motion
  const options = {
    fullScreen: { enable: false }, 
    background: { color: "transparent" },
    fpsLimit: 60,
    particles: {
      number: { value: 90, density: { enable: true, area: 800 } },
      color: { value: "#06b6d4" }, // cyan-500
      links: { enable: true, color: "#06b6d4", opacity: 0.25, width: 1 },
      move: { enable: true, speed: 1, outModes: { default: "out" } },
      opacity: { value: 0.25 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Particles id="tsparticles" init={init} options={options} />
    </div>
  );
}
