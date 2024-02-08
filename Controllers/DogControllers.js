const dogs = [
    { name: "Poddle",
     color: "black", 
     lovesChicken: false },
    { name: "Toy Poddle", 
    color: "brown", 
    lovesBeef: true },
    { name: "Mini Poddle", 
    color: "white", 
    lovesTurkey: true },
  ];
  
  const getDogs = (req, res) => {
    res.send(dogs)
  }
  

  const getDogByName = (req, res) => {
    res.send(dogs[req.params.id])}

  module.exports = {
    getDogs, 
    getDogById
  }