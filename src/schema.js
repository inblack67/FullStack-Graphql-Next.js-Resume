import { makeSchema } from '@nexus/schema';
import * as types from './allTypes'
import path from 'path'

export const schema = makeSchema({
    types,
    outputs: {
        schema: path.join(process.cwd()) + "/src/nexus/schema.graphql",
        typegen: path.join(process.cwd()) + "/src/nexus/typings.ts",
    },
})