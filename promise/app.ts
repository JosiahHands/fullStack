import {checkAvailability} from './library.js'

const onFulfill: any = (itemsArray: string) => {
  console.log(`Items checked: ${itemsArray}`);
  console.log(`Every item was available from the distributor. Placing order now.`);
};

const onReject = (rejectionReason: string) => {
	console.log(rejectionReason);
};

// Write your code below:
const checkSunglasses = checkAvailability (
  'sunglasses', 'Favorite Supply Co.'
);
const checkPants = checkAvailability('pants', 'Favorite Supply Co.');
const checkBags = checkAvailability('bags', 'Favorite Supply Co.');

Promise.all([checkSunglasses, checkPants, checkBags]) 
  .then(onFulfill)
  .catch(onReject)