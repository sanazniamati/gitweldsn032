import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function LeftShape(props) {
  return (
    <Group>
      <Line stroke={"green"} strokeWidth={2} points={[151, 247, 250, 247]} />
      <Line stroke={"green"} strokeWidth={2} points={[151, 453, 260, 453]} />
      <Text text={"t2"} x={157} y={329} fontSize={40} />

      <Arrow
        points={[153, 250, 153, 449]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          // context.moveTo(250, 260);
          // context.lineTo(443, 260);
          // context.quadraticCurveTo(456, 398, 548, 409);
          // // context.arc(577, 310, 105, 0, (90 * Math.PI) / 180);
          //
          // context.lineTo(548, 455);
          // context.lineTo(250, 455);
          // context.lineTo(250, 368);
          // context.lineTo(268, 362);
          // context.lineTo(235, 351);
          // context.lineTo(250, 344);
          context.moveTo(548, 455);
          // context.lineTo(548, 409);
          // context.quadraticCurveTo(456, 398, 548, 409);
          context.arc(
            548,
            310,
            105,
            (90 * Math.PI) / 180,
            (180 * Math.PI) / 180,
            false
          );

          context.lineTo(443, 247);
          context.lineTo(250, 247);
          context.lineTo(250, 344);
          context.lineTo(235, 351);
          context.lineTo(268, 362);
          context.lineTo(250, 368);
          context.lineTo(250, 455);
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
