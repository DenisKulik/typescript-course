class DocumentItem {
    public text: string
    private state: DocumentItemState

    constructor() {
        this.state = new DraftDocumentItemState()
        this.state.setContext(this)
    }

    getState() {
        return this.state
    }

    setState(state: DocumentItemState) {
        this.state = state
        this.state.setContext(this)
    }

    publishDoc() {
        this.state.publish()
    }

    deleteDoc() {
        this.state.delete()
    }
}

abstract class DocumentItemState {
    public name: string
    public item: DocumentItem

    public setContext(item: DocumentItem) {
        this.item = item
    }

    public abstract publish(): void

    public abstract delete(): void
}

class DraftDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'DraftDocument'
    }

    public publish() {
        this.item.setState(new PublishDocumentItemState())
    }

    public delete() {
        console.log('Document was deleted')
    }
}

class PublishDocumentItemState extends DocumentItemState {
    constructor() {
        super();
        this.name = 'PublishDocumentItemState'
    }

    public publish() {
        console.log('Cannot publish document in publish state')
    }

    public delete() {
        this.item.setState(new DraftDocumentItemState())
    }
}

const docItem = new DocumentItem()
docItem.text = 'Hello'
docItem.publishDoc()
console.log(docItem.getState())
docItem.deleteDoc()
console.log(docItem.getState())