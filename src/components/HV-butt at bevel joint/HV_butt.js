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
import BetaDegree from "./BetaDegree";

export default function HV_butt() {
  const url = "HV-butt at bevel joint.gif";
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

  return (
    <>
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
          <RightShape />
          {/*Beta*/}
          <BetaDegree />
        </Layer>
      </Stage>
    </>
  );
}
