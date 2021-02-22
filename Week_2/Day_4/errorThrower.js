const processOrder = (customer, callback) => {
  console.log(`${customer} orders a burger!`);
  setTimeout(()=>{
    if (Math.random() > 0.5){
      burgerError = new Error ("Sorry your burger burst into flames");
    } else {
      let burgerError = false;
    }
    
    callback(burgerError, `Burger ready for ${customer}`);
   
  }, 3000);
}

try {
  processOrder('Sponge Bob', (err, message) => {
    if (!err) {
       console.log(`Message: ${message}`)
    } else {
      throw err;
    }
  }); //adding an error parameter to callbacks allows us handle the error inside the callback and then catch it with a try catch
} catch (error) {
  console.log(`Error: ${error.message}`)
}

console.log('Sponge Bob eats the burger');