import React from "react";
import { Arrow, Line, Shape, Text } from "react-konva";

function LeftShape(props) {
  return (
    <>
      <Line stroke={"green"} strokeWidth={2} points={[197, 152, 197, 52]} />
      <Text x={256} y={21} text={"t2"} fontSize={40} />
      <Arrow
        points={[199, 62, 349, 62]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[351, 152, 351, 52]} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(197, 152);
          context.lineTo(266, 153);
          context.lineTo(268, 185);
          context.lineTo(278, 121);
          context.lineTo(281, 151);
          context.lineTo(351, 152);
          context.lineTo(351, 539);
          context.lineTo(283, 539);
          context.lineTo(277, 507);
          context.lineTo(269, 571);
          context.lineTo(267, 539);
          context.lineTo(197, 539);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
    </>
  );
}

export default LeftShape;
