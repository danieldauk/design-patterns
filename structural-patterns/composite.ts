interface FileSystemNode {
  getFileCount(): number;
}

class File implements FileSystemNode {
  getFileCount() {
    return 1;
  }
}

class Directory implements FileSystemNode {
  private nodes: FileSystemNode[] = [];

  addNode(node: FileSystemNode) {
    this.nodes.push(node)
  }

  getFileCount() {
    const count = this.nodes.reduce((result, node) => {
      return result + node.getFileCount();
    }, 0);

    return count;
  }
}

const clientCode = () => {
  const file1 = new File();
  const file2 = new File();
  const file3 = new File();
  const file4 = new File();
  const file5 = new File();

  const subDirectory1 = new Directory();
  const subDirectory2 = new Directory();
  const rootDirectory = new Directory();

  subDirectory1.addNode(file1);
  subDirectory1.addNode(file2);
  subDirectory2.addNode(file3);
  subDirectory2.addNode(file4);
  subDirectory1.addNode(subDirectory2);
  rootDirectory.addNode(subDirectory1);
  rootDirectory.addNode(file5);

  console.log(rootDirectory.getFileCount()); // 5
}

clientCode();

export {}