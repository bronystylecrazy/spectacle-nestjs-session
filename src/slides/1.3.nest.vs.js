import { Grid, Box, Text, CodePane, FlexBox, Heading, MarkdownSlide, Slide } from "spectacle";

let nest = `
@Injectable()
class Product {

    @Get("/")
    public GetData(@Query("name") name, @Query("lastName") lastName ){
        return \`hello, \${name} \${lastName}\`;
    }

    @Post("/")
    public PostData(@Body("message") message){
        return \`Message is : \${message}\`;
    }

    @Get("/:id")
    public GetDataById(@Params("id") id){
        return \`Request id: #\${id} \`;
    }
}
`;



export default function Slide0(){
    return (
    <Slide backgroundColor="black" height="100%">
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
        <Box>
            <Text fontSize="h6">This is our Nest application: </Text>
            <CodePane language="js" style={{width: "100px"}}>
                {nest}
            </CodePane>
        </Box>
        </Grid>
    </Slide>
    );
}