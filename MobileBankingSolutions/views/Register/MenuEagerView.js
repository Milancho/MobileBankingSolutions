MobileBankingSolutions.MenuEagerView = function (params) {

    var url = "http://localhost:8080/api/menu";
    var myData;

    var viewModel = {
        loadPanelVisible: ko.observable(false),

    // (1)
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

    // (2)
    dataSource: ko.observable(new DevExpress.data.DataSource),
    Search_Click: function() {
        this.loadPanelVisible(true);
        var d1 = $.Deferred();
        $.when(d1).done(function (v1) {
            viewModel.loadPanelVisible(false);
            viewModel.dataSource(v1.Data);
        });

        $.ajax({
            type: 'GET',
            url: url,
            contentType: 'application/json; charset = utf - 8',
            dataType: 'json',
            success: function (data) {
                d1.resolve(data, { totalCount: data.length });
            },
            beforeSend: function(xhr, settings) { xhr.setRequestHeader('Authorization','Bearer ' + access_token); } 
        });
    }
        //,

    ///(3)
    //dataSource: new DevExpress.data.DataSource({
    //    load: function (loadOptions) {
    //        var d = $.Deferred();
    //        console.log('url:' + url);
            
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