"use strict";
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleWare = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleWare) {
            return this.nextMiddleWare.handle(request);
        }
        else {
            return null;
        }
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(request) {
        if (request.auth) {
            return super.handle(request);
        }
        else {
            return null;
        }
    }
}
class ControllerMiddleware extends AbstractMiddleware {
    handle(request) {
        if (request.controller) {
            return super.handle(request);
        }
        else {
            return null;
        }
    }
}
const auth = new AuthMiddleware();
const controller = new ControllerMiddleware();
auth.next(controller);
