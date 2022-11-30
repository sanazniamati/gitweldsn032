import React from "react";
import { Arrow, Group, Line, Text } from "react-konva";

function BottomShape({
  xCordinateLeftShape,
  xCordinateRightShape,
  bPlas,
  aLeftShape,
}) {
  return (
    <Group>
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[aLeftShape, 612, aLeftShape, 679]}
      />
      <Text x={500} y={643} text={"b"} fontSize={30} />

      <Arrow
        x={xCordinateLeftShape}
        points={[aLeftShape - 2, 679, bPlas, 679]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[524, 612, 524, 679]}
      />
    </Group>
  );
}

export default BottomShape;
