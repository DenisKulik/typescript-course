abstract class Controller {
    abstract handle(request: any): void

    handleWithLogs(request: any) {
        console.log(request)
        this.handle(request)
    }
}

// new Controller() // error

class LoginController extends Controller {
    handle(request: any) {
        console.log(request)
    }
}

const cont = new LoginController()
cont.handleWithLogs('request')