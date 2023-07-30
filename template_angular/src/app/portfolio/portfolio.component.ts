import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  selectedCategory: string = 'all';

  items = [
    { imgSrc: '/assets/img/portfolio/app1.jpg', category: 'app', title: 'Granola Orgánica', description: 'Una deliciosa mezcla de granos, frutas secas y semillas...' },
    { imgSrc: '/assets/img/portfolio/app2.jpg', category: 'app', title: 'Aceite de Oliva Extra Virgen', description: 'Nuestro aceite de oliva prensado en frío, cultivado de forma orgánica...' },
    { imgSrc: '/assets/img/portfolio/app3.jpg', category: 'app', title: 'Miel Orgánica', description: 'Endulza tus preparaciones con nuestra miel orgánica, producida por abejas en entornos naturales...' },
    { imgSrc: '/assets/img/portfolio/card1.jpg', category: 'card', title: 'Detergente Líquido para Ropa', description: 'Nuestro detergente líquido ecológico está formulado con ingredientes naturales y biodegradables...' },
    { imgSrc: '/assets/img/portfolio/card2.jpg', category: 'card', title: 'Limpiador Multiusos', description: 'Un limpiador multiusos ecológico que elimina eficientemente la suciedad y las manchas...' },
    { imgSrc: '/assets/img/portfolio/card3.jpg', category: 'card', title: 'Jabón de Manos Natural', description: 'Nuestro jabón de manos natural y suave está elaborado con ingredientes orgánicos que limpian e hidratan...' },
    { imgSrc: '/assets/img/portfolio/web1.jpg', category: 'web', title: 'Cepillo de Dientes de Bambú', description: 'Un cepillo de dientes ecológico fabricado con mango de bambú biodegradable y cerdas suaves de origen vegetal...' },
    { imgSrc: '/assets/img/portfolio/web2.jpg', category: 'web', title: 'Bolsas Reutilizables', description: 'Nuestras bolsas de algodón orgánico son ideales para hacer compras sin generar residuos...' },
    { imgSrc: '/assets/img/portfolio/web3.jpg', category: 'web', title: 'Velas de Cera de Soja', description: 'Nuestras velas aromáticas están hechas de cera de soja natural, que arde limpiamente sin emitir sustancias tóxicas...' }
  ];

  // Función para cambiar la categoría seleccionada
  changeCategory(category: string) {
    this.selectedCategory = category;
  }
}
