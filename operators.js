let shipHealth = 3;
let shipAmmo = 3;
let targetHealth = 3;

// missing functions:
// shipCanFire
// isHit
// reloadShip
// isDestroyed

function isHit() {
    // should return true if a randomly generate number is greater than .5, false if it is less than .5
    let shotHit = Math.random();
    let shipDamaged = false;
    if (shotHit > 0.5)
    {
        shipDamaged = true;
    }
    else
    {
        shipDamaged = false;
    }
    return shipDamaged;
}

function shipCanFire() {
    // return true if the ships health is above 0 AND ammo is above 0 false otherwise
    let shipFire = false;
    if (shipHealth > 0 && shipAmmo > 0)
    {
        shipFire = true;
    }
    return shipFire;
}

function isDestroyed(shipHealth) {
    // return true if health is zero or less
    let destroyed = false;
    if (shipHealth <= 0)
    {
        destroyed = true;
    }
    return destroyed;
}

function reloadShip() {
    // reduce ship health by 1 and increase ammo by 3
    let load = false;
    if (shipHealth > 0 && shipAmmo <= 0 && targetHealth > 0)
    {
        shipHealth--;
        shipAmmo = 3;
    }
}

function fireShip() {
    if (shipCanFire()) {
        shipAmmo--;
        if (isHit()) {
            targetHealth--;
            console.log("hit - targetHealth:", targetHealth);
        } else {
            console.log("miss");
        }
    } else {
        reloadShip();
        console.log("reloading, shipHealth:", shipHealth);
    }
}

function encounter() {
    console.log("You see a target");
    if (!isDestroyed(targetHealth) && !isDestroyed(shipHealth)) {
        fireShip();
        if (isDestroyed(targetHealth)) {
            console.log("Target eliminated");
        }
        if (isDestroyed(shipHealth)) {
            console.log("ship destroyed");
        }
    }
}