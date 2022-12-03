import React from "react";
import { Arrow, Group, Line, Shape, Text, TextPath } from "react-konva";

function RightShape({ r, fCPRightShape, c }) {
  return (
    <Group>
      <Line stroke={"green"} strokeWidth={2} points={[873, 245, 969, 245]} />
      <Line stroke={"green"} strokeWidth={2} points={[873, 452, 969, 452]} />
      <Arrow
        points={[969, 247, 969, 450]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text text={"t1"} x={930} y={325} fontSize={40} />

      <Line stroke={"green"} strokeWidth={2} points={[576, c, 937, c]} />
      <Arrow
        points={[937, c + 3, 937, 451]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        fill={"yellow"}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Text text={"C"} x={898} y={418} fontSize={30} />

      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(686, 247);
          context.lineTo(875, 247);
          context.lineTo(875, 340);
          context.lineTo(855, 346);
          context.lineTo(895, 355);
          context.lineTo(875, 360);
          context.lineTo(875, 453);
          context.lineTo(577, 453);
          // context.lineTo(577, 408);
          // context.quadraticCurveTo(665, 412, 686, 247);
          // context.arcTo(fCPRightShape, 412, 686, 247, r);
          context.arc(577, 310, r, (90 * Math.PI) / 180, 0, true);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        // fill={"lightGray"}
        stroke="red"
        strokeWidth={4}
      />
      {/*Beta*/}
      {/*<Line stroke={"green"} strokeWidth={2} points={[685, 245, 698, 182]} />*/}
      {/*<Line stroke={"green"} strokeWidth={2} points={[666, 327, 664, 178]} />*/}
      {/*<Text x={677} y={150} text={"β"} fontSize={30} />*/}
      {/*<Arrow*/}
      {/*  points={[647, 183, 660, 180]}*/}
      {/*  pointerLength={5}*/}
      {/*  pointerWidth={5}*/}
      {/*  stroke={"blue"}*/}
      {/*  strokeWidth={3}*/}
      {/*/>*/}
      {/*<Arrow*/}
      {/*  points={[715, 188, 700, 183]}*/}
      {/*  pointerLength={5}*/}
      {/*  pointerWidth={5}*/}
      {/*  stroke={"blue"}*/}
      {/*  strokeWidth={3}*/}
      {/*/>*/}
      {/*<Shape*/}
      {/*  sceneFunc={(context, shape) => {*/}
      {/*    context.beginPath();*/}
      {/*    context.moveTo(664, 182);*/}
      {/*    context.quadraticCurveTo(680, 178, 697, 184);*/}
      {/*    context.fillStrokeShape(shape);*/}
      {/*  }}*/}
      {/*  stroke="blue"*/}
      {/*  strokeWidth={2}*/}
      {/*/>*/}
      {/*  R*/}
      <Arrow
        points={[578, 321, 621, 290 + r]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <TextPath
        x={586}
        y={310}
        fill={"#333"}
        text={"R"}
        data={"M 0 0 L 300 320 "}
        fontSize={30}
      />
    </Group>
  );
}

export default RightShape;
