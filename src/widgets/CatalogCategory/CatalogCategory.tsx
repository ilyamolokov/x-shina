import { CatalogCategoryType } from "../../@types/Catalog"
import BaseButton from "../../components/BaseButton/BaseButton"
import styles from './CatalogCategory.module.css'

interface CatalogCategoryProps {
    categoryProperties: Omit<CatalogCategoryType, "children">
    categoryChildren: CatalogCategoryType[]
    onForwardClick: (name:string) => void
    onBackClick: () => void
}
export const CatalogCategory = (props: CatalogCategoryProps) => {
    const { categoryProperties, categoryChildren, onForwardClick, onBackClick } = props

    return <div className={styles.catalogCategoryConteiner}>
        {!!categoryProperties.id && <BaseButton onClick={onBackClick}>{'< Назад'}</BaseButton>}
        <h1>{categoryProperties.name}</h1>
        {categoryChildren.map(({id, name, slug}) => {
            return <BaseButton key={id} onClick={()=>onForwardClick(slug)}>{name} {' >'}</BaseButton>
        })}
    </div>
}
