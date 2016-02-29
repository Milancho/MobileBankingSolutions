MobileBankingSolutions.MenuEagerView = function (params) {

    var url = "http://localhost:8080/api/menu";
    var myData;

var viewModel = {
   
    //dataSource: new DevExpress.data.DataSource({
    //    load: function (loadOptions) {
    //        var d = $.Deferred();
    //        $.getJSON(url).done(function (data) {
    //            //console.log(data.data);
    //            d.resolve(data.Data, { totalCount: data.Data.length });
    //        });
    //        return d.promise();
    //    }
    //}),
   dataSource: ko.observable(new DevExpress.data.DataSource),
    Search_Click: function () {
    
        // prikazija
        DevExpress.ui.notify('Item Loaded', 'success', 3000);
        var d1 = $.Deferred();
        $.when(d1).done(function (v1) {
            // trgnija
            viewModel.dataSource(v1.Data);
            
        });

        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json; charset = utf - 8',
            dataType: 'json',
            success: function (data) {
                d1.resolve(data, { totalCount: data.length });
            }
        });
     }
    //dataSource: new DevExpress.data.DataSource({
    //    load: function (loadOptions) {
    //        var d = $.Deferred();
    //        console.log(url + '11');

    //        $.ajax({
    //            type: 'GET',
    //            url: url,
    //            contentType: 'application/json; charset = utf - 8',
    //            dataType: 'json',
    //            success: function (data) {
    //                d.resolve(data.Data, { totalCount: data.Data.length });
    //            }
    //        });
    //        return d.promise();
    //    }
    //})
};
return viewModel;
};



//};


//var url = "'http://localhost:8080/api/menu'";

//var d1 = $.Deferred();
//$.when(d1).done(function (v1) {
//    //viewModel.message(v1.message);
//    viewModel.dataSource(v1.data);
      
//});

//$.ajax({
//    type: 'GET',
//    url: url,
//    headers: { 'X-Requested-With': 'XMLHttpRequest' },
//    xhrFields: { withCredentials: true },
//    dataType: 'json',
//    success: function (data) {
//        d.resolve(data.Data, { totalCount: data.Data.length });
//    }
//});

//return {
    
//};