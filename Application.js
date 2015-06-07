var driver = require('oracledb');
var oracleUtilities = require('./node_modules/oracle-utilities/utilities.js');

var connectData = {
    user: "system",
    password: "myoracle",
    connectString: "localhost/XE"
};

driver.getConnection(
    connectData,
    function (err, connection) {
        if (err) {
            console.log('Connection failure cause: ');
            console.error(err.message);
            return;
        }
        console.log('Connection successful.');
        oracleUtilities.upgrade(connection);
        console.log('Upgrade successful');
        oracleUtilities.introspection(connection);
        console.log('Introspection successful');
        console.log('Start work:\n');

        //:::::::::::::::::::::::::::DATA QUERY START:::::::::::::::::::::::::::
        //connection.queryValue("SELECT avg(MIN_SALARY) from HR.JOBS", [], function (err, value) {
        //    console.log(value);
        //    console.log(err);
        //});

        //connection.queryRow("select * from HR.JOBS where JOB_ID = :job_id", ['SA_REP'], function (err, row) {
        //    console.log(row);
        //});

        //connection.queryCol("SELECT JOB_TITLE from HR.JOBS WHERE MAX_SALARY >= :salary", [16000], function (err, row) {
        //    console.log(row);
        //});

        //connection.queryHash("SELECT JOB_ID,JOB_TITLE, MIN_SALARY FROM HR.JOBS WHERE JOB_ID LIKE 'A%'", [], function (err, res) {
        //    console.log(res);
        //});

        //connection.queryKeyValue("SELECT JOB_TITLE, MIN_SALARY FROM HR.JOBS WHERE MIN_SALARY >:salary AND JOB_TITLE LIKE :title", [6000,'%Manager'], function (err, res) {
        //    console.log(res);
        //});
        //:::::::::::::::::::::::::::DATA QUERY END:::::::::::::::::::::::::::


        //:::::::::::::::::::::::::::CRUD START:::::::::::::::::::::::::::

        //var where = connection.where({
        //    ID: 120,
        //    LAST_NAME: "*nko?",
        //    FIRST_NAME: "Mike",
        //    SEX: "(MALE,FEMALE)",
        //    BIRTH_YEAR: ">1991",
        //    SALARY: "1000..2000",
        //    IQ: ">=120"
        //});
        //console.log(where);

        //var order = connection.order({
        //    LAST_NAME: 'desc',
        //    FIRST_NAME: 'desc',
        //    SALARY: 'asc'
        //});
        //console.log(order);

        //connection.select('HR.DEPARTMENTS', '*',
        //    {DEPARTMENT_ID: "(110,120,10,20,200,500)"},
        //    {DEPARTMENT_NAME: 'ASC'},
        //    function (err, results) {
        //        console.log(err);
        //        console.log(results);
        //    });

        //connection.insert('HR.DEPARTMENTS', {
        //    DEPARTMENT_ID: 500,
        //    DEPARTMENT_NAME: 'Accounting',
        //    LOCATION_ID: 1700
        //}, function (err, recordId) {
        //    console.log(err);
        //    console.log(recordId);
        //    connection.commit(function (error) {
        //    });
        //});

        //connection.update('HR.DEPARTMENTS', {
        //    DEPARTMENT_ID: 500,
        //    DEPARTMENT_NAME: 'Finance',
        //    MANAGER_ID: 200
        //}, function (err, affectedRows) {
        //    console.log(err);
        //    console.log(affectedRows);
        //    connection.commit(function (error) {
        //    });
        //});

        //connection.upsert('HR.DEPARTMENTS', {
        //    DEPARTMENT_ID: 510,
        //    DEPARTMENT_NAME: 'Control And Credit',
        //    MANAGER_ID: 201,
        //    LOCATION_ID: 1800
        //}, function (err, affectedRows) {
        //    console.log(err);
        //    console.log(affectedRows);
        //    connection.commit(function (error) {
        //    });
        //});

        //connection.delete('HR.DEPARTMENTS', {DEPARTMENT_ID: '>=500'}, function (err, affectedRows) {
        //    console.log(err);
        //    console.log(affectedRows);
        //    connection.commit(function (error) {
        //    });
        //});

        //connection.count('HR.DEPARTMENTS',function(err, results) {
        //    console.log(results);
        //});

        //:::::::::::::::::::::::::::CRUD END::::::::::::::::::::::::::::::::::::::


        //:::::::::::::::::::::::::::INTROSPECTION START:::::::::::::::::::::::::::
        //connection.fields('HR.COUNTRIES', function (err, res) {
        //    console.log(res);
        //    console.log(err);
        //});

        //connection.primary('HR.REGIONS', function(err, primary) {
        //   console.log(primary);
        //   console.log(err);
        //});

        //connection.foreign('HR.DEPARTMENTS', function(err, foreign) {
        //    console.log(foreign);
        //    console.log(err);
        // });

        //connection.constraints('HR.DEPARTMENTS', function(err, primary) {
        //    console.log(primary);
        //    console.log(err);
        // });

        //connection.tableInfo('REGIONS', function(err, res) {
        //   console.log(res);
        //   console.log(err);
        //});

        //connection.databases(function (err, res) {
        //    console.log(res);
        //    console.log(err);
        //});


         connection.processes( function(err, res) {
           console.log(res);
           console.log(err);
        });

        // connection.users( function(err, res) {
        //   console.log(res);
        //   console.log(err);
        //});

        //connection.indexes('HELP', function(err, res) {
        //    console.log(res);
        //    console.log(err);
        // });

        //connection.tables(function(err, primary) {
        //    console.log(primary);
        //    console.log(err);
        // });


        //connection.databaseTables('HR', function(err, res) {
        //    console.log(res);
        // });

        //:::::::::::::::::::::::::::INTROSPECTION END:::::::::::::::::::::::::::::

    });