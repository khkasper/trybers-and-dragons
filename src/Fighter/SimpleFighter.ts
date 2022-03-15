export default interface SimpleFighter {
  lifepoint: number;
  strength: number;
  attack(enemy: SimpleFighter): void;
  receiveDamage(attackPoints: number): void;
}