import { DeckDto } from '@/dtos/deck.dto';
import { GameDto } from '@/dtos/game.dto';
import { CreateStateDto } from '@/dtos/state.dto';

export const gameDefault: GameDto = {
    _id: null,
    user: null,
    audience: 'computer science students',
    authors: [''],
    description: '(Feel free to edit) This is a sample game based on greatest card game - A game to practice software testing',
    simplyGameplay:
        'In this game, the players must resolve challenges by combining types of software testing with software application scenarios. The objective is to choose the type of test that best suits the software scenario',
    knowledgeField: 'Software Testing',
    maxNumberPlayers: 7,
    minNumberPlayers: 3,
    name: 'Default Game',
    requirements: 'Software testing types',
};

export const defaultDecks: DeckDto[] = [
    {
        game: null,
        _id: null,
        color: '#663030',
        name: 'Challenges Deck',
        description: 'This deck has all the challenges of this game. Each challenge is a software use description',
        deckFront: {
            title: true,
            art: true,
            description: true,
            effect: false,
            cost: false,
            level: false,
            earning: false,
        },
        deckBack: {
            title: false,
            answers: true,
            effect: false,
            cost: false,
            level: false,
            earning: false,
        },
    },
    {
        game: null,
        _id: null,
        color: '#30665d',
        name: 'Game Deck',
        description: 'This deck has the types of software testing, e.g., Unit Test, Usability Test',
        deckFront: {
            title: true,
            art: true,
            description: true,
            effect: false,
            cost: false,
            level: false,
            earning: false,
        },
        deckBack: {
            title: false,
            answers: false,
            effect: false,
            cost: false,
            level: false,
            earning: false,
        },
    },
    {
        game: null,
        _id: null,
        color: '#613d61',
        name: 'Bonus Deck',
        description: 'This deck has all bonus cards. Every bonus card has an effect',
        deckFront: {
            title: true,
            art: true,
            description: true,
            effect: true,
            cost: false,
            level: false,
            earning: false,
        },
        deckBack: {
            title: false,
            answers: false,
            effect: false,
            cost: false,
            level: false,
            earning: false,
        },
    },
];

