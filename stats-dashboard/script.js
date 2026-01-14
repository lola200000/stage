console.log("Charts JS loaded");

// ===== LINE CHART =====
function drawLine(canvas, data) {
  var ctx = canvas.getContext("2d");

  var width = canvas.parentElement.offsetWidth;
  var height = 150;

  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);
  ctx.strokeStyle = "#5b8cff";
  ctx.lineWidth = 2;

  ctx.beginPath();

  for (var i = 0; i < data.length; i++) {
    var x = (width / (data.length - 1)) * i;
    var y = height - data[i];

    if (i === 0) {
      ctx.moveTo(x, y);
    } else {
      ctx.lineTo(x, y);
    }
  }

  ctx.stroke();
}

// ===== BAR CHART =====
function drawBars(canvas, data) {
  var ctx = canvas.getContext("2d");

  var width = canvas.parentElement.offsetWidth;
  var height = 180;

  canvas.width = width;
  canvas.height = height;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#5b8cff";

  var barWidth = width / data.length - 20;

  for (var i = 0; i < data.length; i++) {
    var x = i * (barWidth + 20) + 10;
    var y = height - data[i];

    ctx.fillRect(x, y, barWidth, data[i]);
  }
}

// ===== Revenue =====
var revenueCanvas = document.querySelector(".chart-placeholder canvas");
if (revenueCanvas) {
  drawBars(revenueCanvas, [60, 120, 90, 140, 100, 80]);
}

// ===== Salary =====
var salaryCanvas = document.querySelector(".salary-chart canvas");
if (salaryCanvas) {
  drawBars(salaryCanvas, [70, 90, 110, 85, 100]);
}

// ===== Weekly =====
var weeklyCanvas = document.querySelector(".weekly-chart canvas");
if (weeklyCanvas) {
  drawLine(weeklyCanvas, [40, 70, 60, 90, 120, 100]);
}

// ===== Mini charts =====
var miniCharts = document.querySelectorAll(".mini-chart canvas");

miniCharts.forEach(function (canvas) {
  drawLine(canvas, [20, 40, 30, 50, 45]);
});
