interface SubscriberInterface {
  update(issue: string): void;
}

class Magazine {
  private subscribers: SubscriberInterface[] = [];
  private currentIssue: string;

  subscribe(subscriber: SubscriberInterface) {
    this.subscribers.push(subscriber);
  }
  unsubscribe(subscriberToRemove: SubscriberInterface) {
    this.subscribers = this.subscribers.filter(
      subscriber => subscriber !== subscriberToRemove,
    );
  }

  notifySubscribers() {
    this.subscribers.forEach(subscriber => {
      subscriber.update(this.currentIssue);
    });
  }

  setCurrentIssue(issue: string) {
    this.currentIssue = issue;
    this.notifySubscribers();
  }
}

class Subscriber implements SubscriberInterface {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(issue: string) {
    console.log(`${this.name} received latest magazine issue: ${issue}`);
  }
}

const clientCode = () => {
  const magazine = new Magazine();
  const alan = new Subscriber('Alan');
  const joseph = new Subscriber('Joseph');

  magazine.subscribe(alan);
  magazine.subscribe(joseph);

  magazine.setCurrentIssue('Issue 1'); 
  // Alan received latest magazine issue: Issue 1
  // Joseph received latest magazine issue: Issue 1
  magazine.unsubscribe(alan);

  magazine.setCurrentIssue('Issue 2');
  // Joseph received latest magazine issue: Issue 2
};

clientCode();

export {};
