//Chart Options
const options = {
  chart: {
    height: 450,
    width: "100%",
    type: "bar",
    background: "#f4f4f4",
    foreColor: "#333"
  },
  series: [
    {
      name: "Meditation Minutes",
      data: [2, 5, 14, 27, 9, 11, 34]
    }
  ],
  xaxis: {
    categories: ["Mon", "Tues", "Weds", "Thurs", "Fri", "Sat", "Sun"]
  },
  plotOptions: {
    bar: {
      horizontal: false
    }
  },
  fill: {
    colors: ["#feb72b"]
  },
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Minutes Meditated Daily",
    align: "center",
    margin: 20,
    offsetY: 20,
    style: {
      fontSize: "25px"
    }
  }
};

//Initialise Chart
const chart = new ApexCharts(document.querySelector("#chart"), options); //takes in a selector that we want to output our data in

//Render Chart
chart.render();

//Event method example
document.querySelector("button").addEventListener("click", () =>
  chart.updateOptions({
    plotOptions: {
      bar: {
        horizontal: true
      }
    }
  })
);
