import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape({
  xCordinateLeftShape,
  aLeftShape,
  x1LeftShape,
  x2LeftShape,
  x3LeftShape,
  x4LeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[378, 73, 378, 17]}
      />
      <Text x={xCordinateLeftShape + 420} y={21} text={"t2"} fontSize={20} />
      <Arrow
        x={xCordinateLeftShape}
        points={[380, 17, aLeftShape - 2, 17]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[aLeftShape, 73, aLeftShape, 17]}
      />

      <Shape
        x={xCordinateLeftShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(378, 73);
          //
          context.lineTo(x1LeftShape, 73);
          context.lineTo(x2LeftShape, 89);
          context.lineTo(x3LeftShape, 54);
          context.lineTo(x4LeftShape, 73);
          //
          context.lineTo(aLeftShape, 73);
          context.lineTo(aLeftShape, 612);
          context.lineTo(x4LeftShape, 612);
          context.lineTo(x3LeftShape, 596);
          context.lineTo(x2LeftShape, 628);
          context.lineTo(x1LeftShape, 612);
          context.lineTo(378, 612);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="lightgrey"
        stroke="red"
        strokeWidth={3}
      />
    </Group>
  );
}

export default LeftShape;
