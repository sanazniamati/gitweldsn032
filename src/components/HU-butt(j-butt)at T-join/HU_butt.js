import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
  TextPath,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import RightShape from "./RightShape";
import BetaDegree from "./BetaDegree";
import LeftShape from "./LeftShape";

export default function HU_butt() {
  const url = "img.gif";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };
  const [r, setR] = useState(110);
  const initialC = 438 - 414;
  const initialT1 = 438 - 225;
  const [beta, setBeta] = useState(45);
  const xAdditinalLine =
    Math.tan((beta * Math.PI) / 180) * initialT1 - (initialC + r) + 505;

  let x2AdditinalLine = xAdditinalLine + 15 * Math.tan((beta * Math.PI) / 180);

  const handelIncBeta = () => {
    setBeta(beta + 5);
  };
  const handelDecBeta = () => {
    setBeta(beta - 5);
  };
  const handelIncR = () => {
    setR(r + 5);
  };
  const handelDecR = () => {
    setR(r - 5);
  };
  return (
    <>
      <button onClick={handelIncBeta}>Beta +</button>
      <button onClick={handelDecBeta}>Beta -</button>
      <button onClick={handelIncR}>R +</button>
      <button onClick={handelDecR}>R -</button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        ref={stageRef}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Group>
            {/*<Image x={100} y={10} image={image} />*/}
            <Text text={text} x={503} y={17} fontSize={20} />
          </Group>
          {/*  left shape */}
          <LeftShape />
          {/*Right shape*/}
          <RightShape xAdditinalLine={xAdditinalLine} r={r} />
          {/*Beta*/}
          <BetaDegree
            xAdditinalLine={xAdditinalLine}
            x2AdditinalLine={x2AdditinalLine}
          />
        </Layer>
      </Stage>
    </>
  );
}
