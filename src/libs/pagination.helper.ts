/**
 * Pagination interface
 */
export interface PaginationInterface {
  targetPage: number;
  remotePage: number;
  /**
   * Segmentation results index start
   */
  segStart: number;
  /**
   * segmentation results index end
   */
  segEnd: number;
}

export function getPagination(page: number) {
  const pagination = { targetPage: page || 1 } as PaginationInterface;
  pagination.remotePage = pagination.targetPage > 1 ? Math.floor(pagination.targetPage / 2) : 1;
  if (pagination.targetPage % 2 == 1) {
    pagination.segStart = 0;
    pagination.segEnd = 10;
  } else {
    pagination.segStart = 10;
    pagination.segEnd = 20;
  }
  return pagination;
}
