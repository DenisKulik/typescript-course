// 1 - success
// 2 - processing
// 3 - failed

enum StatusCode {
    SUCCESS = 1,
    PROCESSING = 2,
    FAILED = 3,
}

const response = {
    message: 'success',
    statusCode: StatusCode.SUCCESS,
}

if (response.statusCode === StatusCode.SUCCESS) {
    console.log('success')
}

function action(status: StatusCode) {
    console.log(status)
}

action(StatusCode.SUCCESS)

const enum Roles {
    ADMIN = 1,
    USER = 2,
}

const admin = Roles.ADMIN
