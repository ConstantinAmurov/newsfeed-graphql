import {styled} from "styled-components";

export const Container = styled.div`
    display: flex;
    max-width: 100%;
    flex-direction: column;
    margin-left: 16px;`

export const Title = styled.h3`
    font-size: 24px;
    line-height: 26px;
font-weight: 500;

    @media (max-width: 850px) {
    font-size: 20px;
    line-height: 28px;
}

    @media (max-width: 480px) {
            font-size: 14px;
            line-height: 16px;
            font-weight: 500;
    }`


export const Description = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    @media (max-width: 850px) {
        display: none; // Hide the description on tablet screens and below
    }
`