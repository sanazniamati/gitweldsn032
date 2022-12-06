import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function BetaDegree({ xAdditinalLine, x2AdditinalLine }) {
  return (
    <Group>
      {/*  additinal line*/}
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[xAdditinalLine, 223, x2AdditinalLine, 158]}
      />
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[571, 415 - 110, 559, 151]}
      />
      <Text x={572} y={120} text={"β"} fontSize={30} />
      <Arrow
        points={[614, 171, 600, 164]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[540, 162, 558, 160]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(559, 160);
          context.quadraticCurveTo(576, 155, 595, 163);
          context.fillStrokeShape(shape);
        }}
        stroke="green"
        strokeWidth={2}
      />
    </Group>
  );
}

export default BetaDegree;
