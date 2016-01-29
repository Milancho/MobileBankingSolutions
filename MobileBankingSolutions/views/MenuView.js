MobileBankingSolutions.MenuView = function (params) {

    var viewModel = {
        //  Put the binding properties here
        menuItems: [
       {
           text: "Loan",
           items: [
               { text: "Calculator",  key: "TipCalculator" },
               { text: "Application", key: "ApplicationView" },
               { text: "Loan",        key: "LoanView" }
           ]
       },
       {
           text: "My Profile",
           items: [
               { text: "Task",    key: "TaskView" },
               { text: "Message", key: "MessageView" }
           ]
       },
       {
           text: "Registers",
           items: [
               { text: 'Person',  key: "PersonView" },
               { text: 'Company', key: "CompanyView" }
           ]
       }
        ],
        itemClicked: function (data) {
            if (!(data.itemData.key === undefined)) {
                MobileBankingSolutions.app.navigate(data.itemData.key);
                //DevExpress.ui.notify("The \"" + data.itemData.key + "\" item is clicked", "success", 1000);
            };
        }
    };

    return viewModel;
};