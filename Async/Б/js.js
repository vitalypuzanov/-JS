function makeDroids() {
    const droids = [];
    for (var i = 0; i < 10; i++) { 
    droids.push(i);
    console.log("D" + i);
    }
     return droids;  
    }
    
    console.log(makeDroids())
    