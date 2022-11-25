import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
// import RightShape from "./RightShape";
export default function UButtOnVRoot() {
  const url = "img.gif";
  const [image] = useImage(url);
  let [b, setB] = useState(229);
  let [f, setF] = useState(338);
  let [h, setH] = useState(332);
  let [j, setJ] = useState(322);
  let [k, setK] = useState(317);
  let [yRightShape, setyRightShape] = useState(229);
  let [fRightShape, setFRightShape] = useState(338);
  let [hRightShape, setHRightShape] = useState(332);
  let [jRightShape, setJRightShape] = useState(322);
  let [kRightShape, setKRightShape] = useState(317);
  let [yβSmallLine, setyβSmallLine] = useState(151);
  let [yβBigLine, setyβBigLine] = useState(148);
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };
  const handelIncT2 = () => {
    setB(b - 10);
    setF(f - 5);
    setH(h - 5);
    setJ(j - 5);
    setK(k - 5);
  };
  const handelIncT1 = () => {
    setyRightShape(yRightShape - 10);
    setFRightShape(fRightShape - 5);
    setHRightShape(hRightShape - 5);
    setJRightShape(jRightShape - 5);
    setKRightShape(kRightShape - 5);
    setyβSmallLine(yβSmallLine - 10);
    setXβSmallLine(xβSmallLine - 1);
    setyβBigLine(yβBigLine - 10);
    console.log("initialX" + initialX);
    console.log("initialT1" + initialT1);
  };
  let [e, setE] = useState(422);
  let [s, setS] = useState(600);
  let [t, setT] = useState(875);

  const [grad, setGrad] = useState(15);
  let initialT1 = e - b;
  let initialX = initialT1 * Math.tan((grad * Math.PI) / 180) + 597;
  let initalxβSmallLine = 20 * Math.tan((grad * Math.PI) / 180) + 668;
  let [xβSmallLine, setXβSmallLine] = useState(initalxβSmallLine);

  const handelIncβ = () => {
    setGrad(grad + 5);
    console.log("grad" + grad);
  };
  const handelDecβ = () => {
    setGrad(grad - 5);
  };
  return (
    <>
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelIncβ}> β + </button>
      <button onClick={handelDecβ}> β - </button>

      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseMove={handleMouseMove}
        onMouseOut={handelMouseOut}
      >
        <Layer>
          <Group>
            {/*<Image x={100} y={10} image={image} />*/}
            <Text text={text} x={10} y={50} fontSize={20} />
          </Group>
          <LeftShape b={b} f={f} h={h} j={j} k={k} />
          {/*shape2*/}
          <Group>
            <Shape
              sceneFunc={(context, shape) => {
                context.beginPath();
                context.moveTo(875, yRightShape);
                context.lineTo(initialX, yRightShape);
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
              stroke={"green"}
              strokeWidth={2}
              points={[875, yRightShape, 973, yRightShape]}
            />
            <Arrow
              points={[968, yRightShape + 4, 968, 422]}
              pointerLength={5}
              pointerWidth={5}
              pointerAtBeginning={true}
              stroke={"blue"}
              strokeWidth={3}
            />
            <Line
              stroke={"green"}
              strokeWidth={2}
              points={[875, 426, 973, 426]}
            />
            <Text x={936} y={kRightShape - 20} text={"t1"} fontSize={40} />
          </Group>
          {/*  beta*/}
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
          <Line
            stroke={"green"}
            strokeWidth={2}
            points={[598, yβBigLine, 598, 554]}
          />
          <Line
            stroke={"green"}
            strokeWidth={2}
            points={[initialX, yRightShape, xβSmallLine, yβSmallLine]}
          />
          {/*  beta line */}

          <Line
            stroke={"green"}
            strokeWidth={2}
            points={[527, 423, 527, 554]}
          />

          <Group>
            <Arrow
              points={[530, 550, 596, 550]}
              pointerLength={5}
              pointerWidth={5}
              pointerAtBeginning={true}
              fill={"yellow"}
              stroke={"red"}
              strokeWidth={3}
              draggable
            />
          </Group>

          <Line points={[526, 425, 600, 425]} stroke="red" strokeWidth={4} />

          <Shape
            sceneFunc={(context, shape) => {
              context.beginPath();
              context.moveTo(404, 423);
              context.lineTo(404, 480);
              context.lineTo(719, 480);
              context.lineTo(719, 423);
              context.fillStrokeShape(shape);
            }}
            stroke="red"
            strokeWidth={4}
            draggable
          />
          <Line points={[429, 425, 405, 449]} stroke="red" strokeWidth={2} />
          <Line points={[459, 426, 405, 480]} stroke="red" strokeWidth={2} />
          <Line points={[489, 426, 435, 480]} stroke="red" strokeWidth={2} />
          <Line points={[519, 426, 465, 480]} stroke="red" strokeWidth={2} />
          <Line points={[549, 426, 495, 480]} stroke="red" strokeWidth={2} />
          <Line points={[579, 426, 525, 480]} stroke="red" strokeWidth={2} />
          <Line points={[609, 426, 555, 480]} stroke="red" strokeWidth={2} />
          <Line points={[639, 426, 585, 480]} stroke="red" strokeWidth={2} />
          <Line points={[664, 426, 610, 480]} stroke="red" strokeWidth={2} />
          <Line points={[694, 426, 640, 480]} stroke="red" strokeWidth={2} />
          <Line points={[720, 429, 670, 480]} stroke="red" strokeWidth={2} />
          <Line points={[720, 459, 700, 480]} stroke="red" strokeWidth={2} />

          <Text x={555} y={510} text={"b"} fontSize={40} />
          <Text x={653} y={113} text={"β"} fontSize={45} />
        </Layer>
      </Stage>
    </>
  );
}
