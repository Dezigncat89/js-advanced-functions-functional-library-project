// Filtering to get Total Sum of Car Prices
const topVehicles = [
  { make: 'Ford', model: 'F-150', type: 'truck', price: 28940 },
  { make: 'Ford', model: 'Fusion', type: 'sedan', price: 23170 },
  { make: 'Honda', model: 'CR-V', type: 'suv', price: 25350 },
  { make: 'Honda', model: 'Accord', type: 'sedan', price: 24970 },
  { make: 'Toyota', model: 'Rav4', type: 'suv', price: 26250 },
  { make: 'Toyota', model: 'Tundra', type: 'truck', price: 33825 },
  { make: 'Chevrolet', model: 'Equinox', type: 'suv', price: 23800 },
  { make: 'Chevrolet', model: 'Malibu', type: 'sedan', price: 22140 },
  { make: 'Nissan', model: 'Rouge', type: 'suv', price: 25750 },
  { make: 'Nissan', model: 'Titan', type: 'truck', price: 36650 }
];

fi = (function() {
  return {
    libraryMethod: function() {
      return "reading the article!";
    },

    each: function() {
const totalSum = 
  topVehicles.filter(c => c.type === 'suv'),
  topVehicles.map(c => c.price),
  c.price => c.price.reduce((x,y) => x + y, 0)
) (topVehicles);

console.log(totalSum);
      
// Adds New Array Property
topVehicles.forEach(c => {
 c['size'] = "large";
 if (c.type == 'suv'){
   c['size'] = "medium occupancy";
 }
 if (c.type == 'truck'){
   car['size'] = "small occupancy";
 }
});
}
  };
})();

fi.libraryMethod();


