console.log("I am in canvas.js");
const canvas = new fabric.Canvas("canvas",{
  height: window.innerHeight,
  width: window.innerWidth,
  selection:false
  
});

/*canvas.freeDrawingBrush.color = getElementByClass("color").onchange = function(){
  canvas.freeDrawingBrush.color = this.id; 
};*/



const toggleMode =(mode) => {

      currentMode = modes.drawing
      
      console.log("draw mode on -1");
      canvas.renderAll()
  /*if(mode === modes.drawing)
  {
    if(currentMode ===modes.drawing)
    {
      currentMode = ''
      canvas.isDrawingMode = false
      console.log("draw mode on -1");
      canvas.renderAll()
    }
    else
    {
      currentMode = modes.drawing
    }
  }
  console.log(mode);*/
}
const draw_black=(canvas) =>{
  var brush = canvas.freeDrawingBrush;
  brush.color = black
}
const setPanEvents = (canvas)=>{

  canvas.on('mouse:move', (event)=>{
    mousePressed=true
    console.log('mouse move');
    /*if(mousePressed)
    {
      canvas.setCursor('crosshair');
    const mEvent = event.e;
    const delta = new fabric.Point(mEvent.movementX, mEvent.movementY)
    
    }*/
    if(mousePressed && currentMode === modes.drawing)
    {
      canvas.isDrawingMode = true
      console.log("draw mode on");
      canvas.setCursor('freeDrawingBrush');
      canvas.renderAll()
      if(document.getElementById('black').clicked == true)
      color() = (canvas)=>{
        console.log("black");
        canvas.freeDrawingBrush.color = '#000000'
        canvas.renderAll()
      }
      else if(document.getElementById('green').clicked == true)
      color() = (canvas)=>{
        console.log("green");
        canvas.freeDrawingBrush.color = '#0037FF'
        canvas.renderAll()
      }
      else if(document.getElementById('green').clicked == true)
      color() = (canvas)=>{
        canvas.freeDrawingBrush.color = '#02C00F'
        canvas.renderAll()
      }
    }
  
  })
  
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

setPanEvents(canvas)
color(canvas)
