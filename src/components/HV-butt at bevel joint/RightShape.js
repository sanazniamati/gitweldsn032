import React from "react";
import { Arrow, Line, Shape, Text, TextPath } from "react-konva";

function RightShape(props) {
  return (
    <>
      <Line stroke={"green"} strokeWidth={2} points={[868, 382, 954, 406]} />
      <TextPath
        x={891}
        y={446}
        fill={"#333"}
        text={"t1"}
        data={"M 0 0 L 300 100 "}
        fontSize={40}
      />
      <Arrow
        points={[954, 408, 904, 586]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[818, 565, 904, 588]} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(352, 441);
          context.lineTo(371, 367);
          context.lineTo(707, 336);
          context.lineTo(868, 382);
          context.lineTo(846, 462);
          context.lineTo(824, 464);
          context.lineTo(860, 485);
          context.lineTo(839, 484);
          context.lineTo(818, 565);

          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
    </>
  );
}

export default RightShape;
