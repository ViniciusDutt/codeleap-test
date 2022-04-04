import styled from 'styled-components';

export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--outline);
`;
export const PostHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--primary);
    padding: 24px 32px;

    div {
        display: flex;
        gap: 0 32px;

        img {
            cursor: pointer;
        }
    }
`;
export const PostContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px 32px;
    gap: 18px;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 1.125rem;
        color: var(--terciary);
    }

    p {
        font-size: 1.125rem;
        line-height: 21px;
    }
`;