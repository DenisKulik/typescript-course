"use strict";
class DocumentItem {
    constructor() {
        this.state = new DraftDocumentItemState();
        this.state.setContext(this);
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
        this.state.setContext(this);
    }
    publishDoc() {
        this.state.publish();
    }
    deleteDoc() {
        this.state.delete();
    }
}
class DocumentItemState {
    setContext(item) {
        this.item = item;
    }
}
class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument';
    }
    publish() {
        this.item.setState(new PublishDocumentItemState());
    }
    delete() {
        console.log('Document was deleted');
    }
}
class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocumentItemState';
    }
    publish() {
        console.log('Cannot publish document in publish state');
    }
    delete() {
        this.item.setState(new DraftDocumentItemState());
    }
}
const docItem = new DocumentItem();
docItem.text = 'Hello';
docItem.publishDoc();
console.log(docItem.getState());
docItem.deleteDoc();
console.log(docItem.getState());
