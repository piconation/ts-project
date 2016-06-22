/**
 * Created by mattpowell on 6/21/16.
 */

/*function goodbye(compiler: string) {
    console.log(`Goodbye from ${compiler}`);
}
goodbye("TypeScript");*/

import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");

class PokemonTrainer {
    name: string;
    numberOfPokeballs: number;
    pokemon: Array<Pokemon>;
    gymBadges: string[];
    
    startFight(pokemon: Pokemon, attackName: string): string {
        return pokemon.attack(attackName);
    }
    
    runAway(): string {
        return "See ya!"
    }
}

class Pokemon {
    name: string;
    trainerName: string;
    hp: number;
    private attacks: Array<string>;

    get attack():Array<string> {
        return this.attacks;
    }

    set attacks(attacks: Array<string>) {
            this.attacks = attacks;
    }
    
    attack(attackName: string): string {
        return attackName;
    }
}

