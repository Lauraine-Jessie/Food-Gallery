import Card from './components/Card'
import List from './components/List'
import passionFruit from '../assets/passion-fruit.jpg'
import icecream from '../assets/icecream.jpg'
import Vegetables from '../assets/vegetables.jpg'


const Food = () => {
    
  return (
    <section>
        <h2>Food Section</h2>
        <p>We are going to talk about food 😋</p>
        
        <div className='card-wrapper'>
                <Card title="Exotic fruits" image={passionFruit} text="This is a card 
                component that displays information about exotic fruits." style="fruits-btn"/>
                <Card title="Icecream" image={icecream} text="This is a card 
                component that displays information about icecream." style="icecream-btn" />
                <Card title="Vegetables" image={Vegetables} text="This is a card 
                component that displays information about Vegetables." style="vegetables-btn" />
                <Card title= 'Default Title'
                      image ='https://via.placeholder.com/150'
                      text= 'This is a default text for the card component.'/>
        </div>

        <List className="display" items={fruits} category="Exotic fruits"></List>
        <List className="display" items={iceCreamFlavors} category="Ice Cream Flavors"></List>
        <List className="display" items={vegetables} category="Vegetables"></List>
    </section>
  )
}

export default Food
