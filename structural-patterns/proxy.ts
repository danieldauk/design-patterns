interface VideoDownloaderInterface {
  download(id: string): boolean;
}

class VideoDownloader implements VideoDownloaderInterface {
  download(id: string) {
    console.log(`Downloading video with the following id: ${id}`);
    return true;
  }
}

class VideoDownloaderProxy implements VideoDownloaderInterface {
  private videoDownloader: VideoDownloaderInterface;
  private videoCache: {[key: string]: boolean} = {};

  constructor(videoDownloader: VideoDownloaderInterface) {
    this.videoDownloader = videoDownloader;
  }

  download(id: string) {
    const cachedVideo = this.videoCache[id];
    
    if (cachedVideo) {
      console.log(`Returning cached video with the following id: ${id}`);
      return;
    }

    const video = this.videoDownloader.download(id);
    this.videoCache[id] = video;
    return video;
  }
}

const clientCode = () => {
  const videoDownloader = new VideoDownloader();
  const videoDownloaderProxy = new VideoDownloaderProxy(videoDownloader);

  videoDownloaderProxy.download('1'); // Downloading video with the following id: 1
  videoDownloaderProxy.download('2'); // Downloading video with the following id: 2
  videoDownloaderProxy.download('1'); // Returning cached video with the following id: 1
}

clientCode();

export {}
