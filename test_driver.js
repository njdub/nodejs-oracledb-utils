/**
 * Created by Dub on 13-Jan-15.
 */
console.log("Including driver module");
var oracledb = require('oracledb');

console.log('Preparing connection data...');
var connectData = {
    user: "system",
    password: "myoracle",
    connectString: "localhost/XE"
};
console.log('Trying to get connection...');
oracledb.getConnection(
    connectData,
    function (err, connection) {
        if (err) {
            console.log('Connection failure cause: ');
            console.error(err.message);
        } else {
            console.log('Connection successful.');
            //console.log('Closing connection...');
            ////Releasing connection has incorrect implementation yet
            //connection.release(function (err) {
            //    console.log('Some problem during closing connection: ');
            //    console.error(err);
            //});
        }
    });
