MobileBankingSolutions.LoanView = function (params) {
    
    var myArray = [
                { id: 1, Name: "Loan-1_1", application_id: 1 },
                { id: 2, Name: "Loan-2_1", application_id: 1 },
                { id: 3, Name: "Loan-3_2", application_id: 2 },
                { id: 4, Name: "Loan-4_2", application_id: 2 }
    ];
    
   var viewModel = {
        dataSource: new DevExpress.data.DataSource({
            store: myArray
        })
    };
    
    if (!isNaN(parseInt(params.id))) {
        viewModel.dataSource.filter("application_id", "=", parseInt(params.id));
    }
    
    return viewModel;
};

//filter: function() {
//    this.dataSource.filter(["application_id", "=", parseInt(params.id)]);
//}


//,
//filter: ['application_id', '=', parseInt(params.id)]