export const defaultStates: CreateStateDto[] = [
    {
        _id: null,
        game: null,
        x: 105,
        y: 570,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'sets the begining of the game',
        label: 'Game Start',
        conditionalRule: null,
        statementRules: [],
        transition: 'Game Setup',
    },
    {
        _id: null,
        game: null,
        x: 105,
        y: 410,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'sets the setup of every begining of a game',
        label: 'Game Setup',
        conditionalRule: null,
        statementRules: [
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'st rule 1',
                simplerDescription: 'all players draw 5 cards from game deck',
            },
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'st rule 2',
                simplerDescription: 'chose random player to start',
            },
        ],
        transition: 'Turn setup',
    },
    {
        _id: null,
        game: null,
        x: 105,
        y: 250,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'sets the setup of every begining of a turn',
        label: 'Turn setup',
        conditionalRule: null,
        statementRules: [
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 6',
                simplerDescription: 'the player of the turn draws 1 card from game deck',
            },
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 5',
                simplerDescription: 'the table is filled with 5 challenge cards, if not already',
            },
        ],
        transition: 'Play or next player',
    },
    {
        _id: null,
        game: null,
        x: 340,
        y: 80,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'Decides what is the play',
        label: 'Play or next player',
        conditionalRule: {
            _id: null,
            label: 'Choose next play',
            conditions: [
                {
                    test: 'the player of the turn has not tried a challenge yet',
                    effectIfTrue: {
                        simpleEffect: 'S/he can play a challenge',
                        _id: null,
                        forever: null,
                        statusChange: null,
                        toPlayerRole: null,
                        toSelfPlayer: null,
                        toSpecificPlayer: null,
                        turns: null,
                    },
                    stateIfTrue: 'Play a challenge',
                },
                {
                    test: 'the player of the turn has not tried to bargain',
                    effectIfTrue: {
                        simpleEffect: 'S/he can try to negotiate with other players',
                        _id: null,
                        forever: null,
                        statusChange: null,
                        toPlayerRole: null,
                        toSelfPlayer: null,
                        toSpecificPlayer: null,
                        turns: null,
                    },
                    stateIfTrue: 'Do a bargain',
                },
                {
                    test: 'the player of the turn has not used a Bonus Card effect',
                    effectIfTrue: {
                        simpleEffect: 'S/he can use it',
                        _id: null,
                        forever: null,
                        statusChange: null,
                        toPlayerRole: null,
                        toSelfPlayer: null,
                        toSpecificPlayer: null,
                        turns: null,
                    },
                    stateIfTrue: 'Bonus play',
                },
            ],
            failureCondition: {
                test: "can't do any play",
                effectIfTrue: {
                    simpleEffect: 'pass the turn to next player',
                    _id: null,
                    forever: null,
                    statusChange: null,
                    toPlayerRole: null,
                    toSelfPlayer: null,
                    toSpecificPlayer: null,
                    turns: null,
                },
                stateIfTrue: 'Turn setup',
            },
        },
        statementRules: [],
        transition: null,
    },
    {
        _id: null,
        game: null,
        x: 341,
        y: 530,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'Describes the way to resolve a challenge',
        label: 'Play a challenge',
        conditionalRule: {
            _id: null,
            label: 'play a challenge',
            conditions: [
                {
                    test: 'the player beats the challenge AND the dice throw shows a number present in the answers',
                    effectIfTrue: {
                        simpleEffect: 'S/he wins the challenge',
                        _id: null,
                        forever: null,
                        statusChange: null,
                        toPlayerRole: null,
                        toSelfPlayer: null,
                        toSpecificPlayer: null,
                        turns: null,
                    },
                    stateIfTrue: 'Update status: success',
                },
                {
                    test: 'the player beats the challenge but the dice throw shows a number NOT present in the answers',
                    effectIfTrue: {
                        simpleEffect: 'S/he wins the challenge',
                        _id: null,
                        forever: null,
                        statusChange: null,
                        toPlayerRole: null,
                        toSelfPlayer: null,
                        toSpecificPlayer: null,
                        turns: null,
                    },
                    stateIfTrue: 'Play or next player',
                },
            ],
            failureCondition: {
                test: 'the player used a game card that DO NOT answers correctly the challenge',
                effectIfTrue: {
                    simpleEffect: 'S/he looses the challenge',
                    _id: null,
                    forever: null,
                    statusChange: null,
                    toPlayerRole: null,
                    toSelfPlayer: null,
                    toSpecificPlayer: null,
                    turns: null,
                },
                stateIfTrue: 'Update status: failure',
            },
        },
        statementRules: [
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 8.1',
                simplerDescription: "The player combines 1 Game Card with 1 Challenge Card to make it's play",
            },
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 8.1',
                simplerDescription:
                    'the player beats the challenge if S/He uses a game card that answers correctly the challenge card that s/he chose from table',
            },
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 8.1',
                simplerDescription: 'the player throw the dice if S/He beats the challenge',
            },
        ],
        transition: null,
    },
    {
        _id: null,
        game: null,
        x: 500,
        y: 350,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'Negotiate with another player',
        label: 'Do a bargain',
        conditionalRule: null,
        statementRules: [
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 6',
                simplerDescription: 'the player can offer card to trade. This negotiation is made in front of all other players',
            },
        ],
        transition: 'Play or next player',
    },
    {
        _id: null,
        game: null,
        x: 850,
        y: 200,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'To use the effect of a Bonus card',
        label: 'Bonus play',
        conditionalRule: null,
        statementRules: [
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'rule 6',
                simplerDescription: 'the player can use a Bonus Card if S/He has',
            },
        ],
        transition: 'Play or next player',
    },
    {
        _id: null,
        game: null,
        x: 900,
        y: 560,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'Describes the way to change the points in case of win a challenge',
        label: 'Update status: success',
        conditionalRule: null,
        statementRules: [
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'st rule 3',
                simplerDescription: 'the player earns +1 victory point',
            },
            {
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
                label: 'st rule 3',
                simplerDescription: "the player draws a card from the Deck Bonus to it's hand",
            },
        ],
        transition: 'Check if game completed',
    },
    {
        _id: null,
        game: null,
        x: 780,
        y: 380,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'Describes the way to change the points in case of miss a challenge',
        label: 'Update status: failure',
        conditionalRule: null,
        statementRules: [
            {
                label: 'rule',
                simplerDescription: 'there is no penalties for loosing',
                _id: null,
                me: null,
                to: null,
                given: null,
                forever: null,
                statusChange: null,
                toPlayerRole: null,
                toSelfPlayer: null,
                toSpecificPlayer: null,
                turns: null,
            },
        ],
        transition: 'Play or next player',
    },
    {
        _id: null,
        game: null,
        x: 1000,
        y: 110,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'if someone won, the game must end',
        label: 'Check if game completed',
        conditionalRule: {
            _id: null,
            label: 'end game condition',
            conditions: [
                {
                    test: 'any player achieved 7 victory points',
                    effectIfTrue: {
                        simpleEffect: 'S/he wins the game',
                        _id: null,
                        forever: null,
                        statusChange: null,
                        toPlayerRole: null,
                        toSelfPlayer: null,
                        toSpecificPlayer: null,
                        turns: null,
                    },
                    stateIfTrue: 'Game Over',
                },
            ],
            failureCondition: {
                test: 'no player achieved 7 victory points yet',
                effectIfTrue: {
                    simpleEffect: 'next player',
                    _id: null,
                    forever: null,
                    statusChange: null,
                    toPlayerRole: null,
                    toSelfPlayer: null,
                    toSpecificPlayer: null,
                    turns: null,
                },
                stateIfTrue: 'Play or next player',
            },
        },
        statementRules: [],
        transition: null,
    },
    {
        _id: null,
        game: null,
        x: 1168,
        y: 374,
        height: 60,
        width: 100,
        color: '#656166',
        purpose: 'The end of the game. Lets see the winners',
        label: 'Game Over',
        conditionalRule: null,
        statementRules: [],
        transition: null,
    },
];