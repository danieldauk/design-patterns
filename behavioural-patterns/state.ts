abstract class State {
  protected player: AudioPlayer;

  setContext(player: AudioPlayer) {
    this.player = player;
  }

  abstract unlock(): void;
  abstract lock(): void;
  abstract play(): void;
}

class PausedState extends State {
  unlock() {
    console.log('Player is unlocked');
  }
  lock() {
    console.log('Locking');
    this.player.changeState(new LockedState());
  }
  play() {
    console.log('Playing song');
    this.player.changeState(new PlayingState());
  }
}

class LockedState extends State {
  unlock() {
    console.log('Unlocking');
    this.player.changeState(new PausedState());
  }
  lock() {
    console.log('Player is locked');
  }
  play() {
    console.log('Player is locked');
  }
}

class PlayingState extends State {
  unlock() {
    console.log('Player is unlocked');
  }
  lock() {
    console.log('Locking');
    this.player.changeState(new LockedState());
  }
  play() {
    console.log('Pausing song');
    this.player.changeState(new PausedState());
  }
}

class AudioPlayer {
  private state: State;

  constructor(initialState: State) {
    this.changeState(initialState);
  }

  play() {
    this.state.play();
  }

  lock() {
    this.state.lock();
  }

  unlock() {
    this.state.unlock();
  }

  changeState(state: State) {
    this.state = state;
    this.state.setContext(this);
  }
}

const clientCode = () => {
  const initialState = new PausedState();
  const audioPlayer = new AudioPlayer(initialState);

  audioPlayer.play(); // Playing song
  audioPlayer.play(); // Pausing song
  audioPlayer.lock(); // Locking
  audioPlayer.lock(); // Player is locked
  audioPlayer.play(); // Player is locked
  audioPlayer.unlock(); // Unlocking
  audioPlayer.play(); // Playing song
};

clientCode();

export {};
