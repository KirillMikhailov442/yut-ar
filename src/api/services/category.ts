import { CategoiesResponse, ICategory } from '@/types/Category';
import { apiComfortService } from '@api/config';

class CategoryService {
  private readonly baseUrl = '/category';

  public findAll() {
    return apiComfortService
      .get<CategoiesResponse>(this.baseUrl)
      .then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<ICategory>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }
}

export default new CategoryService();
