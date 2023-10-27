export type CatalogCategoryType = {
    id: number, 
    name: string, 
    slug: string, 
    index: boolean, 
    children: CatalogCategoryType[] | null
}