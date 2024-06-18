import Image from "next/image";
import {Container} from "./NewsImage.styled";
import {generateFullURL, generateImageURL} from "../../../../src/utils/url";


interface NewsImageProps {
    thumbnail:string;
    url:string;
}
export const NewsImage: React.FC<NewsImageProps> = ({thumbnail,url}) => {
    return <a href={generateFullURL(url)}>
        <Container>
        <Image src={generateImageURL(thumbnail)} width={240} height={120} alt={"Article Thumbnail"}/>
        </Container>
    </a>
}