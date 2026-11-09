<?php
//implements : définit l'implémentation d'une interface
class Bow implements Weapon {
    //ATTRIBUT
    private int $range;
    private int $damage;

    //constructeur
    public function __construct(int $newRange, int $newDamage){
        $this->range = $newRange;
        $this->damage = $newDamage;
    }
     //GETTER ET SETTER
    /**
         * Get the value of range and damage
         *
         * @return int
         */
        public function getRange(): int {
            return $this->range;
        }
        public function getDamage(): int {
            return $this->damage;
        }

        /**
         * Set the value of range and damage
         *
         * @param int $damage
         *
         * @return self
         */
        public function setRange(int $range): self {
            $this->range = $range;
            return $this;
        }

        public function setDamage(int $damage): self {
            $this->damage = $damage;
            return $this;
        }
    //METHOD
    public function hit():int{
        //1. Affichage du message
        echo("Une flèche vole jusqu'à Range : " . $this->range . " mètres" . PHP_EOL);
        //2. Retourner les damages
        return $this->damage;
    }
}