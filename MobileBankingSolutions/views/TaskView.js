MobileBankingSolutions.TaskView = function (params) {

    var myArray = new DevExpress.data.ODataStore({
        url: "http://localhost:36927/DataService.svc/rTask",
        key: "rTaskID",
        keyType: "Int32"
    });
    
    var viewModel = {
        //  Put the binding properties here
        dataSource: new DevExpress.data.DataSource({
            store: myArray,
            filter: ["Status", "=", 1]
        })
    };
    
    return viewModel;
};