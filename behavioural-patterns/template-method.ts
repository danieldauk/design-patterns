abstract class Component {
  componentDidUpdate() {
    console.log('Component did update (default implementation)');
  }

  componentDidMount() {
    console.log('Component did mount (default implementation)');
  }

  shouldComponentUpdate() {
    return true;
  }

  abstract render(): void;

  update() {
    if (this.shouldComponentUpdate()) {
      this.render();
      this.componentDidUpdate();
    }
  }

  mount() {
    this.render();
    this.componentDidMount();
  }
}

class Button extends Component {
  render() {
    console.log('Rendering button');
  }
}

class Input extends Component {
  shouldComponentUpdate() {
    console.log('Component should not update');
    return false;
  }
  componentDidMount() {
    console.log('Component did mount (input implementation)');
  }

  render() {
    console.log('Rendering input');
  }
}

const clientCode = () => {
  const button = new Button();
  button.mount();
  // Rendering button
  // Component did mount (default implementation)
  button.update();
  // Rendering button
  // Component did update (default implementation)

  const input = new Input();
  input.mount();
  // Rendering input
  // Component did mount (input implementation)
  input.update();
  // Component should not update
};

clientCode();

export {};
