import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({
  xBeta,
  bRightShape,
  fRightShape,
  kRightShape,
  jRightShape,
  hRightShape,
  ySPLeftShape,
  radius,
  initialXSP,
}) {
  return (
    <Group>
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(539, 442);
          context.arc(
            539,
            439 - 20,
            20,
            (90 * Math.PI) / 180,
            (40 * Math.PI) / 180,
            true
          );
          context.lineTo(597, 389);
          context.lineTo(616, 256);
          context.lineTo(817, 256);
          context.lineTo(817, 339);
          context.lineTo(798, 344);
          context.lineTo(835, 352);
          context.lineTo(817, 359);
          context.lineTo(817, 442);
          // context.arcTo(645, 349, 720, bRightShape, radius);
          // context.quadraticCurveTo(645, 349, 720, bRightShape);
          // context.lineTo(720, bRightShape);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={2}
      />
      <Line stroke={"green"} strokeWidth={2} points={[815, 256, 940, 256]} />
      <Line stroke={"green"} strokeWidth={2} points={[815, 443, 940, 443]} />
      <Arrow
        points={[940, 256 + 3, 940, 440]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />

      <TextPath
        x={926}
        y={bRightShape}
        fill={"#333"}
        data={"M 0 100 L 0 50"}
        text={"t1"}
        fontSize={30}
      />
      {/*line and Arrow for calc h */}
      <Line stroke={"green"} strokeWidth={2} points={[595, 387, 880, 387]} />
      <Arrow
        points={[880, 389, 880, 439]}
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
      {/* line and Arrow for calc c  */}
      <Line stroke={"green"} strokeWidth={2} points={[551, 434, 880, 434]} />
      <Line stroke={"blue"} strokeWidth={2} points={[868, 434, 868, 444]} />
      <TextPath
        x={849}
        y={366}
        fill={"#333"}
        data={"M 0 100 L 0 50"}
        text={"c"}
        fontSize={30}
      />
      <Arrow
        points={[868, 469, 868, 445]}
        pointerLength={5}
        pointerWidth={5}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[868, 410, 868, 433]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />

      {/*Beta*/}
      {/*  aditinal line */}
      <Line stroke={"green"} strokeWidth={2} points={[617, 255, 637, 202]} />
      <Line stroke={"green"} strokeWidth={2} points={[600, 360, 600, 198]} />
      <Text x={607} y={158} text={"β"} fontSize={30} />
      <Arrow
        points={[657, 208, 637, 202]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[580, 205, 598, 198]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(600, 198);
          context.quadraticCurveTo(615, bRightShape - 61, 637, 202);
          context.fillStrokeShape(shape);
        }}
        stroke="green"
        strokeWidth={2}
      />
    </Group>
  );
}

export default RightShape;
