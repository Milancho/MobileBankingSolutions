MobileBankingSolutions.View1 = function (params) {

    var viewModel = {
        message: ko.observable('Hello ' + params.id + '!-' + params.login)
    };

    return viewModel;
};