const sendGetRequest = async () => {
    let labels  = [];
    let res     = [];
    let prices  = [];
    
      try {
          const resp = await axios.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2021-08-01&end=2021-08-10&index=[USD]');   
          res = resp.data.bpi;
          for (var property in res) {
              if ( ! res.hasOwnProperty(property)) { continue;}
              //fill dataset values
              labels.push(property);
              prices.push(res[property]);
          }

          const data = {
              labels: labels,
              datasets: [{
                  label: '',
                  backgroundColor: 'black',
                  borderColor: 'orange',
                  data: prices,
              }]
          };

          const configLineChart = {
              type: 'line',
              data,
              options: {}
          };

          var chartLine = new Chart(
              document.getElementById('chartLine'),
              configLineChart
          );


      } catch (err) {
          // Handle Error Here
          console.error(err);
      }

     


      
  };  
    

   
  sendGetRequest()
       
  
    
  

