class Fighter {
    constructor(name, damage, hp, strength, agility) {
        this.$name = name;
        this.$damage = damage;
        this.$hp = hp;
        this.$strength = strength;
        this.$agility = agility;
        this.win = 0;
        this.loss = 0;
    }
    getName() {
        return this.$name;
    }
    getDamage() {
        return this.$damage;
    }
    getAgility() {
        return this.$agility;
    }
    getStrength() {
        return this.$strength;
    }
    getHealth() {
        return this.$hp;
    }
    dealDamage() {
        this.$hp -= this.$damage;
        return this.$hp;
    }
    logCombatHistory(){
        return `Name ${this.$name}, Wins: ${this.win}, Losses: ${this.loss}`;
    }
    heal(){
        return this.$hp;
    }
    addWin() {
        this.win++;
    }
    addLoss() {
        this.loss++;
    }

    attack(defender) {
        const maxValue = 100;
        let defenderName = defender.getName();
        let defenderAgility = defender.getAgility();
        let defenderStrength = defender.getStrength();
        let defenderHp = defender.getHealth();
        let defenderDamage = defender.getDamage();

        const attackProbability = maxValue-(defenderAgility+defenderStrength);
        const randomNumber = Math.floor(Math.random() * maxValue);

        if (attackProbability<randomNumber){
            console.log(`${this.$name} make ${defenderDamage} to ${defenderName}`);
            return defenderHp;
        }else {
            console.log(`${defenderName} attack missed!`);
        }
    }
}
const battle = function (fighter1, fighter2) {
    let nameFighter1 = fighter1.getName();
    let nameFighter2 = fighter2.getName();


    while(fighter1.getHealth()>0 || fighter2.getHealth()>0){
        fighter2.attack(fighter1);
        fighter1.attack(fighter2);
    }

    if (fighter1.getHealth()===0&&fighter2.getHealth()!==0) {
        console.log(`${nameFighter2} has won!`);
        console.log(`${nameFighter1} is dead and can't fight!`);
    }else if(fighter2.getHealth()===0&&fighter1.getHealth()!==0){
        console.log(`${nameFighter1} has won!`);
        console.log(`${nameFighter2} is dead and can't fight!`);
    }

    console.log(`${nameFighter2} has won!`);

    if(fighter1.getHealth()<=0){
        fighter1.addLoss();
        fighter2.addWin();
    } else if (fighter2.getHealth()<=0) {
        fighter2.addLoss();
        fighter1.addWin();
    }
};

