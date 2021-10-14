import { Deck, Slide, Heading, Quote, Stepper, Markdown, Text, CodeSpan, CodePane, Box, MarkdownSlide } from 'spectacle';
import defaultTheme from './theme/default';
import "./assets/style.css";

function App() {
  return (
    <Deck theme={defaultTheme}>
      <Slide backgroundColor="white">
        <Heading>Welcome to Spectacle</Heading>
        <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';
        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });
        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
        <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
      </Slide>
      <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide
       It uses the \`animateListItems\` prop.
       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide>
    </Deck>
  );
}

export default App;