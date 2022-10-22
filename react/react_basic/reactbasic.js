//default imports 

import obj from './temp'
import yolo from './temp'

console.log(obj);
console.log(yolo);

//named imports 

import {key as haathi } from './strings';
import { exportobj } from './strings';

//to import all at once
 
import * as bundled from './strings'
bundled.key;
console.log(haathi);

console.log(exportobj);



