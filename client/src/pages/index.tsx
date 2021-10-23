import Head from 'next/head'

import { Container } from '../components/Container'
interface indexProps {

}

const Index: React.FC<indexProps> = ({}) => {
    return (
        <div>
            <Head>
            <title>Nest Next Boilerplate</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container style={{display: 'flex', justifyContent: 'center', margin: 'auto'}}>
                <h1 className="text-6xl">Hello world</h1>
            </Container>
        </div>
    )
}

export default Index