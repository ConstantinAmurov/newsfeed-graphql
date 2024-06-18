export interface IArticle {
    id:string;
    description: {
        intro:string;
        __typename:"ContentDescription"
    };
    url:string;
    thumbnail: string;
    title: {
        long:string;
        __typename:"ContentTitle"
    }
    __typename:
        "Content"
}

export interface FetchArticlesData {
    contents: IArticle[]
}