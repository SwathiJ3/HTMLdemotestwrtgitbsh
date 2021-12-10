//console.log("hello guvi")
//console.log("hello")

//-----------------------------

//step 1 :create a (XHR object)- new

var request= new XMLHttpRequest();

//Step 2 : request a connection or initiate/open a connection
//first parameter: 'GET'
// second parameter: 'api URL'
// optional 3rd parameter : TRUE(when having abnormal termination, we use this optional parameter to prevent any error in prog or any other codes, so it is compulsory to use true  )

request.open('GET','https://restcountries.com/v3.1/all',true);

//Step 3: sending a connection path 

request.send();

//step 4: Once the data successfully loaded
request.onload=function(){
    //datateavelling from server will be of string
    //need to convert from string to object
    var data=JSON.parse(request.response);
    console.log(data);

    // code fr 250 country names

    //for(var i=0;i<data.lenght;i++)
        //console.log(data[i].name)
    //for(var i in data)
    //console.log(i,data[i]['name'])
//print capital
    //for(var i in data)
    //console.log(i,data[i]['capital'])


//print name, capital,flag in asingle line    
 /*  for(var i=0;i<data.length;i++)
    {
        console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
    }*/

//print continents
    for(var i=0;i<data.length;i++)
    {
        console.log(data[i].continents);}


    
}