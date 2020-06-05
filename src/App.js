import React from "react";
import "./App.css";
import Sketch from "react-p5";
import * as _ from "lodash";

function App() {
  const canvasDimensions = 600;
  let newDimension = canvasDimensions;
  let halfHeight = newDimension / 2;
  const drawMode = 1;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(canvasDimensions, canvasDimensions).parent(canvasParentRef); // use parent to render canvas in this ref (without that p5 render this canvas outside your component)
  };

  const draw = (p5) => {
    p5.background("red");
    p5.stroke("white");
    p5.strokeWeight(2);
    overlay(p5);

    let x = p5.map(p5.mouseX, 0, canvasDimensions, -50, 50);
    let radiansOfRotation = p5.map(p5.mouseX, 0, canvasDimensions, -0.5, 0.5);
    let scaleFactor = p5.map(p5.mouseY, 0, canvasDimensions, 0.7, 1);

    if (drawMode === 2) p5.translate(x, 0);
    if (drawMode === 1) p5.rotate(radiansOfRotation);

    p5.scale(scaleFactor);
    p5.strokeWeight(2);
    overlay(p5);
    drawCircle(p5);
  };

  const overlay = (p5) => {
    for (let i = halfHeight / 2; i < halfHeight * 1.5; i += 5) {
      p5.line(i, -halfHeight / 2, i, halfHeight * 1, 5);
    }
  };

  const drawCircle = (p5) => {
    const fifthOfDimension = canvasDimensions / 5;
    for (let i = 0; i < canvasDimensions; i += fifthOfDimension) {
      let scaleFactor = p5.map(p5.mouseY, 0, canvasDimensions, 0, 2);
      p5.noStroke();
      p5.scale(scaleFactor);
      p5.fill("yellow")
      p5.ellipseMode(p5.CENTER);
      p5.ellipse(i , canvasDimensions, fifthOfDimension);
    }
  };

  return (
    <div className="app">
      <div className="title"> Title</div>
      <div className="canvas">
        <Sketch setup={setup} draw={draw} />
      </div>
      <p className="description">
        {" "}
        This is the center of the canvas. This is the center of the canvas. This
        is the center of the canvas. This is the center of the canvas. This is
        the center of the canvas.
      </p>
    </div>
  );
}

export default App;
