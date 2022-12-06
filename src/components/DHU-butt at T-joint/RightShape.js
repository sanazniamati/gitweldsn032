import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({ r }) {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(460, 344);
          //  curve top
          context.arc(460, 320 - r, r, (90 * Math.PI) / 180, 0, true);
          // context.quadraticCurveTo(568, 418, 585, 225);
          context.lineTo(531, 225);
          context.lineTo(776, 225);
          context.lineTo(776, 321);
          context.lineTo(755, 326);
          context.lineTo(797, 338);
          context.lineTo(776, 342);
          context.lineTo(776, 440);
          context.lineTo(526, 438);
          //curve bottom
          context.arc(525 - r, 343 + r, r, 0, (270 * Math.PI) / 180, true);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[776, 225, 917, 225]} />
      <Text x={920} y={320} text={"t1"} fontSize={40} />
      <Arrow
        points={[917, 228, 917, 438]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[776, 440, 917, 440]} />
      {/*  C */}
      <Line stroke={"green"} strokeWidth={2} points={[460, 320, 840, 320]} />
      <Line stroke={"green"} strokeWidth={2} points={[460, 343, 840, 343]} />
      <Arrow
        points={[836, 322, 836, 341]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text x={818} y={324} text={"C"} fontSize={20} fontStyle={"bold"} />
      {/* h */}
      <Text x={821} y={380} text={"h1"} fontSize={20} fontStyle={"bold"} />
      <Arrow
        points={[810, 345, 810, 438]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      {/*    R */}
      {/*<TextPath*/}
      {/*  x={475}*/}
      {/*  y={315}*/}
      {/*  fill={"#333"}*/}
      {/*  text={"R"}*/}
      {/*  data={"M 0 0 L 300 320 "}*/}
      {/*  fontSize={30}*/}
      {/*/>*/}

      {/*<Arrow*/}
      {/*  points={[464, 322, 510, 397]}*/}
      {/*  pointerLength={5}*/}
      {/*  pointerWidth={5}*/}
      {/*  pointerAtEnding={true}*/}
      {/*  stroke={"blue"}*/}
      {/*  strokeWidth={3}*/}
      {/*/>*/}
    </Group>
  );
}

export default RightShape;
