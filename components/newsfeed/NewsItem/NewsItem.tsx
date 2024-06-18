import {Container} from "./NewsItem.styled";
import {NewsImage} from "./NewsImage/NewsImage";
import {IArticle} from "../../../modules/newsfeed/newsfeed.types";
import NewsDescription from "./NewsDescription";

interface NewsItemsProps {
    article: IArticle
}
export const NewsItem: React.FC<NewsItemsProps> = ({article}) => {
    return <Container>
        <NewsImage thumbnail={article.thumbnail} url={article.url}/>
        <NewsDescription title={article.title.long} url={article.url} description={article.description.intro}></NewsDescription>
    </Container>
}