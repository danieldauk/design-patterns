interface RoundPegInterface {
  getRadius(): number;
}

class SquarePeg {
  private width: number;

  constructor(width: number) {
    this.width = width;
  }

  getWidth() {
    return this.width;
  }
}

class RoundHole {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  isFitting(peg: RoundPegInterface) {
    return this.radius >= peg.getRadius();
  }
}

class SquareToRoundPegAdapter implements RoundPegInterface {
  private peg: SquarePeg;

  constructor(peg: SquarePeg) {
    this.peg = peg;
  }

  getRadius() {
    const squaredWidth = this.peg.getWidth() * this.peg.getWidth();
    const diagonal = Math.sqrt(squaredWidth + squaredWidth);
    const radius = diagonal / 2;
    return radius;
  }
}

const clientCode = () => {
  const roundHole = new RoundHole(10);

  const squarePeg5 = new SquarePeg(5);
  const squarePeg15 = new SquarePeg(15);

  // console.log(roundHole.fits(squarePeg5)); // Error - peg.getRadius is not a function

  const squareToRoundPegAdapter5 = new SquareToRoundPegAdapter(squarePeg5);
  const squareToRoundPegAdapter15 = new SquareToRoundPegAdapter(squarePeg15);

  console.log(roundHole.isFitting(squareToRoundPegAdapter5)); // true
  console.log(roundHole.isFitting(squareToRoundPegAdapter15)); // false
}

clientCode();

export {};
