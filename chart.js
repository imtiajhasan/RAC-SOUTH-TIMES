```javascript id="c6m2pv"
/* ==========================================
   RAC SOUTH TIMES
   chart.js (Part 1)
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Default Colors

    const textColor = document.body.classList.contains("dark")
        ? "#ffffff"
        : "#333333";

    const gridColor = document.body.classList.contains("dark")
        ? "#374151"
        : "#e5e7eb";

    // ===========================
    // Monthly Visitors Chart
    // ===========================

    const visitorCanvas = document.getElementById("visitorChart");

    if (visitorCanvas) {

        new Chart(visitorCanvas, {

            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep",
                    "Oct",
                    "Nov",
                    "Dec"
                ],

                datasets: [

                    {

                        label: "Visitors",

                        data: [
                            1200,
                            1800,
                            2500,
                            3100,
                            4200,
                            5100,
                            6400,
                            7200,
                            8600,
                            9100,
                            10500,
                            12400
                        ],

                        borderColor: "#005DAA",

                        backgroundColor: "rgba(0,93,170,.15)",

                        fill: true,

                        tension: .4,

                        borderWidth: 3,

                        pointRadius: 5,

                        pointHoverRadius: 7

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        labels: {

                            color: textColor

                        }

                    }

                },

                scales: {

                    x: {

                        ticks: {

                            color: textColor

                        },

                        grid: {

                            color: gridColor

                        }

                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            color: textColor

                        },

                        grid: {

                            color: gridColor

                        }

                    }

                }

            }

        });

    }
```
```javascript id="m9qv2k"
    // ===========================
    // Content Overview Pie Chart
    // ===========================

    const contentCanvas = document.getElementById("contentChart");

    if (contentCanvas) {

        new Chart(contentCanvas, {

            type: "doughnut",

            data: {

                labels: [

                    "News",

                    "Magazines",

                    "Gallery",

                    "Videos",

                    "Events"

                ],

                datasets: [

                    {

                        data: [

                            85,

                            12,

                            540,

                            42,

                            18

                        ],

                        backgroundColor: [

                            "#005DAA",

                            "#F7A81B",

                            "#22C55E",

                            "#EF4444",

                            "#8B5CF6"

                        ],

                        borderWidth: 2,

                        borderColor: "#ffffff"

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "65%",

                plugins: {

                    legend: {

                        position: "bottom",

                        labels: {

                            color: textColor,

                            padding: 20,

                            usePointStyle: true

                        }

                    },

                    tooltip: {

                        enabled: true

                    }

                }

            }

        });

    }

    // ===========================
    // End of Chart Initialization
    // ===========================

    console.log(
        "Chart.js loaded successfully."
    );

});
```
