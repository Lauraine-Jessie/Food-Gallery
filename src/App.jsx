import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Button from './Button/Button'
import List from './components/List'  
import passionFruit from './assets/passion-fruit.jpg'
import icecream from './assets/icecream.jpg'
import Vegetables from './assets/vegetables.jpg'

function App() {
  
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

const Main = () => {
  return (
    <main>
        <Food/>
    </main>
  )
}

 
const Food = () => {
const [visibleList, setVisibleList] = useState(null);  
const toggleList = (listId) => {
    setVisibleList(visibleList === listId ? null : listId);
  }

  return (
    <section>
        <h2>Food Section</h2>
        <p>We are going to talk about food 😋</p>
        
        <div className='card-wrapper'>

        <Card 
            title="Exotic Fruits" 
            image={passionFruit} 
            text="Discover tropical fruits from around the world"
            onClick={() => toggleList('fruits')}
            isActive={visibleList === 'fruits'}
        />
        <Card 
            title="Ice Cream" 
            image={icecream} 
            text="Explore some delicious frozen treats"
            onClick={() => toggleList('icecream')}
            isActive={visibleList === 'icecream'}
        />
        <Card 
            title="Vegetables" 
            image={Vegetables} 
            text="Learn about healthy and tasty vegetables"
            onClick={() => toggleList('vegetables')}
            isActive={visibleList === 'vegetables'}
        />
     </div>


      <List 

          id="fruits" 
          items={fruits} 
          category="Exotic Fruits" 
          isVisible={visibleList === 'fruits'} 
      />
      <List 
          id="icecream" 
          items={iceCreamFlavors} 
          category="Ice Cream Flavors" 
          isVisible={visibleList === 'icecream'} 
      />
      <List 
          id="vegetables" 
          items={vegetables} 
          category="Vegetables" 
          isVisible={visibleList === 'vegetables'} 
      />
    </section>
  )
}



const Card = ({title, image, text, onClick, isActive = false}) => {
    return (
    <div className={`card ${isActive ? 'active' : ''}`}>
        <h2 className='card-title'>{title}</h2>
        <img 
            className='card-image'
            src={image} 
            alt={title} 
            style={
                {width: '60%', 
                  height: 'auto',
                borderRadius: '7px'}
        
        }/>
        <p className='card-text'>{text}</p>
        <Button 
           onClick={onClick}
           text={isActive ? 'Show less' : 'Show more'}
        />
        </div>
  )
}


// List of exotic fruits
 const fruits = [
        {id: 1, name: 'Dragon Fruit',  description: 'A tropical fruit with a unique appearance and mildly sweet taste.' },
        {id: 2, name: 'Rambutan',  description: 'A hairy fruit with a juicy, sweet interior.' },
        {id: 3, name: 'Mangosteen',  description: 'Known as the "queen of fruits," it has a sweet and tangy flavor.' },   
        {id: 4, name: 'Durian',  description: 'Famous for its strong odor, it has a creamy texture and unique taste.' },
        {id: 5, name: 'Jackfruit',  description: 'A large fruit with a sweet, tropical flavor and fibrous texture.' }
    ];

  // List of ice cream flavors
 const iceCreamFlavors = [
        {id: 1, name: 'Vanilla', description: 'Classic and creamy vanilla flavor.'},
        {id: 2, name: 'Chocolate', description: 'Rich and indulgent chocolate ice cream.'},
        {id: 3, name: 'Strawberry', description: 'Sweet and fruity strawberry ice cream.'},
        {id: 4, name: 'Mint Chocolate Chip', description: 'Refreshing mint ice cream with chocolate chips.'},
        {id: 5, name: 'Cookies and Cream', description: 'Creamy ice cream with chunks of chocolate cookies.'}
    ];  

// List of vegetables
 const vegetables = [
        {id: 1, name: 'Carrot', description: 'Crunchy and sweet orange vegetable.'},
        {id: 2, name: 'Broccoli', description: 'Green vegetable rich in vitamins and minerals.'},
        {id: 3, name: 'Spinach', description: 'Leafy green vegetable packed with nutrients.'},
        {id: 4, name: 'Bell Pepper', description: 'Colorful vegetable with a sweet and crunchy texture.'},
        {id: 5, name: 'Cauliflower', description: 'Versatile vegetable with a mild flavor.'}
    ]; 


export default App;
