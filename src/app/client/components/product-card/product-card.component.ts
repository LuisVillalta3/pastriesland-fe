import {Component, Input, OnInit} from '@angular/core';
import {ProductEntity} from '@entities/product.entity';
import {assetImageUrl} from '@app/utils/asset-image-url.util';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [MatIconModule, MatTooltipModule, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: ProductEntity;

  get mainImage() {
    return assetImageUrl(this.product.images[0]?.path || '');
  }
}
