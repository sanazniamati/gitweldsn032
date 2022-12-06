import React from "react";
import { Arrow, Group, Shape, Text, TextPath } from "react-konva";

function BetaDegree(props) {
  return (
    <Group>
      {/*    alfa*/}
      <TextPath
        x={453}
        y={186}
        fill={"#333"}
        text={"β , wr"}
        data={"M 0 0 L 300 200 "}
        fontSize={40}
      />

      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(353, 188);
          context.quadraticCurveTo(522, 194, 542, 347);
          context.fillStrokeShape(shape);
        }}
        stroke="blue"
        strokeWidth={3}
      />
      <Arrow
        points={[356, 188, 373, 189]}
        pointerAtBeginning={true}
        pointerAtEnding={false}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Arrow
        points={[539, 332, 542, 347]}
        pointerLength={5}
        pointerWidth={5}
        stroke={"blue"}
        strokeWidth={3}
      />
    </Group>
  );
}

export default BetaDegree;
