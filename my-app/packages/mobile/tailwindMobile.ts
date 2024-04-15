// lib/tailwind.js
import { create } from 'twrnc';


// create the customized version...
const twApp = create(require('./tailwind.config')); // <- your path may differ

export default twApp;
// ... and then this becomes the main function your app uses
