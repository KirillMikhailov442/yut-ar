import { ICart, ICartCreate, ICartUpdate } from '@/types/Cart';
import { apiComfortService } from '../config';

class CartService {
  private readonly baseUrl = '/cart';

  public create(body: ICartCreate) {
    return apiComfortService
      .post<ICart>(this.baseUrl, body)
      .then(res => res.data);
  }

  public update(body: ICartUpdate, id: number) {
    return apiComfortService
      .put<ICart>(`${this.baseUrl}/${id}`, body)
      .then(res => res.data);
  }

  public findAll() {
    return apiComfortService.get<ICart[]>(this.baseUrl).then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<ICart>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }
}

export default new CartService();
