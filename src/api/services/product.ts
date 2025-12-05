import { apiComfortService } from "../config";
import {
  IProduct,
  IProductCreate,
  IProductUpdate,
  ProductResponse,
  ProductsResponse,
} from "@/types/Product";

class ProductService {
  private readonly baseUrl = "/product";

  public create(body: IProductCreate) {
    return apiComfortService
      .post<ProductResponse>(this.baseUrl, body)
      .then((res) => res.data);
  }

  public update(body: IProductUpdate, id: number) {
    return apiComfortService
      .put<ProductResponse>(`${this.baseUrl}/${id}`, body)
      .then((res) => res.data);
  }

  public findAll() {
    return apiComfortService
      .get<ProductsResponse>(this.baseUrl)
      .then((res) => res.data);
  }

  public findById(id: number) {
    return apiComfortService
      .get<IProduct>(`${this.baseUrl}/${id}`)
      .then((res) => res.data);
  }

  public deleteById(id: number) {
    return apiComfortService
      .delete(`${this.baseUrl}/${id}`)
      .then((res) => res.data);
  }
}

export default new ProductService();
