import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 1rem;
        margin-bottom: 12px;
    }
    input {
        width: 100%;
        padding: 6px 12px;
        border: 1px solid var(--outline);
        border-radius: 4px;
        color: var(--primary);
        box-sizing: border-box;

        ::placeholder {
            color: var(--muted)
        }
    }

    textarea {
        width: 100%;
        padding: 6px 12px;
        border: 1px solid var(--outline);
        border-radius: 4px;
        color: var(--primary);
        box-sizing: border-box;
        resize: none;

        ::placeholder {
            color: var(--muted)
        }
    }
`;