function consumoGiornaliero(x) {
    return 0.90 + 0.006 * x + 0.00012 * Math.pow(x, 2) - 0.000001 * Math.pow(x, 3);
}

const CO2_PER_KWH = 0.477;

const ctx = document.getElementById("grafico").getContext("2d");

// creo i dati per il grafico usando coordinate x,y invece di labels
const chartData = [];
for (let x = 0; x <= 90; x += 2) {
    chartData.push({x: x, y: parseFloat(consumoGiornaliero(x).toFixed(4))});
}

const chart = new Chart(ctx, {
    type: "line",
    data: {
        datasets: [
            {
                label: "Consumo energetico (kWh/giorno)",
                data: chartData,
                borderColor: "#2563eb",
                backgroundColor: "rgba(37, 99, 235, 0.05)",
                fill: true,
                tension: 0.3,
                pointRadius: 2
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: "Minuti di porta aperta al giorno"
                },
                min: 0,
                max: 90
            },
            y: {
                title: {
                    display: true,
                    text: "Consumo (kWh/giorno)"
                },
                beginAtZero: true
            }
        }
    }
});

function popolaTabella() {
    const tbody = document.getElementById("tabellaBody");
    tbody.innerHTML = "";
    const base = consumoGiornaliero(0);

    for (let x = 0; x <= 90; x += 10) {
        const y = consumoGiornaliero(x);
        const deltaPercent = ((y - base) / base * 100).toFixed(2);

        const row = document.createElement("tr");
        row.innerHTML = `
            <td><strong>${x}</strong></td>
            <td>${y.toFixed(4)}</td>
            <td>${x === 0 ? "0.00" : deltaPercent}</td>
        `;
        tbody.appendChild(row);
    }
}

function calcolaValore() {
    const input = document.getElementById("xValue");
    const x = parseFloat(input.value);

    if (isNaN(x) || x < 0 || x > 90) {
        alert("Inserisci un valore tra 0 e 90 minuti.");
        return;
    }

    const y = consumoGiornaliero(x);
    const base = consumoGiornaliero(0);
    const deltaPercent = ((y - base) / base * 100).toFixed(2);
    const co2Daily = (y * CO2_PER_KWH).toFixed(3);
    const co2Yearly = (y * CO2_PER_KWH * 365).toFixed(1);

    document.getElementById("statX").textContent = x;
    document.getElementById("statY").textContent = y.toFixed(4);
    document.getElementById("statDelta").textContent = deltaPercent;
    document.getElementById("statCO2").textContent = co2Daily;
    document.getElementById("statCO2Year").textContent = co2Yearly;

    const statsBox = document.getElementById("statsBox");
    statsBox.classList.remove("d-none");

    updateIndicatorsFromCalculation(x, y);

    chart.data.datasets[1] = {
        label: `x = ${x} minuti`,
        data: [{ x: x, y: y }],
        pointRadius: 5,
        pointBackgroundColor: "#e11d48",
        type: "scatter"
    };

    chart.update();
}

function resetGrafico() {
    if (chart.data.datasets.length > 1) {
        chart.data.datasets.pop();
    }
    chart.update();
    document.getElementById("statsBox").classList.add("d-none");
    document.getElementById("xValue").value = 30;
}

// roba per il frigorifero
var fridgeOpen = false;
var currentTemp = 4;
var currentConsumption = 0.90;

function toggleFridge() {
    var door = document.getElementById("fridgeDoor");
    var coldAir = document.getElementById("coldAir");
    
    fridgeOpen = !fridgeOpen;
    
    if (fridgeOpen) {
        door.classList.add("open");
        coldAir.style.opacity = "1";
        // quando apri sale la temperatura
        currentTemp = 8;
        currentConsumption = 1.2;
    } else {
        door.classList.remove("open");
        coldAir.style.opacity = "0";
        // torna normale
        currentTemp = 4;
        currentConsumption = 0.90;
    }
    
    updateVisualIndicators();
}

function updateVisualIndicators() {
    document.getElementById("tempDisplay").textContent = currentTemp + "°C";
    document.getElementById("consumoDisplay").textContent = currentConsumption.toFixed(2) + " kWh";
    
    var energyFill = document.getElementById("energyFill");
    var percentage = Math.min((currentConsumption / 2) * 100, 100);
    energyFill.style.width = percentage + "%";
}

function updateIndicatorsFromCalculation(x, y) {
    var baseTemp = 4;
    var tempIncrease = (x / 90) * 6; // max 6 gradi in più
    currentTemp = baseTemp + tempIncrease;
    currentConsumption = y;
    
    updateVisualIndicators();
}

document.addEventListener("DOMContentLoaded", function () {
    popolaTabella();
    updateVisualIndicators();
    
    var input = document.getElementById("xValue");
    input.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            calcolaValore();
        }
    });
    
    setInterval(function() {
        if (!fridgeOpen && Math.random() > 0.8) {
            toggleFridge();
            setTimeout(function() {
                if (fridgeOpen) toggleFridge();
            }, 1500);
        }
    }, 12000);
});


