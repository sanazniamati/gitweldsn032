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
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(539, 442);
          //curve with 20 radius
          context.arc(
            539,
            439 - 20,
            20,
            (90 * Math.PI) / 180,
            (140 * Math.PI) / 180,
            false
          );
          context.lineTo(477, 389);
          context.lineTo(459, 256);
          context.lineTo(263, 256);
          context.lineTo(264, 339);
          context.lineTo(247, 347);
          context.lineTo(283, 354);
          context.lineTo(264, 358);
          context.lineTo(264, 442);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        // fill={"lightGray"}
        strokeWidth={2}
      />
    </Group>
  );
}

export default LeftShape;
