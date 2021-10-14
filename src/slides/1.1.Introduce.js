import { CodePane, FlexBox, Heading, MarkdownSlide, Slide } from "spectacle";

export default function Slide0(){
    return (
        <MarkdownSlide animateListItems backgroundColor="black">
      {`
       # Introduction
       What is Nest (NestJS)?
       - It is a framework for building efficient **scalable** Node.js server-side applications
       - It is **MVC ( Model View Controller )**
       - It uses **Typescript**
       - On top of  **Fastify** and **Express ( as default )**
      `}
    </MarkdownSlide>
    );
}