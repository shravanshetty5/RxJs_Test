import { Observable, Observer } from 'rxjs';

let num = [1, 5, 10];
let source = Observable.create((observer) => {
    let index = 0;

    let produceValue = () => {
        observer.next(num[index++]);

        if(index < num.length) {
            setTimeout(produceValue, 2000);
        } else {
            observer.complete();
        }
    }

    produceValue();
})

class MyObserver implements Observer<number> {
    next(value) {
        console.log(`value: ${value}`);
    }

    complete() {
        console.log("complete");
    }

    error(e) {
        console.log(`error: ${e}`);
    }
}

source.subscribe(new MyObserver());