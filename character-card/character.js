class Character {
    constructor(name, className, level, health, image) {
        this.name = name;
        this.className = className;
        this.level = level;
        this.health = health;
        this.image = image;
    }

    attacked() {
        this.health = Math.max(0, this.health - 5);
    }

    levelUp() {
        this.level += 1;
        this.health += 5;
    }
}

const character = new Character(
    "Snortleblat",
    "Swamp Beast Diplomat",
    7,
    45,
    "images/snortleblat.webp"
);

const nameEl = document.querySelector("#character-name");
const classEl = document.querySelector("#character-class");
const levelEl = document.querySelector("#character-level");
const healthEl = document.querySelector("#character-health");
const imageEl = document.querySelector("#character-image");
const attackBtn = document.querySelector("#attack-btn");
const levelUpBtn = document.querySelector("#levelup-btn");

function renderCharacter() {
    nameEl.textContent = character.name;
    classEl.textContent = character.className;
    levelEl.textContent = character.level;
    healthEl.textContent = character.health;
    imageEl.src = character.image;
    imageEl.alt = character.name;
}

attackBtn.addEventListener("click", () => {
    character.attacked();
    renderCharacter();
});

levelUpBtn.addEventListener("click", () => {
    character.levelUp();
    renderCharacter();
});

renderCharacter();