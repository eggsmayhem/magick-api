const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(demons)
})
app.get('/api/:name', (req, res) => {
    const demonName = req.params.name.toLowerCase()
    if(demons[demonName]) {
        res.json(demons[demonName])
    }
    else {
        res.send('No such demon listed')
    }
})

app.listen(process.env.PORT || PORT, ()=> {
    console.log('Welcome to Hell! Enjoy your stay :)')
})



let demons = {
    'baal': {
        'rank': 'king',
        'direction': 'east',
        'appearance': 'thee heads: toad, man, cat',
        'legions': 66,
        'provides': 'invisibility',
        'otherNames': 'Bael, Baalzebub',
        'entourage': 'Loyal to Lucifer'
    },
    'paimon': {
        'rank': 'king',
        'direction': 'northwest',
        'appearance': 'man with an effeminate face, wearing a crown, riding on dromedary',
        'legions': 200,
        'provides': 'arts, philisophies, sciences, secret things, the mysteries of earth, wind, and water, what the mind is, gives good familiars, binds men to conjuror\'s will',
        'otherNames': 'N/A',
        'entourage': 'Before him often goes a host of demons with the shape of men, playing trumpets, cymbals, and any other sort of musical instrument'

    },

    'beleth': {
        'rank': 'king',
        'direction': 'South, East, Upwards',
        'appearance': 'When appearing, he looks very fierce to frighten the conjurer or to see if he is courageous. Rides a warhorse',
        'legions': 85,
        'provides': 'mathematics, love of men and women',
        'otherNames': 'Bilet, Bileth, Byleth',
        'entourage': 'Music is heard before him. Taught mathematics to Ham, son of Noah, after the flood.'
    },

    'purson': {
        'rank': 'king',
        'direction': 'N/A',
        'appearance': 'Man with the face of a lion, carrying a ferocious viper in his hand, riding a bear',
        'legions': 22,
        'provides': 'knowledge of hidden things. Can find treasures. Tells of past, present, and future. Answers truly all secret and divine things of Earth and the creation of the world. Brings good familiars.',
        'otherNames': 'Curson, Pursan. Not to be confused with Corson.',
        'entourage': 'before him there can be heard many trumpets sounding'
    },

    'asmodeus': {
        'rank': 'king',
        'direction': 'N/A',
        'appearance': 'Strong and powerful. Appears with three heads: bull, man, and ram. Has the tail of a serpent. From his mouth issue flames. Sits upon an infernal dragon, holds a lance with a banner',
        'legions': 72,
        'provides': 'knowledge regarding lust and wrath. Revenge.',
        'otherNames': 'Ashmodai, Asmodeus, Asmody, Asmoday',
        'entourage': 'N/A'
    },

    'vine': {
        'rank': 'king',
        'direction': 'N/A',
        'appearance': 'A lion holding a snake in his hand and riding a black horse',
        'legions': 36,
        'provides': 'Can tell present, past, and future, discover witches and hidden things, create storms and make the water rough by means of them, bring down walls and build towers. Etymology of name is Latin word "vinea", also the name of an ancient war machine made of wood and covered in leather and branches, used to overthrow walls',
        'otherNames': 'N/A',
        'entourage': 'N/A'
    },

    'balam': {
        'rank': 'king',
        'direction': 'N/A',
        'appearance': 'Three-headed: bull, ram, and man. Flaming eyes and the tail of a serpent. Carries a hawk on his fist and rides a strong bear.',
        'legions': 40,
        'provides': 'Gives perfect knowledge on things past, present, and to come, and can make men invisible and witty. Name seems to have been taken from Bibilical magician Balaam',
        'otherNames': 'Balaam, Balan',
        'entourage': 'N/A'
    },

    'zagan': {
        'rank': 'king, president',
        'direction': 'N/A',
        'appearance': 'A griffin-winged bull that turns into a man after a while',
        'legions': 33,
        'provides': 'Makes men witty. Turns wine into water, water into wine. Turns blood into oil and oil into blood, and a fool into a wise man. Turning metal into coins.',
        'otherNames': 'Zagam',
        'entourage': 'N/S'
    },

    'belial': {
        'rank': 'king',
        'direction': 'N/A',
        'appearance': 'N/A',
        'legions': 50,
        'provides': 'Has the power to distribute senatorships and gives excellent familiars.',
        'otherNames': 'Belhor, Baalial, Beliar, Beliel',
        'entourage': 'N/A'
    },

    'amdusias': {
        'rank': 'duke',
        'direction': 'N/A',
        'appearance': 'A human with claws instead of hands and feet, the head of a unicorn, and a trumpet to symbolize his powerful voice',
        'legions': 29,
        'provides': 'Associated with thunder and his voice is heard during storms. Will give concerts if asked. His musical isntruments can be heard but not seen. He is the conductor of the music in hell. He can make trees bend will',
        'otherNames': 'Amduscias, Amdukias, Ambduscias',
        'entourage': 'the musicians of Hell'
    },
    
    'agares': {
        'rank': 'duke',
        'direction': 'east',
        'appearance': 'a pale old man riding a crocodile',
        'legions': 31,
        'provides': 'He can make runaways come back and those who stand still run. Finds pleasure in teaching immoral expressions. Has the power to destroy dignities, both temporal and supernatural.',
        'otherNames': 'Agreas',
        'entourage': 'N/A'
    },

    'valefar': {
        'rank': 'duke',
        'direction': 'N/A',
        'appearance': 'A lion with the head of a man. Somtimes a lion with the head of a donkey',
        'legions': 10,
        'provides': 'He tempts people to steal and is in charge of good relationships among thieves. Considered a good familiar by associates until they are caught in his trap. '
    }
}