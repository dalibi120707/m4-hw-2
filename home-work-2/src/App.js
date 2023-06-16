import './App.css';
import Tovar from './components/Tovar';

function App() {
  const menu = [
    //пиццы
    {
      id: 1,
      name: "Детская",
      price: 330,
      image:
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_40sm/Detskaia_40sm/Medium.png?hash=dbcff2d37ab8ce18b4c3c011ad23f971"
    },
    {
      id: 2,
      name: "Chili",
      price: 440,
      image:
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_40sm/Chili_40sm/Medium.png?hash=5ca56f52c67401ef1f6b6b7e36a4b0ab"
    },
    {
      id: 3,
      name: "Barbekyu",
      price: 550,
      image:
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_40sm/Barbekiu_40sm/Medium.png?hash=3b4522fe32379bc2ad5e9649e2faa199"
    },
    {
      id: 4,
      name: "Куриная",
      price: 540,
      image:
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_40sm/Kurinaia_40sm/Medium.png?hash=a6e401732e76557cd509799c1bdf9325"
    },
    //десерты
    {
      id: 5,
      name: "Медовик",
      price: 278,
      image: 
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v60/Desertyi/Medovik/Medium.png?hash=ec5e543506c6e6e971dd7455b7737ff6",
    },
    {
      id: 6,
      name: "Красный бархат",
      price: 188,
      image: 
       "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Desertyi/Krasnyii_Barkhat/Medium.png?hash=58497450ef31a6a01678d10bfd06e0ee",
    },
    {
      id: 7,
      name: "Три шоколада",
      price: 280,
      image: 
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Desertyi/Tri_shokolada/Medium.png?hash=70cb1ab686b5c27a4103fd97f9efd20b",
    },
    {
      id: 8,
      name: "Венские вафли",
      price: 290,
      image: 
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v54/Desertyi/Venskie_vafli/Medium.png?hash=e0da0fe4a9be3909b25215751d39d1ac",
    },
    //напитки
    {
      id: 9,
      name: "Nitro",
      price: 90,
      image:
        "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Kholodnyie_napitki/Nitro/Medium.png?hash=7e26343f1ed0c62b40d4bae615db7db0",
    },
    {
      id: 10,
      name: "Red Bull",
      price: 110,
      image: 
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Kholodnyie_napitki/Red_Bull/Medium.png?hash=72e5c677fae77406d6769f91511e90c0",
    },
    { 
      id: 11,
      name: "Sprite", 
      price: 70, 
      image: 
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Kholodnyie_napitki/Sprait_0_5l/Medium.png?hash=7dd06ff654e1f490b405feb0354461aa" 
    },
    { 
      id: 12, 
      name: "Fanta", 
      price: 70, 
      image: 
      "https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Kholodnyie_napitki/Fanta_1l/Medium.png?hash=5ce16a12c89084897c6726b408cf5cfc" 
    },
  ];
  return (
    <div className="App">
      {menu.map((products) => (
        <Tovar key={products.id} products={products}/>
      ))}
    </div>
  );
}

export default App;
