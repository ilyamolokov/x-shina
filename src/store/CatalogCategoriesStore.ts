import { makeAutoObservable } from 'mobx'
import { CatalogCategoryType } from '../@types/Catalog'

class CatalogCategoriesStore {
  data: CatalogCategoryType[] | null = null
  loading = false
  error: { message: string } | null = null

  constructor() {
    makeAutoObservable(this)
    this.fetchData('https://express-shina.ru/vacancy/catalog')
  }

  setLoading(loading: boolean) {
    this.loading = loading
  }

  setError(error: any) {
    this.error = error
  }

  setData(data: CatalogCategoryType[]) {
    this.data = data
  }

  async fetchData(url: string) {
    try {
      this.setLoading(true)
      this.setError(null)

      const response = await fetch(url)

      if (!response.ok) {
        throw new Error('Не удалось загрузить данные')
      }

      const { categories }: { categories: CatalogCategoryType[] } =
        await response.json()
      this.setData(categories)
    } catch (error) {
      this.setError(error)
    } finally {
      this.setLoading(false)
    }
  }
}

export default new CatalogCategoriesStore()
