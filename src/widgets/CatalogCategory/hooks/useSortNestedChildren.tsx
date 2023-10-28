import { CatalogCategoryType } from '../../../@types/Catalog'

export const useSortNestedChildren = (
  children: CatalogCategoryType[] | null,
) => {
  if (!children) return []
  return [...children].sort((a, b) => {
    if (a.name < b.name) {
      return -1
    }
    if (a.name > b.name) {
      return 1
    }
    return 0
  })
}
