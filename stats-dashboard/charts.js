/*
   GLOBAL CHART SETTINGS
*/
Chart.defaults.font.family = "Inter, sans-serif";
Chart.defaults.color = "#8a8fa7";
Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.tooltip.backgroundColor = "#fff";
Chart.defaults.plugins.tooltip.titleColor = "#000";
Chart.defaults.plugins.tooltip.bodyColor = "#000";
Chart.defaults.plugins.tooltip.borderColor = "#e0e0e0";
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.cornerRadius = 8;

/*
   REVENUE UPDATES (BAR)
*/
new Chart(document.getElementById("revenueChart"), {
  type: "bar",
  data: {
    labels: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08"],
    datasets: [
      {
        data: [2.5, 3.2, 2.8, 3.9, 2.1, 2.6, 2.9],
        backgroundColor: "#5d87ff",
        borderRadius: 8,
        barThickness: 10,
      },
      {
        data: [-1.8, -1.2, -2.5, -1.6, -2.2, -1.4, -2.0],
        backgroundColor: "#49beff",
        borderRadius: 8,
        barThickness: 10,
      },
    ],
  },
  options: {
    scales: {
      x: { grid: { display: false } },
      y: {
        grid: { color: "#f1f3f9" },
        ticks: { stepSize: 2 },
      },
    },
  },
});

/*
   MONTHLY EARNINGS (LINE)
*/
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [4200, 3800, 4600, 4100, 4800, 4300],
        borderColor: "#5d87ff",
        backgroundColor: "rgba(93,135,255,0.15)",
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      x: { grid: { display: false } },
      y: { display: false },
    },
  },
});

/*
   YEARLY BREAKUP (DONUT)
*/
new Chart(document.getElementById("donutChart"), {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["#5d87ff", "#ecf0ff"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  },
});

/*
   EMPLOYEE SALARY (BAR)
*/
new Chart(document.getElementById("salaryChart"), {
  type: "bar",
  data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep"],
    datasets: [
      {
        data: [30, 35, 55, 38, 40, 32],
        backgroundColor: "#5d87ff",
        borderRadius: 6,
        barThickness: 12,
      },
    ],
  },
  options: {
    scales: {
      x: { grid: { display: false } },
      y: { display: false },
    },
  },
});

/*
   MINI LINE CHARTS
*/
function miniLineChart(id, color, data) {
  new Chart(document.getElementById(id), {
    type: "line",
    data: {
      labels: data.map((_, i) => i),
      datasets: [
        {
          data,
          borderColor: color,
          tension: 0.4,
          pointRadius: 0,
        },
      ],
    },
    options: {
      scales: {
        x: { display: false },
        y: { display: false },
      },
    },
  });
}

miniLineChart("customersChart", "#49beff", [20, 25, 22, 30, 28]);
miniLineChart("projectsChart", "#5d87ff", [10, 18, 15, 22, 20]);

/*
   WEEKLY STATS (LINE)
*/
new Chart(document.getElementById("weeklyChart"), {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [12, 18, 15, 20, 17, 22, 28],
        borderColor: "#5d87ff",
        tension: 0.45,
        pointRadius: 0,
      },
    ],
  },
  options: {
    scales: {
      x: { display: false },
      y: { display: false },
    },
  },
});
