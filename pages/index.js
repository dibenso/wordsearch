import styled from 'styled-components'
import Layout from '../components/layout'
import Wordsearch from '../components/wordsearch'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
  <Layout>
    <Title>My page</Title>
    <Wordsearch />
  </Layout>
)