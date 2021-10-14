import { Markdown, CodePane, FlexBox, Heading, MarkdownSlide, Slide, Text } from "spectacle";

export default function Slide0(){
    return (
      <Slide backgroundColor="black">
      <Heading>Installation</Heading>

      <Markdown>
      # A highly customizable 
      
      and versatile GraphQL client
      - fsdfs
      - sdfsdfsd
      - sdfsdf
      </Markdown>
      <Text>Made with Sirawit</Text>
      <CodePane language="bash" showLineNumbers={false}>
        npm i -g @nestjs/cli --no-spec
      </CodePane>

    </Slide>
    );
}