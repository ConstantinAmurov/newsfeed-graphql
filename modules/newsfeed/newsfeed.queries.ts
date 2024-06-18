import {gql} from '@apollo/client';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
export const GET_ARTICLES = gql`
    query ($projectId: String!, $skip: Int!, $take:Int!){
        contents (
            project_id: $projectId,
            lang: "ru",
            skip: $skip,
            take: $take
        ) {
            cparent {
                url {
                    ru
                }
            }
            url
            id
            type
            thumbnail
            title {
                long
            }
            description {
                intro
            }
            dates {
                posted
                last_content
                updated
            }
        }
    }`