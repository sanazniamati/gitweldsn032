import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function LeftShape({}) {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(504, 454);
          context.lineTo(543, 364);
          context.lineTo(543, 328);
          context.lineTo(514, 256);
          context.lineTo(264, 256);
          context.lineTo(264, 346);
          context.lineTo(244, 349);
          context.lineTo(281, 359);
          context.lineTo(264, 365);
          context.lineTo(264, 454);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
      <Line stroke={"green"} strokeWidth={2} points={[266, 256, 137, 256]} />
      <Line stroke={"green"} strokeWidth={2} points={[263, 454, 137, 454]} />
      <Arrow
        points={[139, 258, 139, 452]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={143} y={333} text={"t2"} fontSize={40} />
    </Group>
  );
}

export default LeftShape;
