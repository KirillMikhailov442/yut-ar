import { apiComfortService } from '../config';
import { IProject, IProjectCreate, IProjectUpdate } from '@/types/Project';

class ProjectService {
  private readonly baseUrl = '/project';

  public create(body: IProjectCreate) {
    return apiComfortService
      .post<IProject>(this.baseUrl, body)
      .then(res => res.data);
  }

  public update(body: IProjectUpdate, id: number) {
    return apiComfortService
      .put<IProject>(`${this.baseUrl}/${id}`, body)
      .then(res => res.data);
  }

  public findAll() {
    return apiComfortService
      .get<IProject[]>(this.baseUrl)
      .then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<IProject>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }
}

export default new ProjectService();
