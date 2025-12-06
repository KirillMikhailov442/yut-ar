import {
  IProjectToProduct,
  IProjectToProductCreate,
  ProjectToProductsResponse,
} from '@/types/ProjectToProduct';
import { apiComfortService } from '@api/config';

class ProjectToProductSerice {
  private readonly baseUrl = '/project-to-product';

  public create(body: IProjectToProductCreate) {
    return apiComfortService.post(this.baseUrl, body).then(res => res.data);
  }

  public update(body: IProjectToProductCreate) {
    return apiComfortService.put(this.baseUrl, body).then(res => res.data);
  }

  public findAll() {
    return apiComfortService
      .get<ProjectToProductsResponse>(this.baseUrl)
      .then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<IProjectToProduct>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete<string>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }
}

export default new ProjectToProductSerice();
