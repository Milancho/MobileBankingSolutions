MobileBankingSolutions.books = function (params) {
    
    //var myArray = new DevExpress.data.ODataStore({
    //    url: "http://localhost:36927/DataService.svc/Books",
    //    key: "Id",
    //    keyType: "Int32"
    //});

    //var viewModel = {
    //    //  Put the binding properties here
    //    dataSource: new DevExpress.data.DataSource({
    //        store: myArray
    //    })
    //};

    var context = new DevExpress.data.ODataContext({
        url: "http://localhost:36927/DataService.svc",
        errorHandler: function (error) {
            alert(error.message);
        },
        entities: {
            Books: {
                key: "Id",
                keyType: "Int32"
            },
            rTask: {
                key: "rTaskID",
                keyType: "Int32"
            }
        }
    });



    var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            store: context.Books
        })
    };


    return viewModel;
};



