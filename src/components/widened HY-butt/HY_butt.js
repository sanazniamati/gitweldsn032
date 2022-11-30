import { Stage, Layer, Group, Image, Text } from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";
import LeftShape from "./LeftShape";
import BottomShape from "./bottomShape";
import RightShape from "./RightShape";

export default function HY_butt() {
  // const url = "img.gif";
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
  //Right shape
  const [bRightShape, setBRightShape] = useState(269);
  const [y1LeftShape, setY1LeftShape] = useState(334);
  const [y2LeftShape, setY2LeftShape] = useState(338);
  const [y3LeftShape, setY3LeftShape] = useState(346);
  const [y4LeftShape, setY4LeftShape] = useState(349);
  const [r, setR] = useState(150);
  const [ySPRightShape, setYSPRightShape] = useState(483);
  const [yCPRightShape, setYCPRightShape] = useState(280);
  //left shape
  const [aLeftShape, setALeftShape] = useState(494);
  const [x1LeftShape, setX1LeftShape] = useState(430);
  const [x2LeftShape, setX2LeftShape] = useState(433);
  const [x3LeftShape, setX3LeftShape] = useState(439);
  const [x4LeftShape, setX4LeftShape] = useState(442);

  //bottomShape
  const [xCordinateLeftShape, setXCordinateLeftShape] = useState(0);
  const [xCordinateRightShape, setXCordinateRightShape] = useState(0);
  const [bPlas, setBPlas] = useState(522);

  const handelIncB = () => {
    setBPlas(bPlas + 10);
    setXCordinateLeftShape(xCordinateLeftShape - 5);
    setXCordinateRightShape(xCordinateRightShape + 5);
  };
  const handelDecB = () => {
    setBPlas(bPlas - 10);
    setXCordinateLeftShape(xCordinateLeftShape + 5);
    setXCordinateRightShape(xCordinateRightShape - 5);
  };
  const handelIncR = () => {
    setR(r + 5);
    console.log("r" + r);
    setYSPRightShape(ySPRightShape + 5);
  };
  const handelDecR = () => {
    setR(r - 5);
    setYSPRightShape(ySPRightShape - 5);
  };
  const handelIncT1 = () => {
    setBRightShape(bRightShape - 10);
    setY1LeftShape(y1LeftShape - 5);
    setY2LeftShape(y2LeftShape - 5);
    setY3LeftShape(y3LeftShape - 5);
    setY4LeftShape(y4LeftShape - 5);
    setYCPRightShape(yCPRightShape - 10);
    setYSPRightShape(ySPRightShape - 10);
  };
  const handelDecT1 = () => {
    setBRightShape(bRightShape + 10);
    setY1LeftShape(y1LeftShape + 5);
    setY2LeftShape(y2LeftShape + 5);
    setY3LeftShape(y3LeftShape + 5);
    setY4LeftShape(y4LeftShape + 5);
    setYCPRightShape(yCPRightShape + 10);
    setYSPRightShape(ySPRightShape + 10);
  };
  const handelIncT2 = () => {
    setALeftShape(aLeftShape + 10);
    setX1LeftShape(x1LeftShape + 5);
    setX2LeftShape(x2LeftShape + 5);
    setX3LeftShape(x3LeftShape + 5);
    setX4LeftShape(x4LeftShape + 5);
  };
  const handelDecT2 = () => {
    setALeftShape(aLeftShape - 10);
    setX1LeftShape(x1LeftShape - 5);
    setX2LeftShape(x2LeftShape - 5);
    setX3LeftShape(x3LeftShape - 5);
    setX4LeftShape(x4LeftShape - 5);
  };

  return (
    <>
      <button onClick={handelIncB}> b + </button>
      <button onClick={handelDecB}> b - </button>
      <button onClick={handelIncR}>R + </button>
      <button onClick={handelDecR}> R - </button>
      <button onClick={handelIncT1}>t1 +</button>
      <button onClick={handelDecT1}>t1 -</button>
      <button onClick={handelIncT2}> t2 +</button>
      <button onClick={handelDecT2}> t2 -</button>
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
          <LeftShape
            xCordinateLeftShape={xCordinateLeftShape}
            aLeftShape={aLeftShape}
            x1LeftShape={x1LeftShape}
            x2LeftShape={x2LeftShape}
            x3LeftShape={x3LeftShape}
            x4LeftShape={x4LeftShape}
          />
          <BottomShape
            xCordinateRightShape={xCordinateRightShape}
            xCordinateLeftShape={xCordinateLeftShape}
            bPlas={bPlas}
            aLeftShape={aLeftShape}
          />
          <RightShape
            xCordinateRightShape={xCordinateRightShape}
            r={r}
            yCPRightShape={yCPRightShape}
            ySPRightShape={ySPRightShape}
            bRightShape={bRightShape}
            y1LeftShape={y1LeftShape}
            y2LeftShape={y2LeftShape}
            y3LeftShape={y3LeftShape}
            y4LeftShape={y4LeftShape}
          />
        </Layer>
      </Stage>
    </>
  );
}
