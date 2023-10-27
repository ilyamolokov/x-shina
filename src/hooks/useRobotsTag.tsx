import { useEffect } from "react";
import { CatalogCategoryType } from "../@types/Catalog";

export const useRobotsTag = (catalog: CatalogCategoryType) => {
    useEffect(() => {
        if(!catalog) return
        const robotsMetaTag = document.querySelector('meta[name="robots"]') as Element;
        if (!robotsMetaTag) {
            const meta = document.createElement('meta');
            meta.name = "robots";
            meta.content = catalog?.index ? 'index' : 'noindex'
            document.getElementsByTagName('head')[0].appendChild(meta);
        } else {
            robotsMetaTag.setAttribute('content', catalog?.index ? 'index' : 'noindex')
        }
    }, [catalog])
}