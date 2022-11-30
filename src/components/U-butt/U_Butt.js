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
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import BottomShape from "./BottomShape";

export default function U_Butt() {
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
  //Right Shape
  const [r, setR] = useState(90);
  //first control point right shape
  const [fCPRightShape, setFCPRightShape] = useState(665);
  const handelIncR = () => {
    if (r >= 95) {
      setFCPRightShape(fCPRightShape + 10);
      setR(r + 5);
    } else {
      setR(r + 5);
    }
    console.log("fCPRightShape" + fCPRightShape);
    console.log("r" + r);
  };
  const handelDecR = () => {
    setR(r - 5);
    console.log("r" + r);
  };

  return (
    <>
      <button onClick={handelIncR}>R + </button>
      <button onClick={handelDecR}> R - </button>
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
            <Text text={text} x={10} y={50} fontSize={20} />
          </Group>
          <LeftShape />
          <RightShape r={r} fCPRightShape={fCPRightShape} />
          <BottomShape />
        </Layer>
      </Stage>
    </>
  );
}
