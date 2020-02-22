interface Iterator {
  getNext(): any;
  hasNext(): boolean;
}

class WordsIterator implements Iterator {
  private collection: WordsCollection;
  private currentPosition: number = 0;

  constructor(collection: WordsCollection) {
    this.collection = collection;
  }

  getNext() {
    if (this.hasNext()) {
      const currentPosition = this.currentPosition;
      this.currentPosition = currentPosition + 1;
      return this.collection.getWords()[currentPosition];
    }
  }

  hasNext() {
    return this.currentPosition < this.collection.getCount();
  }
}

class ReverseWordsIterator implements Iterator {
  private collection: WordsCollection;
  private currentPosition: number;

  constructor(collection: WordsCollection) {
    this.collection = collection;
    this.currentPosition = collection.getCount() - 1;
  }

  getNext() {
    if (this.hasNext()) {
      const currentPosition = this.currentPosition;
      this.currentPosition = currentPosition - 1;
      return this.collection.getWords()[currentPosition];
    }
  }

  hasNext() {
    return this.currentPosition >= 0;
  }
}

interface Collection {
  createIterator(): Iterator;
  createReverseIterator(): Iterator;
}

class WordsCollection implements Collection {
  private words = [];

  addWord(word: string) {
    this.words.push(word);
  }

  getCount() {
    return this.words.length;
  }

  getWords() {
    return this.words;
  }

  createIterator() {
    return new WordsIterator(this);
  }

  createReverseIterator() {
    return new ReverseWordsIterator(this);
  }
}

const clientCode = () => {
  const wordsCollection = new WordsCollection();
  wordsCollection.addWord('one');
  wordsCollection.addWord('two');
  wordsCollection.addWord('three');

  const iterator = wordsCollection.createIterator();
  while(iterator.hasNext()) {
    console.log(iterator.getNext());
  }
  // one
  // two
  // three

  const reverseIterator = wordsCollection.createReverseIterator();
  while(reverseIterator.hasNext()) {
    console.log(reverseIterator.getNext());
  }
  // three
  // two
  // one
}

clientCode();

export {};
