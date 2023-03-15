const lodash = require('lodash');
const axios = require('axios');
const validator = require('validator');
const fs = require('fs');
const { parse } = require('csv-parse')

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evens = lodash.filter(array, n => n % 2 == 0);
// console.log(evens);

// const url = 'https://jsonplaceholder.typicode.com/posts/1';
// const fetch = async () => {
//     const response = await axios.get(url);
//     console.log(response.data);
// }

// fetch();

// const isEmail = validator.isEmail('varlopecar@gmail.com');
// console.log(isEmail);

const results = [];

fs.createReadStream('./data/kepler.csv')
    .pipe(parse({
        comment: '#',
        columns: true
    }))
    .on('data', row => {
        results.push(row);
    }
    )
    .on('end', () => {
        results.forEach((planet) => {
            if (
                planet.koi_disposition == "CONFIRMED" &&
                planet.koi_prad < 1.6 &&
                planet.koi_insol > 0.36 &&
                planet.koi_insol < 1.11
            )
                console.log(planet.kepler_name);
        });
    }
    );
