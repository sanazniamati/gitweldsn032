import React from "react";
import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  xCordinateRightShape,
  bRightShape,
  initialX,
  fRightShape,
  hRightShape,
  jRightShape,
  kRightShape,
  yBetaBigLine,
  xAdditinalLine,
  yBetaSmallLine,
  xQuadratic,
}) {
  return (
    <Group>
      <Shape
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(875, bRightShape);
          context.lineTo(initialX, bRightShape);
          context.lineTo(600, 425);
          context.lineTo(875, 425);
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
      <Arrow
        x={xCordinateRightShape}
        points={[582, yBetaSmallLine + 8, 595, yBetaSmallLine]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"red"}
        strokeWidth={3}
      />
      <Shape
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(598, yBetaBigLine);
          context.quadraticCurveTo(
            (598 + xAdditinalLine) / 2 + 10,
            (yBetaBigLine + yBetaSmallLine + 10) / 2 - 60,
            xAdditinalLine,
            yBetaSmallLine + 10
          );
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={2}
      />
      <Arrow
        x={xCordinateRightShape}
        points={[
          xAdditinalLine + 10,
          yBetaSmallLine + 25,
          xAdditinalLine + 2,
          yBetaSmallLine + 12,
        ]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtEnding={true}
        stroke={"red"}
        strokeWidth={3}
      />
      <Text
        x={xCordinateRightShape + xAdditinalLine - 45}
        y={yBetaSmallLine - 65}
        text={"β"}
        fontSize={30}
      />
    </Group>
  );
}

export default RightShape;
