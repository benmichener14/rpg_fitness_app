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

  battleMessage;
  earnedGold: number;
  reward: number;

  enemies = {'enemy': [
    {'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2},
    {'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2},
    {'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2},
    {'name': 'Bandit', 'health': 10, 'energy': 15, 'reward': 2},
    {'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4},
    {'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4},
    {'name': 'Marauder', 'health': 20, 'energy': 6, 'reward': 4},
    {'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3},
    {'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3},
    {'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3},
    {'name': 'Wolf', 'health': 8, 'energy': 20, 'reward': 3},
    {'name': 'Dire Wolf', 'health': 20, 'energy': 20, 'reward': 8},
    {'name': 'Necromancer', 'health': 15, 'energy': 50, 'reward': 15},
    {'name': 'Troll', 'health': 30, 'energy': 12, 'reward': 5},
    {'name': 'Troll', 'health': 30, 'energy': 12, 'reward': 5},
    {'name': 'Giant', 'health': 45, 'energy': 15, 'reward': 8},
    {'name': 'Skeleton', 'health': 10, 'energy': 5, 'reward': 2},
    {'name': 'Assassin', 'health': 15, 'energy': 25, 'reward': 10},
    {'name': 'Israphel', 'health': 50, 'energy': 25, 'reward': 15},
    {'name': 'Dragon', 'health': 100, 'energy': 50, 'reward': 20}
  ]};

  ngOnInit() {
    this.collapsed = true;
    this.yourHealth = Number(this.storage.getItem("endurance"));
    this.yourEnergy = Number(this.storage.getItem("strength"));
    this.attackPower = 0;
    this.earnedGold = 0;
    this.combatEncounters = 0;

    let diff = Math.abs(new Date(this.storage.getItem("lastCombatDate")).getTime() - new Date(this.today).getTime());
    let diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 
    if(diffDays < 1)
    {
      this.dailyAdventure = false;
    }
    else
    {
      this.dailyAdventure = true;
    }
  }

  getEnemy(){
    this.combatEncounters ++;
    this.fighting = !this.fighting;
    let enemy = this.enemies.enemy[Math.floor(Math.random() * this.enemies.enemy.length)];
    this.enemyName = enemy.name;
    this.enemyHealth = enemy.health;
    this.enemyEnergy = enemy.energy;
    this.reward = enemy.reward;

    this.attackPower = 0;
  }

  action(){
    let enemyAttack = Math.floor(Math.random() * this.enemyEnergy)
    console.log(enemyAttack);
    if(this.attackPower == 0 && enemyAttack > 0)
    {
      this.yourHealth -= 1;
      this.yourEnergy += 3;

      this.enemyEnergy -= enemyAttack;
      this.battleMessage = "You block an enemy attack";
    }
    else if(this.attackPower > 0 && enemyAttack == 0)
    {
      this.yourEnergy -= this.attackPower;

      this.enemyHealth -= 1;
      this.enemyEnergy += 3;
      this.battleMessage = "The enemy blocks one of your attacks";
    }
    else if(this.attackPower == 0 && enemyAttack == 0)
    {
      this.yourEnergy += 3;
      this.enemyEnergy += 3;
      this.battleMessage = "Both of you ready yourselves for an attack that doesn't come";
    }
    else if(this.attackPower > enemyAttack)
    {
      this.yourEnergy -= this.attackPower;

      this.enemyHealth -= this.attackPower - enemyAttack;
      this.enemyEnergy -= enemyAttack;
      this.battleMessage = "Your attack overcomes the enemy's, dealing " + (this.attackPower - enemyAttack) + " damage";
    }
    else if(this.attackPower < enemyAttack)
    {
      this.yourHealth -= enemyAttack - this.attackPower;
      this.yourEnergy -= this.attackPower;

      this.enemyEnergy -= enemyAttack;
      this.battleMessage = "You are overwhelmed by the enemy's attack and take " + (enemyAttack - this.attackPower) + " damage";
    }

    this.checkStatus();
  }

  checkStatus(){
    if(this.yourHealth <= 0 || this.enemyHealth <= 0)
    {
      this.fighting = !this.fighting;
    }
    if(this.yourHealth > 0 && !this.fighting)
    {
      this.earnedGold += this.reward;
    }
    else
    {
      this.earnedGold = 0;
    }
    this.attackPower = 0;
  }
  
  saveData(){
    this.storage.setItem("gold", String(Number(this.storage.getItem("gold")) + this.earnedGold));
    
    if(this.combatEncounters > 0)
    {
      this.storage.setItem("lastCombatDate", this.today);
    }
  }

}
