console.log("I am in canvas.js");
const canvas = new fabric.Canvas("canvas",{
  height: window.innerHeight,
  width: window.innerWidth,
  selection:false,
});

var pencilbrush = new fabric.PencilBrush(canvas);
var spraybrush = new fabric.SprayBrush(canvas);
var patternbrush = new fabric.PatternBrush(canvas);
const toggleMode =(mode) => {

  currentMode = modes.drawing
  
  //console.log("draw mode on -1");
  canvas.renderAll()
}
const setcolor=(color) =>{
  
  canvas.freeDrawingBrush.color = color;
  canvas.renderAll();
  console.log(color)
}
const changeBrush=(brush) =>{
  brush.color = canvas.freeDrawingBrush.color;
  canvas.freeDrawingBrush = brush;
  canvas.renderAll();
  console.log(brush);
}
const setPanEvents = (canvas)=>{

  canvas.on('mouse:move', (event)=>{
    mousePressed=true
    //console.log('mouse move');
    if(mousePressed && currentMode === modes.drawing)
    {
      canvas.isDrawingMode = true
      //console.log("draw mode on");
      canvas.setCursor('freeDrawingBrush');
      canvas.renderAll()
      
      }
    }
  
  )
  
  //mouse over
  canvas.on('mouse:down',(event)=>{
    mousePressed = true;
    canvas.setCursor('crosshair');
    //draw()
  })
  canvas.on('mouse:up',(event)=>{
    console.log('mouse down');
    mousePressed = false;
    //draw()
  })
  
  canvas.requestRenderAll();
}
let mousePressed = false;
let currentMode;
const modes = {
  drawing: 'drawing'
}
const color = {
  black : '#000000',
  blue : '#0037FF',
  green : '#02C00F'


}
document.querySelector('#Download').addEventListener('click', function() {
  html2canvas(document.querySelector('canvas'), {
    onrendered: function(canvas) {
      // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    }
  });
});
setPanEvents(canvas)

