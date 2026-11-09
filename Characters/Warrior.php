<?php
//Class Warrior
class Warrior extends AbstractCharacter{
    //ATTRIBUT
    private int $critic;

    //CONSTRUCTEUR
    public function __construct(int $newCritic, string $newName, int $newHealth, ?Weapon $newWeapon = null){
        // :: -> operateur de résolution de porté. Ici on demande d'utiliser le constructeur de la class parente (AbstractCharacter)
        parent::__construct($newName, $newHealth, $newWeapon);
        $this->critic = $newCritic;
    }

    //GETTER ET SETTER
    /**
         * Get the value of critic
         *
         * @return int
         */
        public function getCritic(): int {
            return $this->critic;
        }

        /**
         * Set the value of critic
         *
         * @param int $critic
         *
         * @return self
         */
        public function setCritic(int $critic): self {
            $this->critic = $critic;
            return $this;
        }
    //METHOD
    public function attack(AbstractCharacter $target):void{
        //ici pour prendre l'arme du guerrier, on doit passer par le getter, car cette classe n'a pas directement accès à l'attribut weapon de son parent, du fait de l'encapsulation private.
        //ici : on sort l'arme (getWeapon) puis on attaque avec (hit())
        $damage = $this->getWeapon()->hit();

        //Vérifie si c'est un coup critique
        if(random_int(1,100) <= $this->critic){
            echo("C'est un coup critique");
            $damage *= 2;
        }

        //La cible encaisse les dégâts
        $target->takeDamage($damage);
    }

}