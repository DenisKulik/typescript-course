function generateError(message: string): never {  // this function never will be returned
   throw new Error(message);
}

function dumpError(): never {
    while (true) {}
}

function rec(): never {
  return rec()
}

type paymentAction = 'refund' | 'checkout'

function processAction(action: paymentAction) {
    switch (action) {
        case 'refund':
            console.log('refunding');
            break;
        case 'checkout':
            console.log('checking out');
            break;
        default:
            // check error on compile time
            const _: never = action;
            throw new Error('Invalid action');
    }
}

function isStrong(x: string | number): boolean {
    if (typeof x === 'string') {
        return true;
    } else if (typeof x === 'number') {
        return false;
    }

    generateError('Invalid type');
}