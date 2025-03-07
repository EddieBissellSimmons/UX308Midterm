import { calculateDollars, convertTemp, cubeVolume, gymMembership, earthquakeCategory } from '../functions.js'

//question 1
describe("Calculating dollars from amount of coins: ", function() {
  it("testing 1 of every coin.", function() {
    let nickel = 1; let dime = 1; let quarter = 1; let loonie = 1; let toonie = 1;
    let total = calculateDollars(nickel,dime,quarter,loonie,toonie);
    expect(total).toBe(3.40);
  });
  it("testing 3 of every coin.", function() {
    let nickel = 3; let dime = 3; let quarter = 3; let loonie = 3; let toonie = 3;
    let total = calculateDollars(nickel,dime,quarter,loonie,toonie);
    expect(total).toBe(10.20);
  });
  it("testing none of every coin.", function() {
    let nickel = 0; let dime = 0; let quarter = 0; let loonie = 0; let toonie = 0;
    let total = calculateDollars(nickel,dime,quarter,loonie,toonie);
    expect(total).toBe(0);
  });
});

//question 2
describe("Converting celsius to fahrenheit: ", function() {
  it("testing boiling water (100 C).", function() {
    let celsius = 100;
    let fahrenheit = convertTemp(celsius);
    expect(fahrenheit).toBe(212);
  });
  it("testing freezing water (0 C).", function() {
    let celsius = 0;
    let fahrenheit = convertTemp(celsius);
    expect(fahrenheit).toBe(32);
  });
  it("testing room temp (70 F).", function() {
    let celsius = 21.11;
    let fahrenheit = convertTemp(celsius);
    expect(fahrenheit.toFixed(0)).toBe('70');
  });
});

//question 3
describe("Calculate volume of a cube: ", function() {
  it("tests a 1m cube.", function() {
    let height = 1;
    let volume = cubeVolume(height);
    expect(volume).toBe(1);
  });
  it("tests a 5m cube.", function() {
    let height = 5;
    let volume = cubeVolume(height);
    expect(volume).toBe(125);
  });
  it("tests a 86m cube.", function() {
    let height = 86;
    let volume = cubeVolume(height);
    expect(volume).toBe(636056);
  });
});

//question 4
describe("Calculate the cost of a gym membership: ", function (){
  it("tests 0 friends :( at $100 cost.", function() {
    let cost = 100;
    let friends = 0;
    let finalCost = gymMembership(cost,friends);
    expect(finalCost).toBe(100);
  });
  it("tests 1 friends, at $200 cost.", function() {
    let cost = 200;
    let friends = 1;
    let finalCost = gymMembership(cost,friends);
    expect(finalCost).toBe(190);
  });
  it("tests 2 friends, at $350 cost.", function() {
    let cost = 350;
    let friends = 2;
    let finalCost = gymMembership(cost,friends);
    expect(finalCost).toBe(315);
  });
  it("tests 3 friends, at $420 cost.", function() {
    let cost = 420;
    let friends = 3;
    let finalCost = gymMembership(cost,friends);
    expect(finalCost).toBe(357);
  });
  it("tests 4 friends, at $500 cost.", function() {
    let cost = 500;
    let friends = 4;
    let finalCost = gymMembership(cost,friends);
    expect(finalCost).toBe(425);
  });
});

//question 5
describe("Categorize an earthquake on Richter scale: ", function() {
  it("test intensity of 1.", function() {
    let intensity = 1;
    let result = earthquakeCategory(intensity);
    expect(result).toBe("Little or no damage!");
  });
  it("test intensity of 5.3 .", function() {
    let intensity = 5.3;
    let result = earthquakeCategory(intensity);
    expect(result).toBe("Some damage.");
  });
  it("test intensity of 5.7 .", function() {
    let intensity = 5.7;
    let result = earthquakeCategory(intensity);
    expect(result).toBe("Serious damage: walls may crack or fall.");
  });
  it("test intensity of 7.1 .", function() {
    let intensity = 7.1;
    let result = earthquakeCategory(intensity);
    expect(result).toBe("Disaster: buildings may collapse.");
  });
  it("test intensity of 7.8 .", function() {
    let intensity = 7.8;
    let result = earthquakeCategory(intensity);
    expect(result).toBe("Catastrophe: most buildings destroyed!");
  });
});