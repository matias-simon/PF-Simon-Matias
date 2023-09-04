

const instrumentos = [
  {
    id: 1,
    marca: "Ibanez",
    modelo: "AX-100",
    precio: 150000,
    cantidad: 1,
    img: "https://www.play-acoustic-guitar.com/images/Fender-Sonoran-S.jpg",
    descripcion: "lorem ipsum dolor sit amet",
    tipo: "guitarra",
  },
  {
    id: 2,
    marca: "Fender",
    modelo: "FC-150",
    precio: 235000,
    cantidad: 1,
    img: "https://acoustika-onlineshop.com/cdn/shop/products/preview_7_300x300.jpg?v=1587715700",
    descripcion: "lorem ipsum dolor sit amet",
    tipo: "guitarra",
  },
  {
    id: 3,
    marca: "Martin",
    modelo: "AC-26",
    precio: 280000,
    cantidad: 1,
    img: "https://cdn11.bigcommerce.com/s-af09k78diz/products/8387/images/20538/Martin-000-28-Brooke-Ligertwood_f-Acoustic-Guitar-Natural-1__10177.1665816139.386.513.png?c=2",
    descripcion: "lorem ipsum dolor sit amet",
    tipo: "guitarra",
  },
  {
    id: 4,
    marca: "Fender",
    modelo: "BA-89",
    precio: 243890,
    cantidad: 1,
    img: "https://m.media-amazon.com/images/S/aplus-media/vc/191ba778-93c1-4e64-8af5-f30ee050806a.__CR0,169,1250,1250_PT0_SX300_V1___.jpg",
    descripcion: "lorem ipsum dolor sit amet",
    tipo: "bajo",
    },
    {
    id: 5,
    marca: "Fender",
    modelo: "AZ-140",
    precio: 155870,
    cantidad: 1,
    img: "https://m.media-amazon.com/images/I/31+Si53aIPL._SR290,290_.jpg",
    descripcion: "lorem ipsum dolor sit amet",
    tipo: "bajo",
    },
    {
    id: 6,
    marca: "Ibanez",
    modelo: "AX-100",
    precio: 234789,
    cantidad: 1,
    img: "https://greinscasademusica.com/wp-content/uploads/2019/12/0970743106_gtr_frt_001_rr-e1590268615801-300x300.jpg.webp",
    descripcion: "lorem ipsum dolor sit amet",
    tipo:"bajo"

    }

];

export const getInstrumentos = ()=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{resolve(instrumentos)}, 2000)
  })
}

export const getInstrumento= (itemId)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const instrument = instrumentos.find((instrumento) => instrumento.id === parseInt(itemId))
      resolve(instrument)
    },2000)
  })
}
export const getCategory=(tipo)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      const category = instrumentos.filter((instrumento) => instrumento.tipo === tipo)
      resolve(category)
    },2000)
  })

}


