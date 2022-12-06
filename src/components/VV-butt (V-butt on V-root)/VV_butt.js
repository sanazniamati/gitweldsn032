import React from "react";
import {
  Arrow,
  Group,
  Image,
  Layer,
  Shape,
  Stage,
  Text,
  TextPath,
} from "react-konva";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import useImage from "use-image";
import { useState } from "react";

function VV_butt(props) {
  const url = "VV-butt (V-butt on V-root).gif";
  const [image] = useImage(url);

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
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          {/*<Image x={95} image={image} />*/}
          <Text text={text} x={10} y={50} fontSize={20} />
        </Group>
        <LeftShape />
        <RightShape />

        {/*alfa Degree*/}
        <Text x={538} y={342} text={"α1"} fontSize={40} fontStyle={"bold"} />
        <Arrow
          points={[525, 405, 535, 399]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(535, 399);
            context.quadraticCurveTo(558, 388, 578, 399);
            context.fillStrokeShape(shape);
          }}
          stroke="green"
          strokeWidth={2}
        />
        <Arrow
          points={[588, 405, 578, 399]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
      </Layer>
    </Stage>
  );
}

export default VV_butt;
