"use strict";
var PaymentResponseStatusTest;
(function (PaymentResponseStatusTest) {
    PaymentResponseStatusTest["Success"] = "success";
    PaymentResponseStatusTest["Failed"] = "failed";
})(PaymentResponseStatusTest || (PaymentResponseStatusTest = {}));
function getDataTest(data) {
    if (isSuccessResponse(data)) {
        return data.data.databaseId;
    }
    else {
        throw new Error(data.data.errorMessage);
    }
}
function isSuccessResponse(data) {
    return data.status === PaymentResponseStatusTest.Success;
}
