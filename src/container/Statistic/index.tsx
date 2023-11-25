import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface IPropsStatistic {
  datalist: {}[];
}

function Statistic(props: IPropsStatistic) {
  const { datalist } = props;

  const [series, setseries] = useState({
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
    },
  });
  const [options, setObject] = useState({
    xaxis: {
      type: "datetime",
      // categories: [
      //   // "01/10/2011 GMT",
      //   // "01/02/2011 GMT",
      //   // "01/03/2011 GMT",
      //   // "01/04/2011 GMT",
      //   // "01/05/2011 GMT",
      //   // "01/06/2011 GMT",
      // ],
      categories: [],
    },
    legend: {
      position: "right",
      offsetY: 40,
    },
    fill: {
      opacity: 1,
    },
  });

  useEffect(() => {
    setObject({
      xaxis: {
        type: "datetime",
        categories: datelist?.map((item) => item),
      },
    });
  }, [datelist]);

  return (
    <div id="chart">
      <ReactApexChart
        options={options as any}
        series={series as any}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Statistic;
