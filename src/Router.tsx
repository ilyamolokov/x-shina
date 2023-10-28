import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CatalogCategoryContainer } from './widgets/CatalogCategory/CatalogCategory.container'

export const StaticRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CatalogCategoryContainer />} />
      </Routes>
    </BrowserRouter>
  )
}
