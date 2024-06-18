import {styled} from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    border-radius: 4px;
    width: 240px;
    height: 120px;

    @media (max-width: 480px) {
        width: 144px;
        height: 75px;
    }
`