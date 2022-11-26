import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  xCordinateRightShape,
  bRightShape,
  initialX,
  s,
  t,
  fRightShape,
  hRightShape,
  jRightShape,
  kRightShape,
}) {
  return (
    <Group>
      <Shape
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(875, bRightShape);
          context.lineTo(initialX, bRightShape);
          context.lineTo(s, 425);
          context.lineTo(t, 425);
          context.lineTo(875, fRightShape);
          context.lineTo(895, hRightShape);
          context.lineTo(855, jRightShape);
          context.lineTo(875, kRightShape);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        fill="lightgrey"
        stroke="red"
        strokeWidth={4}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[875, bRightShape, 973, bRightShape]}
      />
      <Arrow
        x={xCordinateRightShape}
        points={[968, bRightShape + 4, 968, 422]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[875, 426, 973, 426]}
      />
      <Text
        x={xCordinateRightShape + 936}
        y={kRightShape - 20}
        text={"t1"}
        fontSize={40}
      />
      {/*    beta */}
      {/*<Arrow*/}
      {/*  points={[580, 157, 593, 157]}*/}
      {/*  pointerLength={5}*/}
      {/*  pointerWidth={5}*/}
      {/*  stroke={"red"}*/}
      {/*  strokeWidth={13}*/}
      {/*/>*/}
      {/*<Shape*/}
      {/*  sceneFunc={(context, shape) => {*/}
      {/*    context.beginPath();*/}
      {/*    context.moveTo(595, 156);*/}
      {/*    context.quadraticCurveTo(664, 161, 738, yβSmallLine + 5);*/}
      {/*    context.fillStrokeShape(shape);*/}
      {/*  }}*/}
      {/*  stroke="green"*/}
      {/*  strokeWidth={2}*/}
      {/*/>*/}
      {/*<Arrow*/}
      {/*  points={[756, 190, 740, 190]}*/}
      {/*  pointerLength={5}*/}
      {/*  pointerWidth={5}*/}
      {/*  pointerAtEnding={true}*/}
      {/*  stroke={"red"}*/}
      {/*  strokeWidth={3}*/}
      {/*/>*/}
      <Text x={653} y={113} text={"β"} fontSize={45} />
    </Group>
  );
}

export default RightShape;
