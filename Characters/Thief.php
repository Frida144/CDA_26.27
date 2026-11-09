<?php
//Class Thief
class Thief extends AbstractCharacter{
    //ATTRIBUT
    private int $backstab = 0;

    //CONSTRUCTEUR
    public function __construct(int $newBackstab, string $newName, int $newHealth, ?Weapon $newWeapon = null){
        parent::__construct($newName, $newHealth, $newWeapon);
        $this->backstab = $newBackstab;
    }
    //GETTER ET SETTER
     /**
         * Get the value of backstab
         *
         * @return int
         */
        public function getBackstab(): int {
            return $this->backstab;
        }

    /**
         * Set the value of backstab
         *
         * @param int $backstab
         *
         * @return self
         */
        public function totalDamage(int $backstab): self {
            $this->backstab = $backstab;
            return $this;
        }
    //METHOD
    //Retourne un bonus de dégâts aléatoire entre 0 et 6 (inclus)
    public function backstab():int{
        return random_int(0, 6);
    }

    public function attack(AbstractCharacter $target):void{
        //Prendre l'arme pour lancer la methode hit() et conserver les dégats dans une variable
        $damage = $this->getWeapon()->hit();

        //Lance la méthode backstab() et ajoute les dégâts retournés aux dégâts de l'attaque
        $totalDamage = $this->backstab() + $damage;

        //Lance la méthode takeDamage() de la cible 
        $target->takeDamage($totalDamage);
    }
}