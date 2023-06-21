import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {

  const { animation } = useControls({
    animation: {
      value: "Sitting Pose",
      options: ["Sitting Pose", "Thriller", "Wave"],
    },
  });
  return (
    <>
      <OrbitControls />
      <group position={[0, -0.5, 0]}>
        <Avatar animation={animation} />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};
