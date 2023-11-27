import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

interface IPropsStatistic {
  todoList: any[];
}

interface DataObject {
  [key: string]: number[]; // This allows any string key that maps to an array of numbers
}

function Statistic(props: IPropsStatistic) {
  const { todoList } = props;
  const [series, setSeries] = useState<any>([]);
  const [dateList, setDateList] = useState<any>([]); //categories

  useEffect(() => {
    const sortedDateArray = [...todoList].sort((a, b) => {
      return new Date(a.date).valueOf() - new Date(b.date).valueOf();
    });

    const uniqueDatesSet =
      new Set(sortedDateArray.map((item) => item.date)) ?? [];

    setDateList([...uniqueDatesSet]);

    const dataObject: DataObject = {
      todo: Array([...uniqueDatesSet].length).fill(0),
      doing: Array([...uniqueDatesSet].length).fill(0),
      done: Array([...uniqueDatesSet].length).fill(0),
    };

    console.log("dataObject", typeof dataObject);
    console.log("dataObject", dataObject);
    
    sortedDateArray.forEach((item) => {
      const date = item.date;
      const status = item.status;
      console.log("date", date);
      console.log("status", status);
      const indexOfDate = [...uniqueDatesSet].indexOf(date);
      // const indexOfDate = dateList.indexOf(date);
      // const indexOfDate = sortedDateArray.indexOf(date);
      console.log("indexOfDate", indexOfDate);
      if (indexOfDate !== -1) {
        // Increment the count for the specified status on that date
         dataObject[status][indexOfDate]++;
      }
      // return dataObject[status][indexOfDate] + 1;
    });
    
    const seriess = Object.keys(dataObject).map((status, index) => ({
      name: status,
      data: dataObject[status].map((count, i) => ({
        x: new Date(dateList[i]).getTime(),
        y: count,
      })),
    }));

    setSeries(seriess)

    // const counts: Counts = {};

    // // Lặp qua mảng sắp xếp và đếm số lượng trạng thái cho từng ngày
    // sortedDateArray.forEach((item) => {
    //   const date = item.date;
    //   const status = item.status;

    //   console.log("date", date);

    //   if (!counts[date]) {
    //     counts[date] = { todo: 0, doing: 0, done: 0 };
    //   }

    //   counts[date][status]++;
    // });
    // setSeries(counts);

  }, [todoList]);
  console.log("series", series);

  return (
    <div id="chart">
      <ReactApexChart
        options={{
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
            categories: dateList,
          },
          legend: {
            position: "right",
            offsetY: 40,
          },
          fill: {
            opacity: 1,
          },
        }}
        series={series}
        type="bar"
        height={350}
      />
    </div>
  );
}

export default Statistic;
