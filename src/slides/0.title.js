import { CodePane, FlexBox, Heading, Slide, Text } from "spectacle";
import NestjsLogo from '../assets/images/nestjs.png';

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
        <Slide backgroundColor="black">
            <FlexBox height="100%" flexDirection="column">
                <img src={NestjsLogo}/>
                <Heading margin="0px" fontSize="h5" color="white">
                    The framework that we were waiting for ✨
                </Heading>
                <Text fontSize="h6">Made with ❤️ by Sirawit Pratoomsuwan</Text>
            </FlexBox>
        </Slide>
    );
}