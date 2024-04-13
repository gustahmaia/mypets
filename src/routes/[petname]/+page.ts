import lunny_1 from '$lib/images/lunny_1.jpeg';
import ninho_1 from '$lib/images/ninho_1.jpeg';
import { error } from '@sveltejs/kit';

interface Pet {
    name: string
    age: number
    race: string
    sex: string
    castrated: boolean
    address: string
    contact: number
    contactString: string
    pictureUrl: string
}

class Ninho implements Pet {
    name: string = 'NINHO'
    age: number = 7
    race: string = 'srd'
    sex: string = 'm'
    castrated: boolean = true
    address: string = 'rua Rio Purús 119 Catanduva - SP'
    contact: number = 17996745399
    contactString: string = '(17) 99674-5399'
    pictureUrl: string = ninho_1
}

class Lunny implements Pet {
    name: string = 'LUNNY'
    age: number = 2
    race: string = 'srd'
    sex: string = 'f'
    castrated: boolean = true
    address: string = 'rua Rio Purús 119 Catanduva - SP'
    contact: number = 17996745399
    contactString: string = '(17) 99674-5399'
    pictureUrl: string = lunny_1
}

const mapPet = new Map<string, Pet>()
mapPet.set('ninho', new Ninho())
mapPet.set('lunny', new Lunny())

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.petname === 'ninho' || params.petname === 'lunny') {
        return {
            pet: mapPet.get(params.petname)
        }
    }

    error(404, 'pet não encontrado!')
}