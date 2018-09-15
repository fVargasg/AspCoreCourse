export interface Pagination {
  currentPage: number;
  itemPerPage: number;
  totalitems: number;
  totalPages: number;
}

export class PaginatedResult<T> {
  result: T;
  pagination: Pagination;
}
