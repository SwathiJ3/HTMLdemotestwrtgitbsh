var request= new XMLHttpRequest();
   request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
     request.send();
       request.onload=function()
       {

            var data=JSON.parse(request.response);
              console.log(data);


              //a)filtering countries using region as Asia

              /*  let countryAsia = data.filter((each) =>
                         {
                         return each.region === "Asia";
                         });

                     console.log(countryAsia);
                         } */

             //c)printing all country names
                   /*  data.forEach((all) =>
                         {
                    console.log(all.name);
                         });


            // c) printing all capital names
                    data.forEach((all) =>
                         {
                     console.log(all.capital);
                         });
  
             //c) printing all flag urls
                 data.forEach((all) => 
                        {
                   console.log(all.flag);
                        });*/
 //////////////////////////////////////////////////////////////////////////////////////////////////
 
                       // printing all country nameswith latlang
                        //data.forEach((all) =>
                         //   {
                       //console.log(all.name,all.latlng);
                            //} );
                


                for (var i in data)
              {

                var name=data[i].name;
                var lang=data[i].latlng;
                wd(name,...lang);
              }}

              function wd(name,lat,lon)
              {



                var url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=22dd1e6524865eb80f2e326248416983`
                var request=new XMLHttpRequest();
                request.open(`GET`,url,true);
                request.send();
                request.onload=function()
                  {
                  var data=JSON.parse(request.response);
                  console.log(`${name}-${data.main.temp}`);
                  }
              }   



       
