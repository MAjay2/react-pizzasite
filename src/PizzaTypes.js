import React from 'react'
import Card from './Card'


    export default function PizzaTypes() {
        return (
            <div className="container mt-5">
            <h3 className="text-center display-4">Pizza Types</h3>
            <div className="row row-cols-4 mt-5">
              <Card
                img = "./images/pizza slider 3.jpg" 
                title = "Cheese Pizza"
                description = "Sometimes all you want at the end of the day is a simple cheese pizza. This recipe turns simple into sublime with the addition of an exceptional pizza dough, low-moisture mozzarella cheese."
    
              />
    
              <Card
                img = "./images/pizza slider1.jpg" 
                title = "Meat Pizza"
                description = "If you love pizza in all it's bready and cheesy glory, but still find yourself hungry for something more substantial, then chances are you'll be a fan of meat lover's pizza."
               />
    
              <Card
                img = "/images/pizza slider 2.jpg" 
                title = "Pepperoni Pizza"
                description = "Pepperoni is an American variety of spicy salami made from cured pork and beef seasoned with paprika or other chili pepper. Prior to cooking, pepperoni is characteristically soft, slightly smoky, and bright red."
               />
    
              <Card
                  img = "./images/pizza slider 3.jpg"
                  title = "Vegetable Pizza"
                  description = "Any vegetable makes a healthier topping than meat. Most marry well with pizza, so mix and match your favorites. At the chains, vegetable pizzas tend to have fewer calories and less fat—and there are a surprising number of decent choices"
               />
    
    
            </div>
          </div>

           
  )
}

