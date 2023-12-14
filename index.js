// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
     const hqLocation = 42;
     
     const distanceInBlocks = Math.abs(pickupLocation - hqLocation);
     
     return distanceInBlocks;
   }
   function distanceFromHqInFeet(pickupLocation) {
     
     const distanceInBlocks = distanceFromHqInBlocks(pickupLocation);
     
     const distanceInFeet = distanceInBlocks * 264;
     
     return distanceInFeet;
   }
   function calculatesFarePrice(start, destination) {
     const distanceInFeet = distanceTravelledInFeet(start, destination);
     
     
     if (distanceInFeet <= 400) {
       return 0;
     }

     else if (distanceInFeet <= 2000) {
       return (distanceInFeet - 400) * 0.02;
     }
     
     else if (distanceInFeet <= 2500) {
       return 25;
     }
     
     else {
       return 'cannot travel that far';
     }
   }
   
   