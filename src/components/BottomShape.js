import React from "react";
import { Arrow, Group, Line, Rect, Text } from "react-konva";

function BottomShape({
  xCordinateRightShape,
  yBetaBigLine,
  xCordinateLeftShape,
  bPlas,
  width,
}) {
  return (
    <Group>
      <Line
        x={xCordinateRightShape}
        stroke={"red"}
        strokeWidth={2}
        points={[598, yBetaBigLine, 598, 554]}
      />
      <Line
        x={xCordinateLeftShape}
        stroke={"green"}
        strokeWidth={2}
        points={[527, 423, 527, 554]}
      />
      <Arrow
        x={xCordinateLeftShape}
        points={[530, 550, bPlas, 550]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"red"}
        strokeWidth={3}
      />
      <Rect
        x={xCordinateLeftShape + 404}
        y={426}
        width={width}
        height={54}
        stroke={"blue"}
        strokeWidth={4}
      />
      <Text x={555} y={510} text={"b"} fontSize={40} />
    </Group>
  );
}

export default BottomShape;
