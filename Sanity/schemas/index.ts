import  SchemaTypes  from "all:part:@sanity/base/schema-type"
import pageInfo from './pageInfo'

export default createSchema({
    name: "default",
    types: SchemaTypes.concat([
        pageInfo
    ])
}) 
