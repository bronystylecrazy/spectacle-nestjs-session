import { Grid, Box, Text, CodePane, FlexBox, Heading, MarkdownSlide, Slide } from "spectacle";

let express = `
    const router = express.Router();

    router.get('/', (request, response) => {
        const name = request.query.name;
        const lastName = request.query.lastName;
        response.send(\`hello, \${name} \${lastName}\`);
    });

    router.post('/', (request, response) => {
        const message = request.body.message;
        response.send(\`Message is : \${message}\`);
    });

    router.get('/:id', (request, response) => {
        const id = request.params.id;
        response.send(\`Request id: #\${id} \`);
    });

    app.use('/product', router);
`;


export default function Slide0(){
    return (
    <Slide backgroundColor="black" height="100%">
      <Grid gridTemplateColumns="1fr 1fr" gridColumnGap={15}>
        <Box>
            <Text fontSize="h6">This is our Express application: </Text>
            <CodePane language="js" style={{width: "100px"}}>
                {express}
            </CodePane>
        </Box>
        </Grid>
    </Slide>
    );
}