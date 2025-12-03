import {
  CartResponse,
  CartsResponse,
  ICartCreate,
  ICartUpdate,
} from '@/types/Cart';
import { apiComfortService } from '../config';

class CartService {
  private readonly baseUrl = '/cart';

  public create(body: ICartCreate) {
    return apiComfortService
      .post<CartResponse>(this.baseUrl, body)
      .then(res => res.data);
  }

  public update(body: ICartUpdate, id: number) {
    return apiComfortService
      .put<CartResponse>(`${this.baseUrl}/${id}`, body)
      .then(res => res.data);
  }

  public findAll() {
    return apiComfortService
      .get<CartsResponse>(this.baseUrl)
      .then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<CartResponse>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }
}

export default new CartService();
