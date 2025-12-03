export interface ResponseBase<T> {
  _meta: ResponseBaseMeta;
  _links: ResponseBaseLinks;
  items: T;
}

export interface ResponseBaseMeta {
  currentPage: number;
  pageCount: number;
  perPage: number;
  totalCount: number;
}

export interface ResponseBaseLinks {
  self: {
    href: string;
  };
}

export interface ResponseError {
  name: string;
  message: string;
  code: number;
  status: number;
  type: string;
}
