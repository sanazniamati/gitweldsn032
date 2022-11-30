import { Arrow, Group, Line, Shape, Text } from "react-konva";

function RightShape({
  xCordinateRightShape,
  r,
  ySPRightShape,
  bRightShape,
  y1LeftShape,
  y2LeftShape,
  y3LeftShape,
  y4LeftShape,
  yCPRightShape,
}) {
  return (
    <Group>
      <Shape
        x={xCordinateRightShape}
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(525, 612);
          //start point
          context.lineTo(525, ySPRightShape);
          context.arcTo(530, yCPRightShape, 683, bRightShape, r);
          // context.quadraticCurveTo(552, 290, 683, 269);
          context.lineTo(817, bRightShape);
          //shekastegi
          context.lineTo(817, y1LeftShape);
          context.lineTo((803, y2LeftShape));
          context.lineTo(832, y3LeftShape);
          context.lineTo(816, y4LeftShape);
          context.lineTo(816, 420);
          context.lineTo(706, 420);
          // context.quadraticCurveTo(685, 426, 679, 447);
          context.arcTo(685, 426, 679, 447, 35);
          context.lineTo(679, 612);
          context.lineTo(608, 612);
          context.lineTo(605, 632);
          context.lineTo(597, 592);
          context.lineTo(592, 612);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        // fill="lightgrey"
        stroke="red"
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[817, bRightShape, 876, bRightShape]}
      />
      <Text x={xCordinateRightShape + 848} y={330} text={"t1"} fontSize={30} />
      <Arrow
        x={xCordinateRightShape}
        points={[876, bRightShape + 3, 876, 417]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line
        x={xCordinateRightShape}
        stroke={"green"}
        strokeWidth={2}
        points={[817, 419, 876, 419]}
      />
      {/*    R */}
      <Text
        x={xCordinateRightShape + 555}
        y={yCPRightShape - 137}
        text={"R"}
        fontSize={40}
      />

      <Arrow
        x={xCordinateRightShape}
        points={[566, yCPRightShape - 107, 566, ySPRightShape - 185]}
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
