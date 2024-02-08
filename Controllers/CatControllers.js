const cats = [
    { name: "Salem",
     color: "black", 
     lovesLasagna: false },
    { name: "Garfield", 
    color: "orange", 
    lovesLasagna: true },
    { name: "Heathcliff", 
    color: "orange", 
    lovesLasagna: false },
  ];
  
  const getCats = (req, res) => {
    res.send(cats)
  }
  

  const getCatById = (req, res) => {
    res.send(cats[req.params.id])}

  module.exports = {
    getCats, 
    getCatById
  }