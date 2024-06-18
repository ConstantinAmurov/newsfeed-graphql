import { Container, Title } from "./NewsFeed.styled";
import NewsList from "../NewsList/NewsList.styled";
import {useEffect, useState, useRef, useCallback} from "react";
import useGetArticles from "../../../src/hooks/useGetArticles";
import NewsItem from "../NewsItem";
import { IArticle } from "../../../modules/newsfeed/newsfeed.types";
import useIntersection from "../../../src/hooks/useIntersection";

export const NewsFeed: React.FC = () => {
    const [skip, setSkip] = useState(0);
    const { data, loading, fetchMore } = useGetArticles();

    const {refCallback,intersection} = useIntersection();

    const handleFetchMore = useCallback(() => {
        setSkip(skip+10);
        fetchMore({
                variables: { skip:skip+10,take: 10 },
                updateQuery: (prev, { fetchMoreResult }) => {
                    if (!fetchMoreResult) return prev;
                    return {
                        ...prev,
                        contents: [...prev.contents,...fetchMoreResult.contents]
                    }
                }
            }
        )
    },[fetchMore,skip])

    useEffect(() => {
        if (intersection?.isIntersecting && !loading) {
            handleFetchMore();
        }
    }, [intersection?.isIntersecting]);

    return (
        <Container>
            <Title>Сегодня</Title>
            <NewsList>
                {data?.map(article => (
                    <NewsItem key={article.id} article={article}/>
                ))}
            </NewsList>

            <div ref={refCallback}></div>
        </Container>
    );
};