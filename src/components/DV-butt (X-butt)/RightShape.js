import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({ bRightShape, ySPLeftShape }) {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(612, 455);
          context.lineTo(574, 361);
          context.lineTo(573, 329);
          context.lineTo(595, 272);
          context.lineTo(853, 273);
          context.lineTo(853, 355);
          context.lineTo(836, 359);
          context.lineTo(869, 367);
          context.lineTo(853, 372);
          context.lineTo(853, 454);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
      <Line stroke={"green"} strokeWidth={2} points={[853, 272, 975, 272]} />
      <Line stroke={"green"} strokeWidth={2} points={[853, 453, 975, 453]} />
      <Arrow
        points={[975, 275, 975, 450]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={928} y={281} text={"t1"} fontSize={40} />

      {/*line and Arrow for calc h */}
      <Line stroke={"green"} strokeWidth={2} points={[573, 362, 909, 362]} />
      <Arrow
        points={[909, 364, 909, 451]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={861} y={395} text={"h1"} fontSize={30} fontStyle={"bold"} />

      {/* line and Arrow for calc c  */}
      <Line stroke={"green"} strokeWidth={2} points={[573, 329, 944, 329]} />
      <Arrow
        points={[942, 332, 942, 451]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={910} y={330} text={"c"} fontSize={30} fontStyle={"bold"} />

      {/*line and Arrow for calc b */}
      <Line stroke={"green"} strokeWidth={2} points={[572, 359, 572, 487]} />
      <Line stroke={"green"} strokeWidth={2} points={[544, 359, 544, 487]} />
      <Line stroke={"blue"} strokeWidth={2} points={[572, 487, 544, 487]} />
      <Arrow
        points={[523, 487, 543, 487]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[590, 486, 571, 486]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={547} y={454} text={"b"} fontSize={30} />
    </Group>
  );
}

export default RightShape;
