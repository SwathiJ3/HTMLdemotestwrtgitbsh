var request= new XMLHttpRequest();
   request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
     request.send();
       request.onload=function()
       {

            var data=JSON.parse(request.response);
              console.log(data);

                 // printing all country nameswith latlang
                        /* data.forEach((all) =>
                           {
                       console.log(all.name,all.latlng);
                            } ); */




           
              for (var i in data)
              {
                try{

                var name=data[i].name;
                var lang=data[i].latlng;
                  if(lang.length===0) throw new Error("Longitude not found ");
                wd(name,...lang);
                   }

                catch(e){
                  console.log("invalid coordinate"+name+" "+e.message);
                        }
              }
       }

              function wd(name,lat,lon)
              {

                //console.log(name);
                //console.log(lat);
                //console.log(lon);



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


        