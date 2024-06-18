import Image from "next/image";
import logo from "../../../public/point-logo.svg"
import {Container} from "./Logo.styled";
export const Logo = () => {

    return <Container>
        <Image src={logo} alt="logo"
    width={82}
               height={25}/>
    </Container>
        }
