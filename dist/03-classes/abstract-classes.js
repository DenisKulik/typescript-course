"use strict";
class Controller {
    handleWithLogs(request) {
        console.log(request);
        this.handle(request);
    }
}
class LoginController extends Controller {
    handle(request) {
        console.log(request);
    }
}
const cont = new LoginController();
cont.handleWithLogs('request');
