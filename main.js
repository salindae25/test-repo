
var c = document.getElementById("myCanvas");
var gValue = document.getElementById("gaugeValue");
var gLimit = document.getElementById("gaugeLimit");
var gButton = document.getElementById("guageButton");
var speed=40;
drawGuage(c, 20, 100);
gButton.addEventListener('click',function (params) {
    var pointer = parseFloat(gValue.value);
    var limite =  parseFloat(gLimit.value);
    if (pointer <= limite)
        speed = limite > 1000 ? (limite / pointer)  : 40;
        drawGuage(c, pointer, limite);
    
})
function drawGuage(canvas, pointervalue, guageLimit) {
    var ctx = canvas.getContext("2d");
    animatePointer(ctx, pointervalue, guageLimit);
   
    window.addEventListener("resize", function() {
        animatePointer(ctx, pointervalue, guageLimit);
    });
   
}

function canvas_arrow(context, fromx, fromy, tox, toy, r) {
    var x_center = tox;
    var y_center = toy;

    var angle;
    var x;
    var y;

    context.beginPath();

    angle = Math.atan2(toy - fromy, tox - fromx)
    x = r * Math.cos(angle) + x_center;
    y = r * Math.sin(angle) + y_center;

    context.moveTo(x, y);

    angle += (1 / 3) * (2 * Math.PI)
    x = r * Math.cos(angle) + x_center;
    y = r * Math.sin(angle) + y_center;

    context.lineTo(x, y);

    angle += (1 / 3) * (2 * Math.PI)
    x = r * Math.cos(angle) + x_center;
    y = r * Math.sin(angle) + y_center;

    context.lineTo(x, y);

    context.closePath();

    context.fill();
}

function drawPointer(ctx, angle, x, y, radius) {
    ctx.beginPath();
    ctx.moveTo(x - 1, y - 4);
    var lineX = x + radius * Math.cos(angle);
    var lineY = y + radius * Math.sin(angle);
    ctx.lineTo(lineX, lineY);
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.stroke();
    canvas_arrow(ctx, x, y, lineX, lineY, 8)

}

function drawCircularPotion(ctx, x, y, radius, start, end, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(x, y);
    ctx.arc(x, y, radius, start, end, true);
    ctx.closePath();
    ctx.fill();

}

function animatePointer(ctx, pointervalue, guageLimit) {
    var tempPointervalue = 0;
    var anti = setInterval(function() {
        var angel = Math.PI + ((Math.PI * tempPointervalue) / guageLimit);
        if (tempPointervalue < pointervalue && guageLimit > tempPointervalue) {
            tempPointervalue++;
        } else {
            clearInterval(anti);
        }
        ctx.clearRect(0, 0, 300, 400);
        drawCircularPotion(ctx, 150, 200, 100, 0, ((5 / 3) * Math.PI), "red");
        drawCircularPotion(ctx, 150, 200, 100, ((5 / 3) * Math.PI), ((4 / 3) * Math.PI), "orange");
        drawCircularPotion(ctx, 150, 200, 100, ((4 / 3) * Math.PI), (Math.PI), "green");
        drawCircularPotion(ctx, 150, 200, 20, 0, (Math.PI), "black");
        drawPointer(ctx, angel, 150, 200, 98)
    }, speed);
}


