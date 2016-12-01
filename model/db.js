var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/mongoapp');
//var db = monk('mongodb://testuser:gymkhanaiith16@ds023478.mlab.com:23478/gymkhanaiith')
//input#inputBooth.input-field(type="text", name="booth",placeholder="Enter Booth: kandi | odf-rec | odf-scitech")

/* Resources
http://stackoverflow.com/questions/24122981/how-to-stop-insertion-of-duplicate-documents-in-a-mongodb-collection
https://www.airpair.com/javascript/complete-expressjs-nodejs-mongodb-crud-skeleton
https://github.com/Automattic/monk
*/
