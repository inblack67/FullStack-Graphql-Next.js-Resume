import { queryType, idArg } from '@nexus/schema';
import { data } from '../data'
import { Bio, Position } from './index'

export const Query = queryType({
    definition(t) {
        t.field('bio', {
            type: Bio,
            description: 'GET Bio', 
            resolve: () => data.bio
        })

        t.list.field('positions', {
            type: Position,
            description: 'GET all positions', 
            resolve: () => data.positions
        })

        t.field('position', {
            type: Position,
            description: 'Find a position by its id', 
            nullable: true, // no post of "that" id
            args: { id: idArg() },
            resolve: (root, { id }) => data.positions.find(position => position.id === id)
        })
    }
})