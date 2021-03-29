window.addEventListener("load", () => {
  const canvas1 = document.querySelector("#canvas");
  const ctx = canvas1.getContext("2d");

  const colorClass = document.getElementsByClassName("color");

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
  //events
  canvas1.addEventListener("mousedown", startPosition);
  canvas1.addEventListener("mouseup", finishedPosition);
  canvas1.addEventListener("mousemove", draw);
  //mouse down

  //mouse up

  // color change
  Array.from(colorClass).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      ctx.strokeStyle = e.target.id;
    });
  });
});
