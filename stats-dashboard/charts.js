/* COUNT UP */
function animateValue(el, target, duration = 1200) {
  let start = 0;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    el.innerText = Math.floor(progress * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

document.querySelectorAll(".number").forEach((el) => {
  animateValue(el, +el.dataset.target);
});

/* CANVAS */
const barChart = document.getElementById("barChart");
const lineChart = document.getElementById("lineChart");
const donutChart = document.getElementById("donutChart");

/* ===== COUNT UP ===== */
function animateValue(el, target, duration = 1200) {
  let start = 0;
  const step = (t) => {
    if (!start) start = t;
    const progress = Math.min((t - start) / duration, 1);
    el.innerText = Math.floor(progress * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

document.querySelectorAll(".number").forEach((el) => {
  animateValue(el, +el.dataset.target);
});

/* ===== REVENUE STACKED BAR ===== */
new Chart(document.getElementById("revenueChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [3200, 4200, 3800, 4600, 3500, 3000, 3300],
        backgroundColor: "#9db7ff",
        borderRadius: 8,
        stack: "stack1",
      },
      {
        data: [1800, 2800, 3000, 3900, 2500, 2400, 2900],
        backgroundColor: "#4f6bed",
        borderRadius: 8,
        stack: "stack1",
      },
    ],
  },
  options: {
    animation: { duration: 1200 },
    plugins: { legend: { display: false } },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
      },
      y: {
        stacked: true,
        ticks: { color: "#9ca3af" },
        grid: { color: "#eef2ff" },
      },
    },
  },
});

/* LINE */
new Chart(lineChart, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [1200, 1900, 1600, 2100, 1800, 2300, 2000],
        borderColor: "#4f6bed",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: { plugins: { legend: { display: false } } },
});

/* DONUT */
const percent = 64;
const donutPercent = document.getElementById("donutPercent");

new Chart(donutChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [percent, 100 - percent],
        backgroundColor: ["#4f6bed", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  },
  options: {
    cutout: "72%",
    animation: {
      onProgress: (a) => {
        donutPercent.innerText =
          Math.round((a.currentStep / a.numSteps) * percent) + "%";
      },
    },
    plugins: { legend: { display: false } },
  },
});
/* COUNT UP */
document.querySelectorAll(".number").forEach((el) => {
  let target = +el.dataset.target;
  let start = 0;
  let step = (t) => {
    start += target / 60;
    if (start < target) {
      el.innerText = Math.floor(start).toLocaleString();
      requestAnimationFrame(step);
    } else {
      el.innerText = target.toLocaleString();
    }
  };
  step();
});

/* Employee Salary */
new Chart(salaryChart, {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        data: [3000, 3500, 4000, 4200, 3900, 3700, 4100],
        backgroundColor: "#4f6bed",
        borderRadius: 6,
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { x: { grid: { display: false } }, y: { display: false } },
  },
});

/* Customers */
new Chart(customersChart, {
  type: "line",
  data: {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [20, 30, 25, 40, 35, 45, 40],
        borderColor: "#4f6bed",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  },
});

/* Projects */
new Chart(projectsChart, {
  type: "bar",
  data: {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [5, 8, 6, 9, 7, 10, 8],
        backgroundColor: "#a5b4fc",
      },
    ],
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { x: { display: false }, y: { display: false } },
  },
});
const ctx = document.getElementById("weeklyChart");

new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 40, 30, 25, 35, 45, 60],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.15)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
    },
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});
