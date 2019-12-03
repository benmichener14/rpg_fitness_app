import { Component, OnInit } from '@angular/core';
import { formatDate, DatePipe } from '@angular/common';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {

  constructor() { }

  storage = window.localStorage;

  fighting: boolean = false;
  collapsed: boolean;
  today = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  dailyAdventure: boolean;
  combatEncounters: number;

  yourHealth: number;
  yourEnergy: number;
  attackPower: number;

  enemyName;
  enemyHealth: number;
  enemyEnergy: number;
  enemyAttack: number;

  battleMessage;
  earnedGold: number;
  reward: number;

  enemies = {
    'enemy': [
      { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
      { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
      { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
      { 'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2 },
      { 'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4 },
      { 'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4 },
      { 'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4 },
      { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
      { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
      { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
      { 'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3 },
      { 'name': 'Dire Wolf', 'health': 20, 'energy': 20, 'reward': 8 },
      { 'name': 'Necromancer', 'health': 15, 'energy': 50, 'reward': 15 },
      { 'name': 'Troll', 'health': 30, 'energy': 12, 'reward': 5 },
      { 'name': 'Troll', 'health': 30, 'energy': 12, 'reward': 5 },
      { 'name': 'Ogre', 'health': 45, 'energy': 15, 'reward': 8 },
      { 'name': 'Skeleton', 'health': 10, 'energy': 5, 'reward': 2 },
      { 'name': 'Assassin', 'health': 15, 'energy': 25, 'reward': 10 },
      { 'name': 'Israphel', 'health': 50, 'energy': 25, 'reward': 15 },
      { 'name': 'Dragon', 'health': 100, 'energy': 50, 'reward': 20 }
    ]
  };

  ngOnInit() {
    this.collapsed = true;
    this.yourHealth = Number(this.storage.getItem("endurance"));
    this.yourEnergy = Number(this.storage.getItem("strength"));
    this.attackPower = 0;
    this.earnedGold = 0;
    this.combatEncounters = 0;

    let diff = Math.abs(new Date(this.storage.getItem("lastCombatDate")).getTime() - new Date(this.today).getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    if (diffDays < 1) {
      this.dailyAdventure = false;
    }
    else {
      this.dailyAdventure = true;
    }
  }

  getEnemy() {
    this.combatEncounters++;
    this.fighting = !this.fighting;
    let enemy = this.enemies.enemy[Math.floor(Math.random() * this.enemies.enemy.length)];
    this.enemyName = enemy.name;
    this.enemyHealth = enemy.health;
    this.enemyEnergy = enemy.energy;
    this.reward = enemy.reward;

    this.battleMessage = "You encounter a " + this.enemyName.toLowerCase();

    this.checkStatus();
  }

  action() {
    
    if (this.attackPower == 0 && this.enemyAttack > 0) {
      this.yourHealth -= 1;
      this.yourEnergy += 3;

      this.enemyEnergy -= this.enemyAttack;
      this.battleMessage = "You block an enemy attack";
    }
    else if (this.attackPower > 0 && this.enemyAttack == 0) {
      this.yourEnergy -= this.attackPower;

      this.enemyHealth -= 1;
      this.enemyEnergy += 3;
      this.battleMessage = "The enemy blocks one of your attacks";
    }
    else if (this.attackPower == 0 && this.enemyAttack == 0) {
      this.yourEnergy += 3;
      this.enemyEnergy += 3;
      this.battleMessage = "Both of you ready yourselves for an attack that doesn't come";
    }
    else if (this.attackPower > this.enemyAttack) {
      this.yourEnergy -= this.attackPower;

      this.enemyHealth -= this.attackPower - this.enemyAttack;
      this.enemyEnergy -= this.enemyAttack;
      this.battleMessage = "Your attack overcomes the enemy's, dealing " + (this.attackPower - this.enemyAttack) + " damage";
    }
    else if (this.attackPower < this.enemyAttack) {
      this.yourHealth -= this.enemyAttack - this.attackPower;
      this.yourEnergy -= this.attackPower;

      this.enemyEnergy -= this.enemyAttack;
      this.battleMessage = "You are overwhelmed by the enemy's attack and take " + (this.enemyAttack - this.attackPower) + " damage";
    }

    else if (this.attackPower == this.enemyAttack) {
      this.yourEnergy -= this.attackPower;

      this.enemyEnergy -= this.enemyAttack;
      this.battleMessage = "Your attacks bounce off of each other, perfectly balanced in power. Neither of you take any damage";
    }

    this.checkStatus();
  }

  checkStatus() {
    if (this.yourHealth <= 0 || this.enemyHealth <= 0) {
      this.fighting = !this.fighting;
      this.yourEnergy = Number(this.storage.getItem("strength"));
      if (this.yourHealth > 0) {
        // console.log(this.earnedGold)
        this.earnedGold += this.reward;
        this.battleMessage = "";
        // console.log(this.earnedGold)
      }
      else {
        this.earnedGold = 0;
      }
    }
    
    this.attackPower = 0;
    this.enemyAttack = Math.floor(Math.random() * this.enemyEnergy);

    if(this.enemyAttack == 0)
    {
      this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing to block your attack."
    }
    else if(this.enemyAttack < 8)
    {
      this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing for a light attack."
    }
    else if(this.enemyAttack < 15)
    {
      this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing for a medium attack."
    }
    else
    {
      this.battleMessage = this.battleMessage + ". It looks like the enemy is preparing for a heavy attack."
    }
  }

  saveData() {
    this.storage.setItem("gold", String(Number(this.storage.getItem("gold")) + this.earnedGold));

    if (this.combatEncounters > 0) {
      this.storage.setItem("lastCombatDate", this.today);
    }
  }

  help(){
    if(confirm("This is the combat game, where the stats you work to level up come in to play. Here, you fight enemies one at a time to earn gold. After each fight, you have the option of leaving with what you have earned, or fighting a new monster for more gold. Choose wisely, because if you die in combat, you lose all of the gold you have earned this expedition!"))
    {
      if(confirm("Combat is simple. You and the enemy both have health and energy. Energy corresponds to how hard you can hit the enemy for, and health corresponds to how hard you can be hit before you die. The goal is to reduce the enemy's health to zero while taking as little damage as possible."))
      {
        if(confirm("You decide how hard you want to hit the enemy for by adjusting the slider. You can attack for damage up to your current energy. Once you have confirmed the amount you want to attack for, your wagered energy will be compared to the enemy's wagered energy. Whoever wagered more deals damage equal to the difference in energies to the opponent."))
        {
          if(confirm("You always have the option to defend by not spending any energy. This will reduce any damage you would have taken down to 1, and allows you to regain 3 energy. This can be extremely helpful for surviving possible killing blows. Be careful, though! The enemy can do it too!"))
          {
            if(confirm("Your health carries over between fights, but your energy resets each time. When you finally decide to leave, simply navigate away to another page. Your data will be saved."))
            {}
          }
        }
      }
    }
  }

}
