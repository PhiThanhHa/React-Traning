import React from "react";
import ReactApexChart from "react-apexcharts";

// interface MyProps {
//   ...
// }

// interface MyState {
//   value: string
// }
// class ApexChart extends React.Component<MyProps, MyState> {
class Statistic extends React.Component<any, any> {
  constructor(props: {} | Readonly<{}>) {
    super(props);

    this.state = {
      series: [
        {
          name: "Todo",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "Doing",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "Done",
          data: [11, 17, 15, 15, 21, 14],
        },
        {
          name: "review",
          data: [21, 7, 25, 13, 22, 8],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 10,
            dataLabels: {
              total: {
                enabled: true,
                style: {
                  fontSize: "13px",
                  fontWeight: 900,
                },
              },
            },
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/10/2011 GMT",
            "01/02/2011 GMT",
            "01/03/2011 GMT",
            "01/04/2011 GMT",
            "01/05/2011 GMT",
            "01/06/2011 GMT",
          ],
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
        />
      </div>
    );
  }
}

export default Statistic;
