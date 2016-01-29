MobileBankingSolutions.MessageView = function (params) {
    var viewModel = {
        //  Put the binding properties here
        dataSource: new DevExpress.data.DataSource({
            load: function (loadOptions) {
                var d = $.Deferred();
                $.getJSON('http://localhost:44661/api/Message').done(function (data) {
                    console.log(data);
                    d.resolve(data, { totalCount: data.length }); 
                });
                return d.promise();
            }

        })
    };

    return viewModel;
};


//load: function (loadOptions) {
//    return $.getJSON('http://localhost:9167/api/customer');
//},
//map: function (item) {
//    return {
//        id: item.customerId,
//        name: item.customerName
//    };
//}
//})



//var myArray = new DevExpress.data.ODataStore({
//    url: "http://localhost:36927/DataService.svc/Books",
//    key: "Id",
//    keyType: "Int32"
//});
    
//var viewModel = {
//    //  Put the binding properties here

//    dataSource: new DevExpress.data.DataSource({
//        store: myArray

       


