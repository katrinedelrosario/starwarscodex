import './App.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import GetFilms from './components/getFilms'
 
const errorLink = onError(({graphqlErrors, networkError}) => {
  if (graphqlErrors) {
    graphqlErrors.map(({message, location, path}) => {
      alert(`graphql error ${message}`)
    })
  }
})
const link = from([
  errorLink,
  new HttpLink({uri:'https://swapi-graphql.netlify.app/.netlify/functions/index' })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})


function App() {
  return (
  <ApolloProvider client={client}> 
  {" "}
  <GetFilms />
  </ApolloProvider>
  )
}

export default App
