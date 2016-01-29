MobileBankingSolutions.PersonView = function (params) {
    function friend(name) {
        return {
            name: ko.observable(name)
        };

    }

    var viewModel = {
        //  Put the binding properties here
        firstName: ko.observable("Milanco"),
        lastName: ko.observable("Arsovski"),
        people: ko.observableArray([
            { firstName: 'Milancho', lastName: 'Arsovski' },
            { firstName: 'Igor', lastName: 'Petkovski' },
            { firstName: 'Ivan', lastName: 'Velinov' }
        ]), 
        friends: ko.observableArray([
            new friend("Milancho"),
            new friend("Igor"),
            new friend("Ivan")
        ]),
        buttonClicked: function () {
            this.people.push({ firstName: 'Nikolina ', lastName: 'Todoroska' });
        }
      
    };
    

 
    viewModel.fullName = ko.computed(function () {
        return this.firstName() + " " + this.lastName();
    }, viewModel);
    

    return viewModel;
};


