import {
  ILogin,
  IUser,
  IUserCreate,
  IUserUpdate,
  LoginResponse,
  UserResponse,
  UsersResponse,
} from '@/types/User';
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
      .put<UserResponse>(`${this.baseUrl}/${id}`, body)
      .then(res => res.data);
  }

  public findAll() {
    return apiComfortService
      .get<UsersResponse>(this.baseUrl)
      .then(res => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<UserResponse>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete<string>(`${this.baseUrl}/${id}`)
      .then(res => res.data);
  }

  public profile() {
    return apiComfortService
      .get<UserResponse>(`${this.baseUrl}/profile`)
      .then(res => res.data);
  }

  public login(body: ILogin) {
    return apiComfortService
      .post<LoginResponse>(`${this.baseUrl}/login`, body)
      .then(res => res.data);
  }
}

export default new UserService();
