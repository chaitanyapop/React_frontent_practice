import { useState } from "react";


export default function Select_country_cities() {
  var [cities, setCities]=useState([])
  const countries=[
    {
      name:'Ind',
      value:'IN',
      cities:['Delhi', 'Mumbai']
    },
    {
      name:'PAK',
      value:'PK',
      cities:['Lahore', 'Karachi']
    },
    {
      name:'BAN',
      value:'BA',
      cities:['Dhaka', 'Mirpur']
    }
  ]
  function change_cities(e)
  {
    var cities_one=[]
    for(var i=0;i<countries.length;i++)
    {
      
      if(countries[i].value===e.target.value)
      {
        
        cities_one=countries[i].cities
       
        setCities(cities_one)
      }
    }
  }
  return (
    <div className="App">

        
      <select onChange={change_cities}>
        <option selected disabled>Select country</option>
        <option  value={countries[0].value}>India</option>
        <option  value={countries[1].value} >Pakistan</option>
        <option  value={countries[2].value} >Bangladesh</option>
      </select>
      <select>
        {cities.map((val)=>(
            <>
                <option>{val}</option>
            </>
            
        ))}
      </select>
      
      
    </div>
  );
}
