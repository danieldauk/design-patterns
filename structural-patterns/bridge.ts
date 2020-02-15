interface Device {
  isEnabled(): boolean;
  enable(): void;
  disable(): void;
  getVolume(): number;
  setVolume(percent: number): void;
}

class Radio implements Device {
  private isPowerOn = false;
  private volume = 50;
  
  isEnabled() {
    return this.isPowerOn;
  }
  enable() {
    this.isPowerOn = true;
  }
  disable() {
    this.isPowerOn = false;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(percent: number) {
    this.volume = percent;
  }
}

class TV implements Device {
  private isPowerOn = false;
  private volume = 50;

  isEnabled() {
    return this.isPowerOn;
  }
  enable() {
    this.isPowerOn = true;
  }
  disable() {
    this.isPowerOn = false;
  }
  getVolume() {
    return this.volume;
  }
  setVolume(percent: number) {
    this.volume = percent;
  }
}

class RemoteControl {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeUp() {
    const currentVolume = this.device.getVolume();
    if (currentVolume < 100) {
      this.device.setVolume(currentVolume + 1);
    }
  }

  volumeDown() {
    const currentVolume = this.device.getVolume();
    if (currentVolume > 0) {
      this.device.setVolume(currentVolume - 1);
    }
  }
}

class AdvancedRemoteControl extends RemoteControl {
  mute() {
    this.device.setVolume(0);
    
  }
}

const clientCode = () => {

  const tv = new TV();
  const radio = new Radio();

  const tvRemote = new RemoteControl(tv);
  const radioRemote = new RemoteControl(radio);

  tvRemote.togglePower(); // TV is turned on
  console.log(tv.isEnabled()); // true
  tvRemote.volumeUp();
  console.log(tv.getVolume()); // 51

  radioRemote.togglePower();
  console.log(radio.isEnabled()); // true
  radioRemote.volumeDown();
  console.log(radio.getVolume()); // 49

  const advancedRemoteControl = new AdvancedRemoteControl(radio);
  advancedRemoteControl.mute();
  console.log(radio.getVolume()); // 0
}

clientCode();

export {}
