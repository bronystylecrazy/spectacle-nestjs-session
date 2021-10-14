import { CodePane, Heading, Slide } from "spectacle";

let sourceCode = `
import { createClient, Provider } from 'urql';
const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
const App = () => (
  <Provider value={client}>
    <Todos />
  </Provider>
);
`;

export default function Slide0(){
    return (
        <Slide backgroundColor="white">
            <Heading>Welcome to Spectacle</Heading>
            <CodePane language="jsx">{sourceCode}</CodePane>
        </Slide>
    );
}