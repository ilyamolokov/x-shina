import { CatalogCategoryType } from "../../../@types/Catalog";

const defaultCategoryData = {
    id:0,
    name:"Категории",
    slug:'',
    index:false,
}

export const useFindChildren = (catalogCategories: CatalogCategoryType[] | null, nestedSlug?: string) => {
    if(!nestedSlug || !catalogCategories) {
        return {
            ...defaultCategoryData,
            children: catalogCategories
        };
    }
    const slugs = nestedSlug.split('/');

    function recursiveSearch(arr: CatalogCategoryType[], slugIndex: number): CatalogCategoryType {
        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];

            if (item.slug === slugs[slugIndex]) {
                if (slugIndex === slugs.length - 1) {
                    return item;
                }

                if (item.children) {
                    const found = recursiveSearch(item.children, slugIndex + 1);
                    if (found) {
                        return found;
                    }
                }
            }
        }

        return {
            ...defaultCategoryData,
            children: arr
        };
    }

    return recursiveSearch(catalogCategories, 0);
}
