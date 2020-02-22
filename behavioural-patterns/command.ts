abstract class Command {
  protected gameCharacter: GameCharacter;
  protected backup: {
    x: number;
    y: number;
  }

  constructor(gameCharacter: GameCharacter) {
    this.gameCharacter = gameCharacter;
  }

  saveBackup() {
    this.backup = {
      x: this.gameCharacter.getX(),
      y: this.gameCharacter.getY(),
    }
    this.gameCharacter.history.push(this)
  }

  undo() {
    this.gameCharacter.setX(this.backup.x);
    this.gameCharacter.setY(this.backup.y);
  }

  abstract execute(): void;
}

class MoveUpCommand extends Command {
  execute() {
    this.saveBackup();
    this.gameCharacter.setY(this.gameCharacter.getY() + 1);
  }
}


class MoveRightCommand extends Command {
  execute() {
    this.saveBackup();
    this.gameCharacter.setX(this.gameCharacter.getX() + 1);
  }
}

class UndoCommand extends Command {
  execute() {
    const lastCommand = this.gameCharacter.history.pop();
    if (lastCommand) {
      lastCommand.undo();
    }
  }
}

class CommandHistory {
  private history: Command[] = [];

  push(command: Command) {
    this.history.push(command);
  }

  pop(): Command {
    return this.history.pop();
  }
}

class Button {
  private command: Command;

  constructor(command: Command) {
    this.command = command;
  }

  onClick() {
    this.command.execute();
  }
}

class GameCharacter {
  private x = 0;
  private y = 0;
  history: CommandHistory

  constructor(history: CommandHistory) {
    this.history = history;
  }

  getX() {
    return this.x;
  }
  
  setX(value: number) {
    this.x = value;
  }

  getY() {
    return this.y;
  }

  setY(value: number) {
    this.y = value;
  }

  getCoordinates() {
    console.log(`x = ${this.x}; y = ${this.y}`);
  }
}

const clientCode = () => {
  const commandHistory = new CommandHistory();
  const gameCharacter = new GameCharacter(commandHistory);

  const moveUpCommand = new MoveUpCommand(gameCharacter);
  const moveRightCommand = new MoveRightCommand(gameCharacter);
  const undoCommand = new UndoCommand(gameCharacter);

  const upButton = new Button(moveUpCommand);
  const rightButton = new Button(moveRightCommand);
  const undoButton = new Button(undoCommand);

  upButton.onClick();
  gameCharacter.getCoordinates(); // x = 0; y = 1

  rightButton.onClick();
  gameCharacter.getCoordinates(); // x = 1; y = 1

  undoButton.onClick();
  gameCharacter.getCoordinates(); // x = 0; y = 1
  
  undoButton.onClick();
  gameCharacter.getCoordinates(); // x = 0; y = 0
}

clientCode();

export {}
