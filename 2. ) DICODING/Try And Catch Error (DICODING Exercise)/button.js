const button = document.querySelector("#myBtn");
const input = document.querySelector("#myInput");
const mypara = document.querySelector("#demo");

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateNumberInput(a,b,c) {
    if (typeof a !== "number") {
        throw new ValidationError('Argumen pertama harus number') ;
    }
    if (typeof b !== "number") {
        throw new ValidationError('Argumen kedua harus number');
    }
    if (typeof c !== "number") {
        throw new ValidationError('Argumen ketiga harus number');
    }

}

const detectTriangle = (a, b, c) => {
    // TODO 3

    try {
        validateNumberInput(a, b, c)

        if (a === b && b === c) {
            console.log('Segitiga sama sisi')
          return 'Segitiga sama sisi';
        }
      
        if (a === b || a === c || b === c) {
            console.log('Segitiga sama kaki')
          return 'Segitiga sama kaki';
        }

        return 'Segitiga sembarang';

    } catch (error) {
        if (error instanceof ValidationError) {
            console.log(error.message);
        }
    }
  
    

   
    
  };

detectTriangle(1, 1, false);
