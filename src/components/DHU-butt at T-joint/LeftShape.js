import { Arrow, Line, Shape, Text } from "react-konva";

function LeftShape() {
  return (
    <>
      <Line stroke={"green"} strokeWidth={2} points={[237, 115, 237, 52]} />
      <Text x={327} y={11} text={"t2"} fontSize={40} />
      <Arrow
        points={[240, 55, 452, 55]}
        pointerLength={5}
        pointerWidth={5}
        pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[453, 115, 453, 52]} />
      <Shape
        sceneFunc={(context, shape) => {
          context.beginPath();
          context.moveTo(236, 115);
          context.lineTo(334, 115);
          context.lineTo(338, 137);
          context.lineTo(349, 94);
          context.lineTo(351, 115);
          context.lineTo(453, 115);
          context.lineTo(453, 546);
          context.lineTo(351, 546);
          context.lineTo(349, 525);
          context.lineTo(338, 565);
          context.lineTo(334, 548);
          context.lineTo(237, 548);
          context.closePath();
          context.fillStrokeShape(shape);
        }}
        stroke="red"
        strokeWidth={3}
      />
      {/*  b */}
      <Line stroke={"green"} strokeWidth={2} points={[453, 544, 453, 647]} />
      <Text x={452} y={650} text={"b"} fontSize={30} />
      <Arrow
        points={[430, 647, 450, 647]}
        pointerLength={5}
        pointerWidth={5}
        // pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
      <Line stroke={"green"} strokeWidth={2} points={[460, 341, 460, 648]} />
      <Arrow
        points={[480, 647, 462, 648]}
        pointerLength={5}
        pointerWidth={5}
        // pointerAtBeginning={true}
        pointerAtEnding={true}
        stroke={"blue"}
        strokeWidth={3}
      />
    </>
  );
}

export default LeftShape;
