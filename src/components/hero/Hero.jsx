import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Navbar from "../navbar/Navbar";
import "./hero.scss";

export default function Hero() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      strings: ["Developer", "Backend Developer", "Computer Engineer "],
    });
  }, []);
  return (
    <div className="hero" id="hero">
      <Navbar />
      <div className="herocontanier">
        <div className="left">
          <div className="wrapper">
            <h2>Hi I'm</h2>
            <h1>Mgbeahurike Victor</h1>
            <h3>
              Frelance <span ref={textRef}></span>
            </h3>
          </div>
        </div>
        <div className="right">
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={2.4}>
              <MeshDistortMaterial
                color={"#de5b0a"}
                attach="material"
                distort={0.5}
                speed={1}
              />
            </Sphere>
          </Canvas>
          <img src="/icon/q.png" alt="" />
        </div>
      </div>
    </div>
  );
}
