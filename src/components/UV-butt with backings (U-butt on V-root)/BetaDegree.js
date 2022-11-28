import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function BetaDegree({ bRightShape }) {
  return (
    <Group>
      {/*Beta*/}
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[719, bRightShape, 738, bRightShape - 23]}
      />
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[648, 327, 647, bRightShape - 61]}
      />
      <Text x={691} y={158} text={"β"} fontSize={30} />
      <Arrow
        points={[750, bRightShape - 11, 742, bRightShape - 21]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[632, bRightShape - 61, 646, bRightShape - 61]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(647, bRightShape - 61);
          context.quadraticCurveTo(
            702,
            bRightShape - 61,
            741,
            bRightShape - 21
          );
          context.fillStrokeShape(shape);
        }}
        stroke="green"
        strokeWidth={2}
      />
    </Group>
  );
}

export default BetaDegree;
