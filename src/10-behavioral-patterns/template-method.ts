class Form {
    constructor(public name: string) {}
}

abstract class SaveForm<T> {
  public save(form: Form) {
     const res = this.fill(form);
     this.log(res);
     this.send(res)
  }

  protected abstract fill(form: Form): T;
  protected log(data: T): void {
    console.log(data);
  }
  protected abstract send(data: T): void;
}

class FirstAPI extends SaveForm<string> {
  protected fill(form: Form) {
    return form.name;
  }
  protected send(data: string) {
    console.log(`Sending data: ${data}`);
  }
}

const someForm = new Form('name');
const firstApi = new FirstAPI();
firstApi.save(someForm)