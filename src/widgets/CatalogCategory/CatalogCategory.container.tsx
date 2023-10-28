import { observer } from 'mobx-react'
import { useNavigate, useParams } from 'react-router-dom'

import { CatalogCategory } from './CatalogCategory'
import { useFindChildren } from './hooks/useFindChildren'
import store from '../../store/CatalogCategoriesStore'
import { useRobotsTag } from '../../hooks/useRobotsTag'
import { useSortNestedChildren } from './hooks/useSortNestedChildren'

export const CatalogCategoryContainer = observer(() => {
  const { '*': path } = useParams()
  const navigate = useNavigate()
  const nestedChildren = useFindChildren(store.data, path)
  const sortedNestedChildren = useSortNestedChildren(nestedChildren.children)
  useRobotsTag(nestedChildren)

  const categoryProperties = {
    id: nestedChildren.id,
    name: nestedChildren.name,
    slug: nestedChildren.slug,
    index: nestedChildren.index,
  }

  const handleForwardClick = (name: string) => {
    navigate(`${path}/${name}`)
  }

  const handleBackClick = () => {
    navigate(-1)
  }

  return (
    <CatalogCategory
      categoryProperties={categoryProperties}
      categoryChildren={sortedNestedChildren}
      onForwardClick={handleForwardClick}
      onBackClick={handleBackClick}
    />
  )
})
