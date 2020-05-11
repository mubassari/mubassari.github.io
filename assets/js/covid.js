$(document).ready(function(){
    
  $.ajax({
    url: 'https://api.kawalcorona.com/indonesia/',
    type: 'GET',
    dataType: 'JSON',
    headers: {'Access-Control-Allow-Origin': '*'},
    success: function(data){

      var positif = data.positif;
      var meninggal = data.meninggal;
      var sembuh = data.sembuh;
      var dirawat = data.dirawat;
      console.log(positif);
      // Set new default font family and font color to mimic Bootstrap's default styling
      Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      Chart.defaults.global.defaultFontColor = '#858796';

      // Pie Chart Example
      var ctx = document.getElementById("myPieChart");
      var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["Positif", "Sembuh", "Meninggal", "Dirawat"],
          datasets: [{
            data: [positif, sembuh, meninggal, dirawat],
            backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b', '#232323'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#d13728', '#232323'],
            hoverBorderColor: "rgba(234, 236, 244, 1)",
          }],
        },
        options: {
          maintainAspectRatio: false,
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
          },
          legend: {
            display: true,
            position: "bottom"
          },
          cutoutPercentage: 0,
        },
      });
      $('<span>'+positif+'</span>').appendTo('#data-positif');
      $('<span>'+sembuh+'</span>').appendTo('#data-sembuh');
      $('<span>'+meninggal+'</span>').appendTo('#data-meninggal');
    }
  });
});