import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 
  
  foodDetails = [
    {
      id: 1,
      foodName: "Iron Man 3",
      foodDetails: "Iron Man",
      foodPrice: 20,
      foodImg: "/assets/img/img1.jpg"
    },
    
    {
      id:2,
      foodName:"Batman",
      foodDetails:"Batman",
      foodPrice:32,
      foodImg:"/assets/img/img2.jpg"
    },
    {
      id:3,
      foodName:"Turbo",
      foodDetails:"Turbo",
      foodPrice:14,
      foodImg:"/assets/img/img3.jpg"
    },
    {
      id:4,
      foodName:"Avengers",
      foodDetails:"End Game",
      foodPrice:100,
      foodImg:"/assets/img/img4.jpg"
    },
    {
      id:5,
      foodName:"Comida5",
      foodDetails:"La comida5",
      foodPrice:100,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Comida6",
      foodDetails:"La comida6",
      foodPrice:100,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]


  

}
