import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({ bRightShape, ySPLeftShape }) {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(566, 442);

          context.lineTo(566, 422);
          context.lineTo(593, 375);
          context.lineTo(622, 246);
          context.lineTo(853, 247);
          context.lineTo(853, 339);
          context.lineTo(832, 341);
          context.lineTo(870, 351);
          context.lineTo(853, 355);
          context.lineTo(853, 442);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={4}
      />
      <Line stroke={"green"} strokeWidth={2} points={[853, 247, 975, 247]} />
      <Line stroke={"green"} strokeWidth={2} points={[853, 442, 975, 442]} />
      <Arrow
        points={[975, 249, 975, 440]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={925} y={333} text={"t1"} fontSize={40} />

      {/*line and Arrow for calc h */}
      <Line stroke={"green"} strokeWidth={2} points={[592, 377, 944, 380]} />
      <Arrow
        points={[942, 382, 942, 439]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={895} y={383} text={"h1"} fontSize={30} />

      {/* line and Arrow for calc c  */}
      <Line stroke={"green"} strokeWidth={2} points={[566, 422, 910, 422]} />
      <Line stroke={"blue"} strokeWidth={2} points={[907, 420, 907, 438]} />
      <Arrow
        points={[907, 409, 907, 419]}
        pointerLength={5}
        pointerWidth={5}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[907, 452, 907, 441]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={887} y={418} text={"c"} fontSize={30} />

      {/*Beta*/}
      {/*  aditinal line */}
      <Line stroke={"green"} strokeWidth={2} points={[622, 244, 633, 189]} />
      <Line stroke={"green"} strokeWidth={2} points={[593, 368, 593, 186]} />
      <Text x={607} y={158} text={"β"} fontSize={30} />
      <Arrow
        points={[653, 196, 633, 192]}
        pointerAtEnding={true}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[573, 192, 593, 188]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(593, 189);
          context.quadraticCurveTo(615, 185, 632, 192);
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
      {/*line and Arrow for calc b */}
      <Line stroke={"green"} strokeWidth={2} points={[566, 443, 566, 516]} />
      <Line stroke={"green"} strokeWidth={2} points={[546, 443, 546, 516]} />
      <Line stroke={"blue"} strokeWidth={2} points={[566, 512, 546, 512]} />
      <Arrow
        points={[526, 512, 546, 512]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[586, 512, 566, 512]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={547} y={484} text={"b"} fontSize={30} />
    </Group>
  );
}

export default RightShape;
