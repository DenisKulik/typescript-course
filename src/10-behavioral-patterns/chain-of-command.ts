interface IMiddleWare {
    next(mid: IMiddleWare): IMiddleWare
    handle(request: any): any
}

abstract class AbstractMiddleware implements IMiddleWare {
    private nextMiddleWare: IMiddleWare

    next(mid: IMiddleWare): IMiddleWare {
        this.nextMiddleWare = mid
        return mid
    }

    handle(request: any): any {
        if (this.nextMiddleWare) {
            return this.nextMiddleWare.handle(request)
        } else {
            return null
        }
    }
}

class AuthMiddleware extends AbstractMiddleware {
    handle(request: any): any {
        if (request.auth) {
            return super.handle(request)
        } else {
            return null
        }
    }
}

class ControllerMiddleware extends AbstractMiddleware {
    handle(request: any): any {
        if (request.controller) {
            return super.handle(request)
        } else {
            return null
        }
    }
}

const auth = new AuthMiddleware()
const controller = new ControllerMiddleware()

auth.next(controller)