import {Container, Description, Title} from "./NewsDescription.styled";
import {decode} from "html-entities";
import {generateFullURL} from "../../../../src/utils/url";

interface NewsDescriptionProps {title:string,url:string,description:string}
export const NewsDescription: React.FC<NewsDescriptionProps> = ({title,url,description}) => {

    return <Container>
        <a href={generateFullURL(url)}><Title>{decode(title)}</Title></a>
        <Description>{description}</Description>
    </Container>;
}