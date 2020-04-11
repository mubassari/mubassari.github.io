$(document).ready(function(){
    
  $.ajax({
    url: atob("aHR0cHM6Ly9wb21iZXIuZ2l0aHViLmlvL2NvdmlkMTkvdGltZXNlcmllcy5qc29u"),
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
      var indo = data["Indonesia"];
      
      var Tanggal = [];
      var Positif = [];
      var Meninggal = [];
      var Sembuh = [];

      var posall = indo[indo.length-1].confirmed;
      var menall = indo[indo.length-1].deaths;
      var semall = indo[indo.length-1].recovered;
      // Set new default font family and font color to mimic Bootstrap's default styling
      Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
      Chart.defaults.global.defaultFontColor = '#858796';
      
      $.each(indo, function(i,item){
        if(i < 40 || i % 7 != 0 || i == indo.length-1){
          return;
        } else {
          console.log(moment(indo[i].date).format('DD MMM'));
          Tanggal.push(moment(indo[i].date).format('DD MMM'));
          Positif.push(indo[i].confirmed);
          Sembuh.push(indo[i].recovered);
          Meninggal.push(indo[i].deaths);
        }
      });
      Tanggal.push('Hari Ini');
      Positif.push(posall);
      Sembuh.push(semall);
      Meninggal.push(menall);
      
      function number_format(number, decimals, dec_point, thousands_sep) {
        // *     example: number_format(1234.56, 2, ',', ' ');
        // *     return: '1 234,56'
        number = (number + '').replace(',', '').replace(' ', '');
        var n = !isFinite(+number) ? 0 : +number,
          prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
          sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
          dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
          s = '',
          toFixedFix = function(n, prec) {
            var k = Math.pow(10, prec);
            return '' + Math.round(n * k) / k;
          };
        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
        if (s[0].length > 3) {
          s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
        }
        if ((s[1] || '').length < prec) {
          s[1] = s[1] || '';
          s[1] += new Array(prec - s[1].length + 1).join('0');
        }
        return s.join(dec);
      }

      // Bar Chart Example
      var ctx = document.getElementById("myBarChart");
      var myBarChart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: Tanggal,
          datasets: [{
            label: "Positif",
            backgroundColor: "rgba(78, 115, 223, 1)",
            data: Positif,
          },{
            label: "Sembuh",
            backgroundColor: "#1cc88a",
            data: Sembuh,
          },{
            label: "Meninggal",
            backgroundColor: "#e74a3b",
            data: Meninggal,
          }],
        },
        options: {
          maintainAspectRatio: false,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          },
          scales: {
            xAxes: [{
              ticks: {
                min: 0,
                maxTicksLimit: 10,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                  return number_format(value);
                }
              },
              gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
              }
            }],
            yAxes: [{
              time: {
                unit: 'month'
              },
              gridLines: {
                display: false,
                drawBorder: false
              },
              ticks: {
                maxTicksLimit: 20
              },
              maxBarThickness: 25
            }],
          },
          legend: {
            display: true,
            position: "bottom"
          },
          tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            titleMarginBottom: 10,
            titleFontColor: '#6e707e',
            titleFontSize: 14,
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            intersect: false,
            mode: 'index',
            caretPadding: 10,
            callbacks: {
              label: function(tooltipItem, chart) {
                var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
                return datasetLabel + ' : ' + number_format(tooltipItem.xLabel) + ' Orang';
              }
            }
          },
        }
      });

      // Pie Chart Example
      var ctx = document.getElementById("myPieChart");
      var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ["Positif", "Sembuh", "Meninggal"],
          datasets: [{
            data: [posall, semall, menall],
            backgroundColor: ['#4e73df', '#1cc88a', '#e74a3b'],
            hoverBackgroundColor: ['#2e59d9', '#17a673', '#d13728'],
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
      $('<span>'+posall+'</span>').appendTo('#data-positif');
      $('<span>'+semall+'</span>').appendTo('#data-sembuh');
      $('<span>'+menall+'</span>').appendTo('#data-meninggal');
    }
  });
});