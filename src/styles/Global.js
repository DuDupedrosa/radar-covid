import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
  --color-1:#00b4d8;
  --color-2:#0077b6;
  --color-3:#000000;
  --color-4:#111111;
  --color-5:#ffffff;
  --family-title: 'Poppins', sans-serif;;
  --family-text: 'Roboto', sans-serif;
}

*,body,html {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  display: inline-block;
}

img {
  max-width: 100%;
  display: block;
}
`;

export const ContainerMain = styled.div`
  max-width: 78.75rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 1.25rem;
`;
