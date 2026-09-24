import { Component, signal, computed, effect } from '@angular/core';
@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class Signals {

  // 1. SIGNALS D'ÉTAT (State Signals)
  quantity = signal<number>(1);
  unitPrice = signal<number>(35);
  discountPercent = signal<number>(0);
  isExpressShipping = signal<boolean>(false);

  // 2. SIGNALS CALCULÉS (Computed Signals)
  // Sous-total brut
  subtotal = computed(() => this.quantity() * this.unitPrice());

  // Montant de la remise
  discountAmount = computed(() => (this.subtotal() * this.discountPercent()) / 100);

  // Calcul dynamique des frais de port
  shippingFee = computed(() => {
    //A voir si pas mieux avec switch
    if (this.quantity() === 0) return 0;
    if (this.isExpressShipping()) return 12;
    return this.subtotal() >= 100 ? 0 : 5;
  });

  // Total final
  total = computed(() => {
    const result = this.subtotal() - this.discountAmount() + this.shippingFee();
    return Math.max(0, result);
  });

  constructor() {
    // 3. EFFECT (Effet secondaire)
    effect(() => {
      const cartData = {
        quantity: this.quantity(),
        discount: this.discountPercent(),
        express: this.isExpressShipping(),
        total: this.total(),
      };

      console.log('[EFFECT] Mise à jour du panier :', cartData);
      localStorage.setItem('cart_demo_signals', JSON.stringify(cartData));
    });
  }

  // 4. MÉTHODES D'ACTION
  incrementQuantity(): void {
    this.quantity.update((q) => q + 1);
  }

  decrementQuantity(): void {
    this.quantity.update((q) => Math.max(0, q - 1));
  }

  //A améliorer on aurait que le choix entre les 3 réductions
  setDiscount(percent: number): void {
    this.discountPercent.set(percent);
  }

  toggleExpressShipping(): void {
    this.isExpressShipping.update((state) => !state);
  }

  resetCart(): void {
    this.quantity.set(1);
    this.discountPercent.set(0);
    this.isExpressShipping.set(false);
  }
}