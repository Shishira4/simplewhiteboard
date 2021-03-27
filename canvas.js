
window.addEventListener('load', () => {
    const canvas1 = document.querySelector('#canvas');
    const ctx = canvas1.getContext("2d");

//resize
    canvas1.height = window.innerHeight;
    canvas1.width = window.innerWidth;
    
    let painting = false;
    function startPosition(e){
        painting= true;
        draw(e);
    }
    function finishedPosition(){
        painting = false;
        ctx.beginPath();
    }
    function draw(e){
        if(!painting)
        return;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'rgba(155,0,0,1)';
        ctx.lineCap="round";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX,e.clientY);
    }
    //events
    canvas1.addEventListener('mousedown', startPosition);
    canvas1.addEventListener('mouseup', finishedPosition);
    canvas1.addEventListener('mousemove',draw);
    //mouse down

    //mouse up
});
