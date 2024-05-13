#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter your name:",
    },
]);
let opponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Select Your Opponent",
        choices: ["Skeleton", "Assassin", "Zombie", "Exit"],
    },
]);
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
if (opponent.select === "Exit") {
    console.log(chalk.yellow.bold("Goodbye!"));
    process.exit();
}
do {
    if (opponent.select === "Skeleton") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Select your Opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion fuel is ${p1.fuel}`));
        }
        if (ask.option === "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next  Time"));
            process.exit();
        }
    }
    if (opponent.select === "Assassin") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Select your Opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion fuel is ${p1.fuel}`));
        }
        if (ask.option === "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next  Time"));
            process.exit();
        }
    }
    if (opponent.select === "Zombie") {
        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "Select your Opponent",
                choices: ["Attack", "Drink Portion", "Run For Your Life.."],
            },
        ]);
        if (ask.option === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num === 0) {
                p1.fuelDecrease();
                console.log(chalk.red.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.green.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic("You Loose Better Luck Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.green.bold(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.red.bold(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.green.bold.italic("You Win"));
                    process.exit();
                }
            }
        }
        if (ask.option === "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.green.bold.italic(`You Drink Health Portion fuel is ${p1.fuel}`));
        }
        if (ask.option === "Run For Your Life..") {
            console.log(chalk.red.bold.italic("You Loose, Better Luck Next  Time"));
            process.exit();
        }
    }
} while (true);
