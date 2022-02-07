Observer = {
    ubdate: (data) => {

    }
}

Subject = {
    subscribe: function(Obsever) {
    },
    unsubscribe: (Observer) => {
    }
}

class BitcoinPrice {
    observers = [];
    constructor() {
    // observers = [];
    const el = document.querySelector('#value');
    el.addEventListener('input', () => {
        this.notify(el.value);
    })
    }

    
    subscribe(observer) {
         this.observers.push(observer)
    }
    
    unsubscribe(observer) {
        const index = this.observers.findIndex(obs => {
            return obs === observer;
        })
        this.observers.splice(index,1);
    }

    notify(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class PriceDisplay {
    el;
    constructor() {
        this.el = document.querySelector('#price')
    }

    update(data) {
        this.el.innerText = data;
    }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);
setTimeout(() => value.unsubscribe(display), 5000);
