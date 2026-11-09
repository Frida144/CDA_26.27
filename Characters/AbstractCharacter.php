<?php
//Class Abstraite Character
abstract class AbstractCharacter {
    //ATTRIBUT
    private ?string $name;
    private ?int $health;
    private ?Weapon $weapon;

    //CONSTRUCTEUR
    public function __construct(string $newName, int $newHealth, ?Weapon $newWeapon = null){
        $this->name = $newName;
        $this->health = $newHealth;
        $this->weapon = $newWeapon;
    }

    //GETTER ET SETTER
    public function getName():string{
        return $this->name;
    }
    public function setName(string $newName):self{
        $this->name = $newName;
        return $this;
    }
    /**
     * Get the value of health
     *
     * @return int
     */
    public function getHealth(): int {
        return $this->health;
    }

    /**
     * Set the value of health
     *
     * @param int $health
     *
     * @return self
     */
    public function setHealth(int $health): self {
        $this->health = $health;
        return $this;
    }

    /**
     * Get the value of weapon
     *
     * @return Weapon
     */
    public function getWeapon(): Weapon {
        return $this->weapon;
    }

    /**
     * Set the value of weapon
     *
     * @param Weapon $weapon
     *
     * @return self
     */
    public function setWeapon(Weapon $weapon): self {
        $this->weapon = $weapon;
        return $this;
    }

    //METHOD
    //méthode abstraite : ce qui permet à la class d'être abstraite
    public abstract function attack(AbstractCharacter $target):void;


    //méthode qui calcule les dégâts prix par le personnage
    public function takeDamage(int $damage):void{
        //1. Réduit la santé du personnage
        $this->health -= $damage;

        //2. Afficher un message
        echo($this->name." prend ".$damage." dégâts.");

        //3. Vérifie si le personnage meurt
        if($this->health <= 0){
            echo($this->name." meurt.Paix à son âme.");
        }
    }
}