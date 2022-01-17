var buildSchema = require("graphql").buildSchema;
module.exports = buildSchema("\n\n  type Tweet {\n    _id: ID!\n    text: String!\n    source: String!\n    lang: String\n    reply_count: Int!\n    createdAt: String!\n  }\n\n\n  type Query {\n    tweets:[Tweet!]\n    findByLanguage(lang: String):[Tweet]  }\n\n  schema {\n    query: Query\n    \n  }\n");
