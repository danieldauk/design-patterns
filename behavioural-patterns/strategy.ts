interface SignInStrategy {
  init(): void;
}

class GoogleSignInStrategy implements SignInStrategy {
  init() {
    console.log('Logging in with google');
  }
}

class FacebookSignInStrategy implements SignInStrategy {
  init() {
    console.log('Logging in with facebook');
  }
}

class SignIn {
  private strategy: SignInStrategy;

  constructor(strategy: SignInStrategy) {
    this.strategy = strategy;
  }

  init() {
    this.strategy.init();
  }

  setStrategy(strategy: SignInStrategy) {
    this.strategy = strategy;
  }
}

const clientCode = () => {
  const googleStrategy = new GoogleSignInStrategy();
  const signIn = new SignIn(googleStrategy);
  signIn.init(); // Logging in with google

  const facebookStrategy = new FacebookSignInStrategy();
  signIn.setStrategy(facebookStrategy);
  signIn.init(); // Logging in with facebook
}

clientCode();

export {}


