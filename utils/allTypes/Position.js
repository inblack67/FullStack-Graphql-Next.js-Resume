import { objectType } from '@nexus/schema';
import { differenceInYears, differenceInMonths } from 'date-fns'

export const Position = objectType({
    name: 'Position',
    definition(t) {
        t.id('id');
        t.string('title');
        t.string('company');
        t.string('startDate', {
            description: 'When I started at this position'
        });
        t.string('endDate', { nullable: true });
        t.string('employmentType');
        t.list.string('achievements', position => position.achievements);
        t.int('years', ({ endDate, startDate }) =>
            differenceInYears(
                endDate ? new Date(endDate) : new Date(),
                new Date(startDate)
            )
        );
        t.int('months', ({ endDate, startDate }) =>
            differenceInMonths(
                endDate ? new Date(endDate) : new Date(),
                new Date(startDate)
            ) % 12  // get rid of years
        );
    }
});