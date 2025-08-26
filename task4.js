export class Player {
  constructor(name, Level) {
    this.name = name;
    this.level = Level;
  }
  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
  levelUp() {
    this.level += 1;
  }
}
