import AdventuresOfSherlockHolmes from './assets/images/adventures_of_sherlock_holmes.jpg'
import PrideAndPredjudice from './assets/images/pride_and_predjudice.jpg'
import AnnaKarenina from './assets/images/anna_karenina.jpg'
import HowToKillAMockingbird from './assets/images/how_to_kill_a_mockingbird.jpg'
import TheIdiot from './assets/images/the_idiot.jpg'
import JourneyToTheCenterOfEarth from './assets/images/journey_to_the_center_of_earth.jpg'
import NineteenEightyFour from './assets/images/1984.png'
import HuckleberryFinn from './assets/images/huckleberry_finn.jpg'
import TomSawyer from './assets/images/tom_sawyer.jpg'
import MobyDick from './assets/images/moby_dick.jpg'
import AnimalFarm from './assets/images/animal_farm.jpg'
import MiceAndMen from './assets/images/mice_and_men.jpg'

export const AllTitles = {
    1: {
        name: 'The Adventures of Sherlock Holmes',
        author: 'Arthur Conan Doyle',
        id: 1,
        authorId: 1,
        languages: ['English', 'Swedish', 'German', 'Spanish'],
        genres: ['Mystery'],
        cover: AdventuresOfSherlockHolmes
    },
    2: {
        name: 'Pride And Predjudice',
        author: 'Jane Austen',
        id: 2,
        authorId: 2,
        languages: ['English', 'Swedish', 'German', 'Spanish', 'French'],
        genres: ['Romance', 'Classic'],
        cover: PrideAndPredjudice
    },
    3: {
        name: 'Anna Karenina',
        author: 'Leo Tolstoy',
        id: 3,
        authorId: 3,
        languages: ['English', 'Swedish', 'Russian', 'Spanish'],
        genres: ['Classic'],
        cover: AnnaKarenina
    },
    4: {
        name: 'How To Kill A Mockingbird',
        author: 'Harper Lee',
        id: 4,
        authorId: 4,
        languages: ['English', 'German', 'Spanish'],
        genres: ['Thriller', 'Classic'],
        cover: HowToKillAMockingbird
    },
    5: {
        name: 'The Idiot',
        author: 'Fyodor Dostoevsky',
        id: 5,
        authorId: 5,
        languages: ['English', 'Swedish', 'Russian', 'Spanish'],
        genres: ['Classic'],
        cover: TheIdiot
    },
    6: {
        name: 'Journey to the Center of the Earth',
        author: 'Jules Verne',
        id: 6,
        authorId: 6,
        languages: ['English', 'Swedish', 'French', 'Spanish'],
        genres: ['Science fiction'],
        cover: JourneyToTheCenterOfEarth
    }, 
    7: {
        name: '1984',
        author: 'George Orwell',
        id: 7,
        authorId: 7,
        languages: ['English', 'Swedish', 'French', 'Spanish'],
        genres: ['Dystopian', 'Science fiction'],
        cover: NineteenEightyFour
    },
    8: {
        name: 'The Adventures of Huckleberry Finn',
        author: 'Mark Twain',
        id: 8,
        authorId: 8,
        languages: ['English', 'Swedish', 'German', 'Spanish'],
        genres: ['Adventure', 'Satire'],
        cover: HuckleberryFinn
    },
    9: {
        name: 'Animal Farm',
        author: 'George Orwell',
        id: 9,
        authorId: 9,
        languages: ['English', 'Swedish', 'Spanish'],
        genres: ['Satire', 'Dystopian'],
        cover: AnimalFarm
    },
    10: {
        name: 'Moby Dick',
        author: 'Herman Melville',
        id: 10,
        authorId: 10,
        languages: ['English', 'Spanish'],
        genres: ['Adventure'],
        cover: MobyDick
    },
    11: {
        name: 'Of Mice and Men',
        author: 'John Steinbeck',
        id: 11,
        authorId: 11,
        languages: ['English', 'Swedish', 'Spanish'],
        genres: ['Classic'],
        cover: MiceAndMen
    },
    12: {
        name: 'Tom Sawyer',
        author: 'Mark Twain',
        id: 12,
        authorId: 8,
        languages: ['English', 'Swedish', 'German', 'Spanish'],
        genres: ['Adventure', 'Satire'],
        cover: TomSawyer
    },

}

export const genres = [
    'Adventure',
    'Classic',
    'Dystopian',
    'Mystery',
    'Romance',
    'Satire',
    'Science fiction',
    'Thriller',
]

    

