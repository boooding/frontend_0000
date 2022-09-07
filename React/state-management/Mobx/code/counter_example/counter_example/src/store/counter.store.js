import {action, makeObservable, observable} from "mobx";

export default class counterStore {
    constructor() {
        this.count = 0
        makeObservable(this, {
            count: observable,
            increment: action,
            decrement: action,
        })
    }
    increment() {
        this.count += 1
    }
    decrement() {
        this.count -= 1
    }
}