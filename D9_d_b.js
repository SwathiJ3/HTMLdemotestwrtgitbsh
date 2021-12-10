var request= new XMLHttpRequest();
   request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
     request.send();
       request.onload=function()
       {

            var data=JSON.parse(request.response);
              console.log(data);


               // b) filtering countries using population below 200000
    let population = result.filter((each) => {
      return each.population < 200000;
    });
    console.log(population);



              /*for(var i=0;i<data.length;i++)
              {
                  console.log(data[i].name+" "+data[i].population);
                } */
              


               // d) total population of countries

            let totalPopulation = data.reduce((total,item) =>
                {
                 return total + item.population; 
                }, 0);
            
                console.log(totalPopulation);


        }