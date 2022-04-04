import styled from 'styled-components';

type Props = {
    whiteColor?: boolean
}

export const Text = styled.h1<Props>`
    font-size: 1.375rem;
    font-weight: bold;
    color: ${(props) => (props.whiteColor ? 'var(--secondary)' : 'var(--primary)')}
`;