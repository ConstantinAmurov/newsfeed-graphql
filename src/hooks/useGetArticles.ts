import { useQuery } from "@apollo/client";
import client from "../lib/graphql/client";
import { FetchArticlesData } from "../../modules/newsfeed/newsfeed.types.js";
import { GET_ARTICLES } from "../../modules/newsfeed/newsfeed.queries";

const useGetArticles = () => {
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

    const { data, loading, fetchMore } = useQuery<FetchArticlesData>(GET_ARTICLES, {
        variables: {
            projectId,
            skip:0,
            take:10,
        },
        client,
    });

    return {
        data: data?.contents,
        loading,
        fetchMore,
    };
};

export default useGetArticles;