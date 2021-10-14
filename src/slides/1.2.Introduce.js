import { CodePane, FlexBox, Heading, MarkdownSlide, Slide } from "spectacle";

export default function Slide0(){
    return (
        <MarkdownSlide animateListItems backgroundColor="black">
      {`
       # Introduction
       Why do we use Nest in our project?
       - Code is **clean** and **easy to read**.
       - It is **scalable** and **easily maintainable** in a big project.
       - Similar to **Spring Boot** that we have learned!
      `}
    </MarkdownSlide>
    );
}