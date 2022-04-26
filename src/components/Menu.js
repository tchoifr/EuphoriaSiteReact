import React from 'react'

function Menu() {
    let imageCarteEntrees = [{
        'image':"/img/entrees/croc.jpg",
        'titre':"Croqu'pistou",
        'description':"Version méditerranéenne du croque monsieur  Jambon cru, tomates, mozzarella pesto, gratiné à la ricotta et parmesan",
        'prix':"9€"
    },

    {
        'image':"/img/entrees/salade.jpg",
        'titre':"Salade",
        'description':"Salade de chèvre chaud Figues rôties, miel, noix, lardons",
        'prix':"10€"
    },

    {
        'image':"/img/entrees/veloute.jpg",
        'titre':"Velouté",
        'description':"Velouté butternut, chantilly maison salée aux noisettes",
        'prix':"7€"
    },

    


]

let imageCartePlats = [{
    'image':"/img/plats/entrecote.jpg",
    'titre':"Entrecôte",
    'description':"Sauce vin rouge échalote, ou sauce au poivre avec frites de patates douces ou classiques",
    'prix':"19€"
},

{
    'image':"/img/plats/loup.jpg",
    'titre':"Filet de loup",
    'description':"Sauce vierge, purée de panais, fenouil confit",
    'prix':"18€"
},

{
    'image':"/img/plats/terre.jpg",
    'titre':"Hamburger Terre",
    'description':"Salade, tomates, oignons, steack haché 100% pur boeuf, cheddar, sauce tartare",
    'prix':"15€"
},

{
    'image':"/img/plats/mer.jpg",
    'titre':"Hamburger Mer",
    'description':"Steack de thon mi-cuit, entouré de sésame, crème de mayonnaise maison au wasabi",
    'prix':"17€"
},

{
    'image':"/img/plats/riz.jpg",
    'titre':"L'Eupho-riz",
    'description':"Plat vegan, riz aux légumes et sauce tomates",
    'prix':"14€"
},

{
    'image':"/img/plats/tapas.jpg",
    'titre':"Camembert au four pour 2 personnes",
    'description':"Accompagné de potatoes et charcuterie corse artisanale De nombreuses tapas sont également proposées, selon la saison et les envies du chef, parmi des fritures, dattes aux bacon, tapenade, patatas bravas à la crème de chorizo...",
    'prix':""
},



]


let imageCarteDesserts = [{
    'image':"/img/desserts/creme.jpg",
    'titre':"Crème brulée",
    'description':"",
    'prix':"5€"
},

{
    'image':"/img/desserts/fondant.jpg",
    'titre':"Fondant au chocolat",
    'description':"",
    'prix':"7€"
},

{
    'image':"/img/desserts/profiteroles.jpg",
    'titre':"Profiteroles",
    'description':"",
    'prix':"7€"
},


{
    'image':"/img/desserts/tiramisu.jpg",
    'titre':"Tiramisu",
    'description':"",
    'prix':"6€"
},

]

var afficherCardDesserts = imageCarteDesserts.map(carte => {

    return(
        <div  className='card' data-aos="zoom-in" key={carte.titre}>
                <img src={carte.image} alt='img'/>
                <h3>{carte.titre} </h3>
                <p>{carte.description} </p>
                    <p> {carte.prix} </p>
            </div>

    )
})

var afficherCardEntrees = imageCarteEntrees.map(carte => {

    return(
        <div className='card' data-aos="zoom-in" key={carte.titre}>
                <img src={carte.image} alt='img'/>
                <h3>{carte.titre} </h3>
                <p>{carte.description} </p>
                    <p> {carte.prix} </p>
            </div>

    )
})

var afficherCardPlats = imageCartePlats.map(carte => {

    return(
        <div className='card' data-aos="zoom-in" key={carte.titre}>
                <img src={carte.image} alt='img'/>
                <h3>{carte.titre} </h3>
                <p>{carte.description} </p>
                    <p> {carte.prix} </p>
            </div>

    )
})


    return (
        <div className='menu'>
            <h1>Entrées</h1>
            {afficherCardEntrees}
            <h2>Plats</h2>
            {afficherCardPlats}
            <h2>Desserts</h2>
            {afficherCardDesserts}
        </div>
    )
}

export default Menu
