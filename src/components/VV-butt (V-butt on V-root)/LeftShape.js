import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function LeftShape() {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(547, 442);

          context.lineTo(547, 422);
          context.lineTo(519, 378);
          context.lineTo(496, 258);
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
        strokeWidth={4}
      />
      <Line stroke={"green"} strokeWidth={2} points={[266, 256, 137, 256]} />
      <Line stroke={"green"} strokeWidth={2} points={[266, 445, 137, 445]} />
      <Arrow
        points={[137, 258, 137, 443]}
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
