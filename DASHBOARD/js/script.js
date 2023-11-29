// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar=document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add('sidebar-responsive');
      sidebarOpen = true;
    }
  }

  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove('sidebar-responsive');
      sidebarOpen = false;
    }
  }

  // ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
    series: [
      {
        data: [1300, 1000, 300],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#FFA07A', '#6EC9FF', '#98FB98'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 4,
        horizontal: false,
        columnWidth: '40%',
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: ['Ingresos', 'Egresos', 'Balance'],
    },
    yaxis: {
      title: {
        text: 'Pesos',
      },
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();

  // AREA CHART
const areaChartOptions = {
    series: [
      {
        name: 'Ingresos',
        data: [31, 40, 30, 51, 42, 109, 100],
      },
      {
        name: 'Egresos',
        data: [11, 32, 25, 32, 34, 52, 41],
      },
    ],
    chart: {
      height: 350,
      type: 'area',
      toolbar: {
        show: false,
      },
    },
    colors: ['#FFA07A', '#6EC9FF'],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'Ingresos',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Egresos',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
    },
  };
  
  const areaChart = new ApexCharts(
    document.querySelector('#area-chart'),
    areaChartOptions
  );
  areaChart.render();