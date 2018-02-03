const typeDefinitions = `
type Query {
  testString: String
  author(firstName: String, lastName: String): Author
  getFortuneCookie: String # we'll use this later
}

type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}

type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}



schema {
  query: Query
}
`;

export default [typeDefinitions];
