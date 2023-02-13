interface Observer {
  next: (data: any) => void;
  error: (err: any) => void;
  complete: () => void;
}

const myObservable = {
  observer: null,
  subscribe: function (o) {
    this.observer = o;
    //##########
    //setTimeout(()=>this.observer.next('Hallo'),1500) // Producer
    //##########
    return function () {
      this.observer = null;
    };
  },
  next: function (wert) {
    this.observer.next(wert);
  },
};

myObservable.subscribe({ next: (data) => console.log('====>', data) });

myObservable.next('Moin');
