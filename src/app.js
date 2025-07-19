import getData from './lib/service.js';

(async () => {
    var data = await getData(1);
    console.log(data);
})()


