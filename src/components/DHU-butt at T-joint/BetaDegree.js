import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function BetaDegree({ r }) {
  return (
    <Group>
      {/*Beta*/}
      <Line stroke={"green"} strokeWidth={2} points={[532, 223, 539, 170]} />
      <Line stroke={"green"} strokeWidth={2} points={[524, 255, 524, 170]} />
      <Text x={520} y={140} text={"β"} fontSize={25} />
      <Arrow
        points={[510, 175, 524, 170]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[555, 175, 539, 170]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(539, 170);
          context.quadraticCurveTo(531, 168, 524, 170);
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
      {/*  R*/}
      <Arrow
        points={[461, 250, 510, 220 + r]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <TextPath
        x={471}
        y={230}
        fill={"#333"}
        text={"R"}
        data={"M 0 0 L 300 320 "}
        fontSize={30}
      />
    </Group>
  );
}

export default BetaDegree;
