MobileBankingSolutions.home = function (params) {

    var url = "http://localhost:8080/token";
    var viewModel = {
        login: ko.observable("aspekt"),
        password: ko.observable("aspekt"),
        validateAndSubmit: function (params) {
            access_token = "";
            $.post(url, { grant_type: "password", username: this.login(), password: this.password() }).done(function (data, status) {
                access_token = data.access_token;  //alert("Data: " +  + "\nStatus: " + status);
                DevExpress.ui.notify({
                    message: "Successful Login - '" + viewModel.login() + "'",
                    position: {
                        my: "left top",
                        at: "left top",
                        offset: 15
                    }
                }, "success", 300);
                MobileBankingSolutions.app.navigate("MenuEagerView");
                }).fail(function () {
                    DevExpress.ui.notify({
                        message: "Invalid Username and/or Password",
                        position: {
                            my: "left top",
                            at: "left top",
                            offset: 15
                        }
                    }, "warning", 1000);
                });
            
            //, function (data, status) {alert("Data: " + data.access_token + "\nStatus: " + status);
            //$.post(url, { grant_type: "password", username: "aspekt1", password: "aspekt" }).done(function () {
            //    alert("Thank you for registering!");
            //}).fail(function () {
            //    alert("Email already exists");
            //});
            
            //if (this.login() == item) {
            //    var result = params.validationGroup.validate();
            //    if (result.isValid) {
            //        DevExpress.ui.notify({
            //            message: "Successful Login - '" + this.login() + "'",
            //            position: {
            //                my: "left top",
            //                at: "left top",
            //                offset: 15
            //            }
            //        }, "success", 150);
            //        MobileBankingSolutions.app.navigate("MenuView");
            //    }
            //} else {
            //    DevExpress.ui.notify({
            //        message: "Invalid Username and/or Password",
            //        position: {
            //            my: "left top",
            //            at: "left top",
            //            offset: 15
            //        }
            //    }, "warning", 1000);
            //}
            //});
            
            //var jqxhr = $.post("example.php", function () {
            //    alert("success");
            //})

            //$.ajax({
            //    type: 'POST',
            //    url: url,
            //    data: {
            //        'grant_type': 'password',
            //        'username': 'aspekt',
            //        'password': 'aspekt'
            //    },
            //    contentType: 'application/json; charset = utf - 8',
            //    success: function (data) {
            //        console.log(data);
            //    }
            //});
            
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