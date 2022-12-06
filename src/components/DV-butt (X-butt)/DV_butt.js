import React from "react";
import {
  Arrow,
  Group,
  Image,
  Layer,
  Line,
  Shape,
  Stage,
  Text,
  TextPath,
} from "react-konva";
import LeftShape from "./LeftShape";
import RightShape from "./RightShape";
import useImage from "use-image";
import { useState } from "react";

function DV_butt(props) {
  const url = "DV-butt (X-butt).gif";

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
          {/*<Image x={95} y={40} image={image} />*/}
          <Text text={text} x={10} y={50} fontSize={20} />
        </Group>
        <LeftShape />
        <RightShape />

        {/*alfa1 Degree*/}
        <Text x={538} y={251} text={"α1"} fontSize={40} fontStyle={"bold"} />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(530, 292);
            context.quadraticCurveTo(558, 280, 588, 292);
            context.fillStrokeShape(shape);
          }}
          stroke="blue"
          strokeWidth={2}
        />
        <Arrow
          points={[578, 288, 588, 292]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={2}
        />
        <Arrow
          points={[540, 288, 530, 292]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={2}
        />
        {/*  alfa2 degree */}
        <Line stroke={"green"} strokeWidth={2} points={[505, 452, 486, 497]} />
        <Line stroke={"green"} strokeWidth={2} points={[611, 452, 629, 497]} />
        <Text x={532} y={515} text={"α2"} fontSize={40} fontStyle={"bold"} />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(486, 497);
            context.quadraticCurveTo(553, 531, 629, 497);
            context.fillStrokeShape(shape);
          }}
          stroke="blue"
          strokeWidth={2}
        />
        <Arrow
          points={[500, 503, 485, 496]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={2}
        />
        <Arrow
          points={[609, 504, 629, 498]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={2}
        />
      </Layer>
    </Stage>
  );
}

export default DV_butt;
