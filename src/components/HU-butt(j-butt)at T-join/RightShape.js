import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({ xAdditinalLine, r }) {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(463, 415);
          context.arc(462, 415 - r, r, (90 * Math.PI) / 180, 0, true);

          // context.quadraticCurveTo(568, 418, 585, 225);
          context.lineTo(xAdditinalLine, 225);
          context.lineTo(776, 225);
          context.lineTo(776, 321);
          context.lineTo(755, 326);
          context.lineTo(797, 336);
          context.lineTo(776, 342);
          context.lineTo(776, 440);
          context.lineTo(464, 438);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[776, 224, 876, 224]} />
      <Text x={840} y={320} text={"t1"} fontSize={40} />
      <Arrow
        points={[876, 228, 876, 438]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[776, 440, 878, 440]} />
      {/*  C*/}
      <Line stroke={"green"} strokeWidth={2} points={[464, 417, 840, 417]} />
      <Arrow
        points={[836, 420, 836, 438]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={802} y={416} text={"C"} fontSize={30} />

      {/*    R */}
      <TextPath
        x={475}
        y={315}
        fill={"#333"}
        text={"R"}
        data={"M 0 0 L 300 320 "}
        fontSize={30}
      />

      <Arrow
        points={[464, 322, 510, 397]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
    </Group>
  );
}

export default RightShape;
