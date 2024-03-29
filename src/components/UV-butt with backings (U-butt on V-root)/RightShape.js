import React from "react";
import { Arrow, Group, Line, Shape, TextPath } from "react-konva";

function RightShape({
  xBeta,
  bRightShape,
  fRightShape,
  kRightShape,
  jRightShape,
  hRightShape,
  ySPLeftShape,
  r,
  initialXSPRightShape,
}) {
  return (
    <Group>
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[858, bRightShape, 950, bRightShape]}
      />
      <Line stroke={"green"} strokeWidth={2} points={[858, 458, 950, 458]} />
      <Arrow
        points={[950, bRightShape + 3, 950, 456]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <TextPath
        x={902}
        y={ySPLeftShape - 25}
        fill={"#333"}
        data={"M 0 100 L 0 50"}
        text={"h"}
        fontSize={30}
      />
      <TextPath
        x={936}
        y={bRightShape + 25}
        fill={"#333"}
        data={"M 0 100 L 0 50"}
        text={"t1"}
        fontSize={30}
      />
      {/*line and Arrow for calc h */}
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[initialXSPRightShape, ySPLeftShape, 913, ySPLeftShape]}
      />
      <Arrow
        points={[913, ySPLeftShape, 913, 456]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(xBeta, bRightShape);
          context.lineTo(858, bRightShape);
          context.lineTo(857, kRightShape);
          context.lineTo(838, jRightShape);
          context.lineTo(876, hRightShape);
          context.lineTo(858, fRightShape);
          context.lineTo(857, 458);
          context.lineTo(561, 457);
          // context.arcTo(645, 349, 720, bRightShape, radius);
          // context.quadraticCurveTo(645, 349, 720, bRightShape);
          context.arc(
            initialXSPRightShape,
            ySPLeftShape - r,
            r,
            (90 * Math.PI) / 180,
            (40 * Math.PI) / 180,
            true
          );
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
    </Group>
  );
}

export default RightShape;
