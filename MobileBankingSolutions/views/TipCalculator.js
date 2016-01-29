"use strict";

MobileBankingSolutions.TipCalculator= function (params) {
    var DEFAULT_TIP_PERCENT = 15;

    var billTotal = ko.observable(),
        tipPercent = ko.observable(DEFAULT_TIP_PERCENT),
        termOfLoan = ko.observable(5);
     
    var ROUND_UP = 1,
        ROUND_DOWN = -1,
        ROUND_NONE = 0,
        roundMode = ko.observable(ROUND_NONE);

    function billTotalAsNumber() {
        return billTotal() || 0;
    }
    
    function pmt(rate_per_period, number_of_payments, present_value, future_value, type) {
        if (rate_per_period != 0.0) {
            // Interest rate exists
            var q = Math.pow(1 + rate_per_period, number_of_payments);
            return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

        } else if (number_of_payments != 0.0) {
            // No interest rate, but number of payments exists
            return -(future_value + present_value) / number_of_payments;
        }

        return 0;
    }
   
    var Payment = ko.computed(function () {

        var interest = 0.01 * tipPercent(),     // Annual interest
        years = 12 * termOfLoan(),        // Lifetime of loan (in years)
        present = billTotalAsNumber(),    // Present value of loan
        future = 0,    // Future value of loan
        beginning = 0;        // Calculated at start of each period

        return -pmt(interest / 12,   // Annual interest into months
                           years,      // Total months for life of loan
                           present,
                           future,
                           beginning);

    });
  
    var totalToPay = ko.computed(function () {
        var value = Payment() * 12 * termOfLoan();
    
        switch (roundMode()) {
            case ROUND_DOWN:
                if (Math.floor(value) >= billTotalAsNumber())
                    return Math.floor(value);
                return value;

            case ROUND_UP:
                return Math.ceil(value);

            default:
                return value;
         }
    });

    var totalTip = ko.computed(function () {
        return totalToPay() -billTotalAsNumber();
    });
  
    function roundUp() {
        roundMode(ROUND_UP);
    }

    function roundDown() {
        roundMode(ROUND_DOWN);
    }


    billTotal.subscribe(function () {
        roundMode(ROUND_NONE);
    });

    tipPercent.subscribe(function () {
        roundMode(ROUND_NONE);
    });

    return {
        billTotal: billTotal,
        tipPercent: tipPercent,
        termOfLoan: termOfLoan,

        totalTip: totalTip,
        totalToPay: totalToPay,
        Payment: Payment,

        roundUp: roundUp,
        roundDown: roundDown
    };
};