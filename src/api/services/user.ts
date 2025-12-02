import { IUser, IUserCreate, IUserUpdate } from '@/types/User';
import { apiComfortService } from '../config';

class UserService {
  private readonly baseUrl = '/user';

  public create(body: IUserCreate) {
    return apiComfortService
      .post<IUser>(this.baseUrl, body)
      .then(res => res.data);
  }

  public update(body: IUserUpdate, id: number) {
    return apiComfortService
      .put<IUser>(`${this.baseUrl}/${id}`, body)
      .then(res => res.data);
  }

  public findAll() {
    return apiComfortService.get<IUser[]>(this.baseUrl).then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<IUser>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete<string>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public profile() {
    return apiComfortService
      .get<IUser>(`${this.baseUrl}/profile`)
      .then(res => res.data);
  }
}

export default new UserService();
