import { Injectable } from '@angular/core';
import {AdminHttpClientService} from '@services/admin-http-client.service';
import {HttpResponse} from '@responses/http.response';
import {ProductEntity} from '@entities/product.entity';
import {CategoryEntity} from '@entities/category.entity';

const URL = 'admin/products'

type ProductDto = {
  name: string,
  basePrice: string,
  active: boolean,
  categoriesIds: string[],
  isComplement: boolean,
  maxPortions: number,
  minPortions: number,
  units: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private adminHttpClient: AdminHttpClientService) { }

  create(
    {
      name,
      active,
      basePrice,
      categoriesIds,
      isComplement,
      maxPortions,
      minPortions,
      units,
    }: ProductDto
  ) {
    return this.adminHttpClient.post<HttpResponse<ProductEntity>>(URL, {
      name,
      active,
      basePrice,
      categoriesIDs: categoriesIds,
      isComplement,
      maxPortions,
      minPortions,
      units
    })
  }

  update(
    id: string,
    {
      name,
      active,
      basePrice,
      categoriesIds,
      isComplement,
      maxPortions,
      minPortions,
      units,
    }: ProductDto
  ) {
    return this.adminHttpClient.put<HttpResponse<ProductEntity>>(`${URL}/${id}`, {
      name,
      active,
      basePrice,
      categoriesIDs: categoriesIds,
      isComplement,
      maxPortions,
      minPortions,
      units
    })
  }

  getAll() {
    return this.adminHttpClient.get<HttpResponse<{ results: CategoryEntity[] }>>(URL)
  }

  getById(id: string) {
    return this.adminHttpClient.get<HttpResponse<ProductEntity>>(`${URL}/${id}`)
  }
}
