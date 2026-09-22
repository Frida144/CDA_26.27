import { Component } from '@angular/core';
import { NgClass,NgStyle,NgIf,NgFor } from '@angular/common';

@Component({
  selector: 'app-tp-directives',
  imports: [NgClass,NgStyle,NgFor,NgIf],
  templateUrl: './tp-directives.html',
  styleUrl: './tp-directives.css'
})
export class TpDirectives {
  afficherText:boolean=false;
  tabLog: number[] = [];

  onAfficherText(){
    this.afficherText = !this.afficherText;
    console.log('Clicked');
    this.tabLog.push(this.tabLog.length+1)
  }
}