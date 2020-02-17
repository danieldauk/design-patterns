class Encryptor {
  encrypt() {
    console.log('encrypting...');
  }
}

class Compressor {
  compress() {
    console.log('compressing...');
  }
}

class Uploader {
  upload() {
    console.log('uploading...');
  }
}

class FileSaver {
  private encryptor: Encryptor;
  private compressor: Compressor;
  private uploader: Uploader;

  constructor(
    encryptor?: Encryptor,
    compressor?: Compressor,
    uploader?: Uploader,
  ) {
    this.encryptor = encryptor || new Encryptor();
    this.compressor = compressor || new Compressor();
    this.uploader = uploader || new Uploader();
  }

  save() {
    this.compressor.compress();
    this.encryptor.encrypt();
    this.uploader.upload();
  }
}

const clientCode = () => {
  const fileSaver = new FileSaver();
  
  fileSaver.save(); // compressing...encrypting...uploading...
}

clientCode();

export {}