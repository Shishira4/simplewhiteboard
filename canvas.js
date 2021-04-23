console.log("I am in canvas.js");
const canvas = new fabric.Canvas("canvas",{
  height: window.innerHeight,
  width: window.innerWidth,
  //width = (window.innerWidth > 0) ? window.innerWidth : screen.width,
  //height = (window.innerHeight > 0) ? window.innerHeight : screen.height,
  
  //setHeight(window,innerHeight){},
  //setWidth(width,)
  //setHeight(height);
});





/*window.addEventListener("load", () => {
  const canvas1 = document.querySelector("#canvas");
  const ctx = canvas1.getContext("2d");

  const colorClass = document.getElementsByClassName("color");
  const brushClass = document.getElementsByClassName("fas");
  //resize
  canvas1.height = window.innerHeight;
  canvas1.width = window.innerWidth;

  let painting = false;
  function startPosition(e) {
    painting = true;
    draw(e);
  }
  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }
  function draw(e) {
    if (!painting) return;
    let coordX = e.clientX - canvas1.offsetLeft;
    let coordY = e.clientY - canvas1.offsetTop;
    ctx.lineWidth = 10;
    // ctx.strokeStyle = "rgba(155,0,0,1)";
    ctx.lineCap = "round";
    ctx.lineTo(coordX, coordY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(coordX, coordY);
  }
  function paint_brush(e)
  {
    ctx.lineWidth = 5;
    draw(e);
  }
  //events
  //mouse down

  canvas1.addEventListener("mousedown", startPosition);
    //mouse up
  canvas1.addEventListener("mouseup", finishedPosition);
  canvas1.addEventListener("mousemove", draw);
  //brushes change
  Array.from(brushClass).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      ctx.lineWidth = 5;
    });
  });

  // color change
  Array.from(colorClass).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      ctx.strokeStyle = e.target.id;
    });
  });
});*/