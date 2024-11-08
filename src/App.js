import logo from './logo.svg';
import './App.css';
import Content from './Components/Content';



let configForExpanderComponent = ['Бренд', 'Призначення','Стандарт','Особливості'];

let configForCheckboxComponent = [
  [ 
  { title: 'TP-Link', value: 'tplink' },
  { title: 'Mikrotik', value: 'mikrotik' },
  { title: 'Asus', value: 'asus' },
  { title: 'Huaway', value: 'huaway' },
],
  [
    { title: 'Домашній', value: 'domashniy' },
    { title: 'Ігровий', value: 'igroviy' },
    { title: 'Офісний', value: 'ofisniy' },
  ],
  [
    { title: 'N150-300', value: 'n150-300' },
    { title: 'A1750-1900', value: 'a1750-1900' },
    { title: 'H3100+', value: 'h3100+' },
    { title: 'X2700-3600', value: 'x2700-3600' },
  ],
  [
    { title: 'VoIP', value: 'voip' },
    { title: 'MU-MIMO', value: 'mu-mimo' },
    { title: 'SIP', value: 'sip' },
    { title: 'Mesh', value: 'mesh' },
    { title: 'VoLTE', value: 'volte' }
  ]
];

let configContent = [
  { brand: 'tplink', model: 'Tp-Link1', priznachennia: 'ofisniy', standart: 'h3100+', osoblivosti: 'volte', titlePriznachennia: 'Офісний' },
  { brand: 'tplink', model: 'Tp-Link2', priznachennia: 'ofisniy', standart: 'a1750-1900', osoblivosti: 'mesh', titlePriznachennia: 'Офісний' },
  { brand: 'tplink', model: 'Tp-Link3', priznachennia: 'domashniy', standart: 'n150-300', osoblivosti: 'voip', titlePriznachennia: 'Домашній' },
  { brand: 'tplink', model: 'Tp-Link4', priznachennia: 'igroviy', standart: 'n150-300', osoblivosti: 'voip', titlePriznachennia: 'Ігровий' },
  { brand: 'tplink', model: 'Tp-Link5', priznachennia: 'domashniy', standart: 'a1750-1900', osoblivosti: 'mu-mimo', titlePriznachennia: 'Домашній' },
  { brand: 'tplink', model: 'Tp-Link6', priznachennia: 'domashniy', standart: 'h3100+', osoblivosti: 'sip', titlePriznachennia: 'Домашній' },
  { brand: 'tplink', model: 'Tp-Link7', priznachennia: 'domashniy', standart: 'a1750-1900', osoblivosti: 'mu-mimo', titlePriznachennia: 'Домашній' },
  { brand: 'tplink', model: 'Tp-Link8', priznachennia: 'ofisniy', standart: 'x2700-3600', osoblivosti: 'volte', titlePriznachennia: 'Офісний' },
  { brand: 'mikrotik', model: 'Mikrotik1', priznachennia: 'ofisniy', standart: 'h3100+', osoblivosti: 'volte', titlePriznachennia: 'Офісний' },
  { brand: 'mikrotik', model: 'Mikrotik2', priznachennia: 'ofisniy', standart: 'a1750-1900', osoblivosti: 'voip', titlePriznachennia: 'Офісний' },
  { brand: 'mikrotik', model: 'Mikrotik3', priznachennia: 'igroviy', standart: 'x2700-3600', osoblivosti: 'sip', titlePriznachennia: 'Ігровий' },
  { brand: 'mikrotik', model: 'Mikrotik4', priznachennia: 'igroviy', standart: 'h3100+', osoblivosti: 'mu-mimo', titlePriznachennia: 'Ігровий' },
  { brand: 'mikrotik', model: 'Mikrotik5', priznachennia: 'igroviy', standart: 'x2700-3600', osoblivosti: 'mesh', titlePriznachennia: 'Ігровий' },
  { brand: 'mikrotik', model: 'Mikrotik6', priznachennia: 'ofisniy', standart: 'x2700-3600', osoblivosti: 'sip', titlePriznachennia: 'Офісний' },
  { brand: 'asus', model: 'Asus1', priznachennia: 'domashniy', standart: 'a1750-1900', osoblivosti: 'volte', titlePriznachennia: 'Домашній' },
  { brand: 'asus', model: 'Asus2', priznachennia: 'domashniy', standart: 'a1750-1900', osoblivosti: 'voip', titlePriznachennia: 'Домашній' },
  { brand: 'asus', model: 'Asus3', priznachennia: 'igroviy', standart: 'n150-300', osoblivosti: 'mu-mimo', titlePriznachennia: 'Ігровий' },
  { brand: 'huaway', model: 'Huaway1', priznachennia: 'igroviy', standart: 'a1750-1900', osoblivosti: 'mesh', titlePriznachennia: 'Ігровий' },
  { brand: 'huaway', model: 'Huaway2', priznachennia: 'ofisniy', standart: 'h3100+', osoblivosti: 'voip', titlePriznachennia: 'Офісний' },
  { brand: 'huaway', model: 'Huaway3', priznachennia: 'igroviy', standart: 'x2700-3600', osoblivosti: 'volte', titlePriznachennia: 'Ігровий' },
  { brand: 'huaway', model: 'Huaway4', priznachennia: 'ofisniy', standart: 'a1750-1900', osoblivosti: 'mu-mimo', titlePriznachennia: 'Офісний' },
]



function App() {
  return (
    <div className="App">
      <Content  optionsTitles = { configForExpanderComponent } optionsForCheckbox = { configForCheckboxComponent} configContent = { configContent }/>  
    </div>
  );
}

export default App;

