console.log("I am in canvas.js");
const canvas = new fabric.Canvas("canvas",{
  height: window.innerHeight,
  width: window.innerWidth,
  selection:false,
  
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
const setcolor=(id) =>{
  if(mousePressed && currentMode === modes.drawing)
  {
  if(document.getElementById('black').clicked == true)
    {   
        console.log("black");
        canvas.freeDrawingBrush.color = '#000000'
        canvas.renderAll()
    } 
  else if(document.getElementById('green').clicked == true)
    {
        console.log("green");
        canvas.freeDrawingCursor.color = '#0037FF'
        canvas.renderAll()
    }
      else if(document.getElementById('green').clicked == true)
    {
        canvas.freeDrawingBrush.color = '#02C00F'
        canvas.renderAll()
}
  }
};
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

setPanEvents(canvas)
setcolor(canvas)
