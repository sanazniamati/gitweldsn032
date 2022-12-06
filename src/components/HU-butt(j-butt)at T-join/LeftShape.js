import React from "react";
import { Arrow, Line, Shape, Text } from "react-konva";

function LeftShape(props) {
  return (
    <div>
      <Line stroke={"green"} strokeWidth={2} points={[237, 115, 237, 52]} />
      <Text x={316} y={11} text={"t2"} fontSize={40} />
      <Arrow
        points={[240, 55, 437, 55]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[441, 115, 441, 52]} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(236, 115);
          context.lineTo(329, 115);
          context.lineTo(334, 137);
          context.lineTo(343, 94);
          context.lineTo(349, 115);
          context.lineTo(442, 115);
          context.lineTo(442, 546);
          context.lineTo(351, 546);
          context.lineTo(344, 525);
          context.lineTo(334, 565);
          context.lineTo(328, 548);
          context.lineTo(237, 548);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      {/*  b */}
      <Line stroke={"green"} strokeWidth={2} points={[441, 544, 441, 647]} />
      <Text x={442} y={602} text={"b"} fontSize={40} />
      <Arrow
        points={[444, 644, 461, 644]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[464, 439, 464, 648]} />
    </div>
  );
}

export default LeftShape;
