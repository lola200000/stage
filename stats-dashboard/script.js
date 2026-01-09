document.addEventListener("DOMContentLoaded", () => {
  animateBars();
  animateLines();
  animateCircles();
});

/* ========= BAR CHARTS ========= */
function animateBars() {
  document
    .querySelectorAll(".bar-chart, .bar-large, .bars-mini")
    .forEach((chart) => {
      chart.style.display = "flex";
      chart.style.alignItems = "flex-end";
      chart.style.gap = "6px";
      chart.style.height = "120px";

      const barsCount = chart.classList.contains("bars-mini") ? 6 : 8;

      for (let i = 0; i < barsCount; i++) {
        const bar = document.createElement("div");
        bar.style.width = "12px";
        bar.style.height = "0";
        bar.style.background = "#5D87FF";
        bar.style.borderRadius = "4px";
        bar.style.transition = "height 0.8s ease";

        chart.appendChild(bar);

        setTimeout(() => {
          bar.style.height = Math.floor(Math.random() * 80 + 20) + "%";
        }, i * 120);
      }
    });
}

/* ========= LINE CHARTS ========= */
function animateLines() {
  document.querySelectorAll(".line, .line-large").forEach((chart) => {
    chart.style.position = "relative";
    chart.style.height = "100px";

    const canvas = document.createElement("canvas");
    canvas.width = 300;
    canvas.height = 100;
    chart.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#49BEFF";
    ctx.lineWidth = 3;
    ctx.beginPath();

    let x = 0;
    let y = Math.random() * 50 + 20;
    ctx.moveTo(x, y);

    const points = 10;
    for (let i = 1; i <= points; i++) {
      x += canvas.width / points;
      y = Math.random() * 70 + 10;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  });
}
