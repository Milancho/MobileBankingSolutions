MobileBankingSolutions.Register = function (params) {

    var viewModel = {
        //  Put the binding properties here
        email: ko.observable("email"),
        password: ko.observable(""),
        confirmPassword: ko.observable(""),
        result: ko.observable(""),
        Register_Click: function (params) {
           
            viewModel.result("");
            var data = {
                Email: this.email(),
                Password: this.password(),
                ConfirmPassword: this.confirmPassword()
            };

            $.ajax({
                type: 'POST',
                url: 'https://localhost:44305/api/Account/Register',
                contentType: 'application/json; charset=utf-8',
                data: JSON.stringify(data)
            }).done(function (data) {
                viewModel.result("Done!");
            }).fail(showError);


          
        }
    };

    return viewModel;
};