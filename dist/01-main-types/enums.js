"use strict";
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode[StatusCode["PROCESSING"] = 2] = "PROCESSING";
    StatusCode[StatusCode["FAILED"] = 3] = "FAILED";
})(StatusCode || (StatusCode = {}));
const response = {
    message: 'success',
    statusCode: StatusCode.SUCCESS,
};
if (response.statusCode === StatusCode.SUCCESS) {
    console.log('success');
}
function action(status) {
    console.log(status);
}
action(StatusCode.SUCCESS);
const admin = 1;
