import {BaseEntity} from './base.entity';
import {CategoryEntity} from '@entities/category.entity';

export class ProductEntity extends BaseEntity {
  name!: string;
  basePrice!: string;
  active!: boolean;
  isComplement: boolean = false;
  units: number = 0;
  minPortions: number = 0;
  maxPortions: number = 0;

  images: any[] = []

  // CATEGORIES
  categories: CategoryEntity[] = []
  categoriesIds: string[] = []
}
