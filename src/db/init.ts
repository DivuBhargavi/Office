//import curd from './models/curd'
//import Hospital from './models/hospital';
//import Hospital1 from './models/hospital1';
import Language from './models/language';
//import Anusha from './models/anusha';

 


async function init(){
    const isDev = true;

    // await curd.sync({alter:isDev})
    // await Hospital.sync({alter:isDev})
    // await Hospital1.sync({alter:isDev})
       await Language.sync({alter:isDev})
    // await Anusha.sync({alter:isDev})
    
}

const dbInit =() => {
    init();
}

export default dbInit;