import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { withApollo } from "../lib/apollo"


export const ALL_POSTS_QUERY = gql`
{
    labrador {
    article(id: 71564397) {
      title
      bodytextHTML
    }
  }
}
`

function PostList () {
  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    ALL_POSTS_QUERY,
    {
      notifyOnNetworkStatusChange: true
    }
  )

  return (
    <section>
      {JSON.stringify(data)}
    </section>
  )
}

export default withApollo(PostList)