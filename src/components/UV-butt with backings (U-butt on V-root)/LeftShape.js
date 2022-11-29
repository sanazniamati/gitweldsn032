import React from "react";
import { Arrow, Group, Line, Shape, TextPath } from "react-konva";

function LeftShape({
  bLeftShape,
  fLeftShape,
  hLeftShape,
  kLeftShape,
  jLeftShape,
  xAlfa,
  yCPLeftShape,
  yEPLeftShape,
}) {
  return (
    <Group>
      <Line
        stroke={"green"}
        strokeWidth={2}
        points={[171, bLeftShape, 265, bLeftShape]}
      />
      <Line stroke={"green"} strokeWidth={2} points={[171, 458, 265, 458]} />
      <Arrow
        points={[174, bLeftShape + 3, 174, 455]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <TextPath
        x={161}
        y={bLeftShape + 25}
        fill={"#333"}
        data={"M 0 100 L 0 50"}
        text={"t2"}
        fontSize={30}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(265, bLeftShape);
          context.lineTo(414, bLeftShape);
          context.arcTo(480, yCPLeftShape, 512, yEPLeftShape, 60);
          // context.quadraticCurveTo(480, yCPLeftShape, 512, yEPLeftShape);
          context.lineTo(xAlfa, 457);
          context.lineTo(264, 457);
          context.lineTo(264, fLeftShape);
          context.lineTo(283, hLeftShape);
          context.lineTo(247, jLeftShape);
          context.lineTo(264, kLeftShape);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        // fill={"lightGray"}
        strokeWidth={4}
      />
    </Group>
  );
}

export default LeftShape;
