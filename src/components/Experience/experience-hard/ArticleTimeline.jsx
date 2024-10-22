
import Article from "./Article.jsx"
import Timeline from "./Timeline.jsx"
import {useParser} from "./parser.js"

function ArticleTimeline() {
    const parser = useParser()
    const data = {
        title: "Experience"
    }

    const parsedData = parser.parseArticleData(data)
    const items = parsedData.items
    parser.sortArticleItemsByDateDesc(items)

    const parsedItems = parser.formatForTimeline(items)

    return (
        <Article className={`article-timeline`} title={ parsedData.title }>
            <Timeline items={parsedItems}/>
        </Article>
    )
}

export default ArticleTimeline