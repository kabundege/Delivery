export default [
    {
        image: require('../../assets/images/pizza1.png'),
        title:'Primavera Pizza',
        weight:'546 gr',
        rating:5.6,
        price:3.99,
        sizeName:"Medium",
        sizeNumber:14,
        crust:"Thin Crust",
        deliveryTime:30,
        ingridients:[
            {
                name:"ham",
                image: require('../images/ham.png')
            },
            {
                name:"tomato",
                image: require('../images/tomato.png')
            },
            {
                name:"cheese",
                image: require('../images/cheese.png')
            },
            {
                name:"garlic",
                image: require('../images/garlic.png')
            }
        ]
    },{
        image: require('../../assets/images/pizza2.png'),
        title:'Vegeterian Pizza',
        weight:'456 gr',
        rating:4.6,
        price:5.99,
        sizeName:"Small",
        sizeNumber:10,
        crust:"Thin Crust",
        deliveryTime:40,
        ingridients:[
            {
                name:"cheese",
                image: require('../images/cheese.png')
            },
            {
                name:"garlic",
                image: require('../images/garlic.png')
            }
        ]
    },{
        image: require('../../assets/images/pizza3.png'),
        title:'Peppelone Pizza',
        weight:'700 gr',
        rating:5.0,
        price:9.99,
        sizeName:"Large",
        sizeNumber:18,
        crust:"Thin Crust",
        deliveryTime:20,
        ingridients:[
            {
                name:"tomato",
                image: require('../images/tomato.png')
            },
            {
                name:"cheese",
                image: require('../images/cheese.png')
            }
        ]
    },
]