MobileBankingSolutions.home = function (params) {

    var viewModel = {
        login: ko.observable(""),
        password: ko.observable(""),
        validateAndSubmit: function (params) {
            var item = 'a';
            if (this.login() == item) {
                var result = params.validationGroup.validate();
                if (result.isValid) {
                    DevExpress.ui.notify({
                        message: "Successful Login - '" + this.login() + "'",
                        position: {
                            my: "left top",
                            at: "left top",
                            offset: 15
                        }
                    }, "success", 150);
                    MobileBankingSolutions.app.navigate("MenuView");
                }
            } else {
                DevExpress.ui.notify({
                    message: "Invalid Username and/or Password",
                    position: {
                        my: "left top",
                        at: "left top",
                        offset: 15
                    }
                }, "warning", 1000);
            }
        },
        message: ko.observable('Welcome !'),
        name: ko.observable(''),
        sayHello: function () {
            this.message("Hello " + this.name() + '!');
        },
        greet: function () {
            MobileBankingSolutions.app.navigate('greeting/' + this.name());
        },
        gotoAmortizationSchedule: function () {
            MobileBankingSolutions.app.navigate('View1/' + this.name());
        }

    };

    return viewModel;
};