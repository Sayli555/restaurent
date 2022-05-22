import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Offers from './components/Offers';
import Restaurants from './components/Restaurants';
import userinfo from "./data/userinfo.json";
import offers from "./data/offres.json";
import restorent from "./data/restorent.json"
import { useState } from 'react';
import RatingFilter from './components/RatingFilter';
import PaymentFilter from './components/PaymentFilter';

const filter={
  1:"Cost High to Lost",
  

2:  "Cost Lost to High",

3:"rating",
  
4:
  "Delivery Time",
5:
  "Relevence",
}

const rating={
  11:"1*",
  

22:  "2*",

33:"3*",
  
44:
  "4*",
55:"rating above 4",
}


const paymentMethods={
  "all":"All",
  "cash":"Cash",
  "card":"Card",
  "upi":"Upi"
}
function App() {

  const [filterby,setFilterby]=useState("");
  const [data,setData]=useState(restorent);
  const [ratingby,setRating]=useState("");
  const [paymnetmeth,setpaymentMeth]=useState("")


  const updatefilter=(newfilter)=>{

    switch(newfilter){
      case "1":{
        setFilterby(1);
        data.sort((a,b) => a.costForTwo -b.costForTwo );
        setData([...data]);
        break;          
      }

      case "2":{
        setFilterby(2);
        data.sort((a,b) => b.costForTwo -a.costForTwo );
        setData([...data]);
        break;
      }
      default:{
        setData(restorent);
        break;
      }
    }
  }

  // nst result = words.filter(word => word.length > 6);

  const updaterating=(rating)=>{
    switch(rating){
      case "11":{
      setRating(1);
      
      var result=restorent.filter(rate => rate.rating>=1);
        setData(result);
        break       
      }
      case "22":{
        setRating(2);
       
      
        var result=restorent.filter(rate => rate.rating >=2);
          setData(result);
          break;          
        }

        case "33":{
          setRating(3);
          
          
          var result=restorent.filter(rate=> rate.rating >=3);
            setData(result);
            break;          
          }
          case "44":{
            setRating(4);
            console.log("card")
            var result=restorent.filter(rate=> rate.rating >=4);
              setData(result);
              
              break;          
            }

            case "55":{
              setRating(4);
              
              var result=restorent.filter(rate=> rate.rating >=4);
              result.sort((a,b)=> b-a);

              setData(result)
                
                break;          
              }

          
      default:{
        setData(restorent);
        break;
      }
    }
  }

 
  const payment=(payment)=>{
    switch(payment){
      case "all":{
      setRating(1);
      setData(restorent);
        break       
      }
      case "cash":{
        setRating(2);
       console.log("cash")
      
        var result=restorent.filter(rate => rate.payment_methods.cash !=false);
          setData(result);
          break;          
        }

        case "upi":{
          setRating(3);
          console.log("upi")
          
          var result=restorent.filter(rate => rate.payment_methods.upi !=false);
          setData(result);
            break;          
          }
          case "card":{
            setRating(4);
            console.log("card")
            var result=restorent.filter(rate => rate.payment_methods.card !=false);
            setData(result);
              
              break;          
            }
          
      default:{
        setData(restorent);
        break;
      }
    }
  }



 

  return (
    <div className="App">
     <Navbar {...userinfo.location}/>
    
     <Offers offers={offers}/>
     <section className="near-you">
     <Filter filter={filter} updatefilter={updatefilter} currentfilterby={filterby}/>
     <RatingFilter rating={rating} updaterating={updaterating} currentratingby={ratingby}/>
     <PaymentFilter paymentMethods={paymentMethods} updatepayment={ payment} currentfilterby={filterby}/>

      <Restaurants  restorent={data}/>
     </section>   
    </div>
  );
}

export default App;
