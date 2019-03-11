const Team = require('../../lib/models/Team');
const { assert } = require('chai');
const { Types } = require('mongoose');

describe('tests team model', () => {
    
    it('team model is valid schema', () => {        
        const team1 = {
            teamName: 'duke',
            headCoach: 'K'
        };

        const team = new Team(team1);
        team1.id = team.id;
        assert.deepEqual(team.teamName, 'duke');
    });

    it('teamName is required', () => {
        const team = new Team({});

        const { errors } = team.validateSync();
        assert.equal(errors.teamName.kind, 'required');
    });
});
