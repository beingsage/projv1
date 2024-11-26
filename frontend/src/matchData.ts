import team1Image from './assets/team1.jpg';
import team2Image from './assets/team2.jpg';
import team3Image from './assets/team3.jpg';
import team4Image from './assets/team4.jpg';
import team5Image from './assets/team5.jpg';
import team6Image from './assets/team6.jpg';
import team7Image from './assets/team7.jpg';
import team8Image from './assets/team8.jpg';
export interface Match {
    matchId: number;
    seriesId: number;
    seriesName: string;
    matchFormat: string;
    startDate: number;
    endDate: number;
    team1: {
        teamId: number;
        teamName: string;
        teamSName: string;
    };
    team2: {
        teamId: number;
        teamName: string;
        teamSName: string;
    };
    ground: string;
    isActive: boolean;
    hasQuestions: boolean;
    src?: string; // Add this field
}

export const mockMatches: Match[] = [
    {
        "matchId": 109407,
        "seriesId": 9188,
        "seriesName": "Abu Dhabi T10 League 2024",
        "matchFormat": "T20",
        "startDate": 1732196700000,
        "endDate": 1732209300000,
        "team1": {
            "teamId": 1216,
            "teamName": "Morrisville Samp Army",
            "teamSName": "MSA"
        },
        "team2": {
            "teamId": 600,
            "teamName": "Bangla Tigers",
            "teamSName": "BGT"
        },
        "ground": "Sheikh Zayed Stadium",
        "isActive": true,
        "hasQuestions": false,
        src: team1Image
    },
    {
        "matchId": 107283,
        "seriesId": 8931,
        "seriesName": "The Ford Trophy 2024-25",
        "matchFormat": "ODI",
        "startDate": 1729891800000,
        "endDate": 1729920600000,
        "team1": {
            "teamId": 312,
            "teamName": "Canterbury",
            "teamSName": "CNTBRY"
        },
        "team2": {
            "teamId": 294,
            "teamName": "Northern Knights",
            "teamSName": "NK"
        },
        "ground": "Hagley Oval",
        "isActive": true,
        "hasQuestions": false,
        src: team5Image
    },
    {
        "matchId": 109400,
        "seriesId": 9188,
        "seriesName": "Abu Dhabi T10 League 2024",
        "matchFormat": "T20",
        "startDate": 1732188600000,
        "endDate": 1732201200000,
        "team1": {
            "teamId": 601,
            "teamName": "Team Abu Dhabi",
            "teamSName": "AD"
        },
        "team2": {
            "teamId": 2216,
            "teamName": "Ajman Bolts",
            "teamSName": "AJMB"
        },
        "ground": "Sheikh Zayed Stadium",
        "isActive": true,
        "hasQuestions": false,
        src: team6Image
    },
    {
        "matchId": 109300,
        "seriesId": 9179,
        "seriesName": "Abu Dhabi T10 League 2024",
        "matchFormat": "T20",
        "startDate": 1732188600000,
        "endDate": 1732201200000,
        "team1": {
            "teamId": 601,
            "teamName": "Team Abu Dhabi",
            "teamSName": "AD"
        },
        "team2": {
            "teamId": 2216,
            "teamName": "Ajman Bolts",
            "teamSName": "AJMB"
        },
        "ground": "Sheikh Zayed Stadium",
        "isActive": true,
        "hasQuestions": false,
        src: team7Image
    }
];