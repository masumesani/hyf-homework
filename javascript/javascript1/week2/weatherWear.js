function whatToWear(temperature) {
    if (temperature <= 0 && temperature >= -10) {
        return "Time to hug your North Face Jacket";
      }
      
      else if (temperature <= 10 && temperature > 0) {
        return "How about to have an extra cardigan :)";
      }
      else if (temperature <= 20 && temperature > 10) {
        return "Light Sweater would save you at the end of the day";
      }
      else if (temperature <= 30 && temperature > 20) {
        return "Celebrate this nice weather by shorts and Tank top";
      }
      else if (temperature <= 40 && temperature > 30) {
        return "Fetch your swimwear and take one day off to enjoy sea and surf ";
      }
      else {
        return "Please stay inside and check temperature again";
      }
    }
   let clothesToWear = whatToWear(10);
    console.log(clothesToWear);
    