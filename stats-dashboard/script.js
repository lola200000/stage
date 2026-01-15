// =========================
// REVENUE BAR CHART
// =========================

var revenueCanvas = document.getElementById("revenueChart");

if (revenueCanvas) {
  var revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [48, 62, 55, 70, 60, 52],
        backgroundColor: "#5b8cff",
        borderRadius: 6,
      },
    ],
  };

  var revenueOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "#eef1f6",
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  new Chart(revenueCanvas, {
    type: "bar",
    data: revenueData,
    options: revenueOptions,
  });
}

// =========================
// WEEKLY LINE CHART
// =========================

var weeklyCanvas = document.getElementById("weeklyChart");

if (weeklyCanvas) {
  var weeklyData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        data: [30, 50, 40, 65, 80, 70],
        borderColor: "#5b8cff",
        backgroundColor: "rgba(91,140,255,0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  var weeklyOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
  };

  new Chart(weeklyCanvas, {
    type: "line",
    data: weeklyData,
    options: weeklyOptions,
  });
}

// =========================
// YEARLY DOUGHNUT
// =========================

var yearlyCanvas = document.getElementById("yearlyChart");

if (yearlyCanvas) {
  var yearlyData = {
    datasets: [
      {
        data: [65, 35],
        backgroundColor: ["#5b8cff", "#e5e7eb"],
        borderWidth: 0,
      },
    ],
  };

  var yearlyOptions = {
    cutout: "75%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  new Chart(yearlyCanvas, {
    type: "doughnut",
    data: yearlyData,
    options: yearlyOptions,
  });
}
