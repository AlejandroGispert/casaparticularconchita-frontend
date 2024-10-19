import React from "react";
import { Bar as BarChart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// import { Bar as BarChart } from "react-chartjs";

// BarChart.register();

const BOOKINGS_BUCKETS = {
  Enero: {
    min: 0,
    max: 100,
  },
  Febrero: {
    min: 100,
    max: 200,
  },
  Marzo: {
    min: 20,
    max: 100,
  },
  Abril: {
    min: 20,
    max: 100,
  },
  Mayo: {
    min: 20,
    max: 100,
  },
  Junio: {
    min: 20,
    max: 100,
  },
  Julio: {
    min: 20,
    max: 100,
  },
  Agosto: {
    min: 20,
    max: 100,
  },
  Septiembre: {
    min: 20,
    max: 100,
  },
  Octubre: {
    min: 20,
    max: 100,
  },
  Noviembre: {
    min: 20,
    max: 100,
  },
  Diciembre: {
    min: 20,
    max: 100,
  },
};

const bookingsChart = (props) => {
  const chartData = { labels: [], datasets: [] };
  let values = [];
  for (const bucket in BOOKINGS_BUCKETS) {
    const filteredBookingsCount = props.bookings.reduce((prev, current) => {
      if (
        // change this to date
        current.event.price > BOOKINGS_BUCKETS[bucket].min &&
        current.event.price < BOOKINGS_BUCKETS[bucket].max
      ) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);
    values.push(filteredBookingsCount);

    //months []
    chartData.labels.push(bucket);
    chartData.datasets.push({
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: values,
      label: "en desarrollo",
      backgroundColor: "green",
    });
    values = [...values];
    values[values.length - 1] = 0;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <BarChart data={chartData} />
    </div>
  );
};

export default bookingsChart;
