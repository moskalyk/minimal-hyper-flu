
import dotenv from 'dotenv'
dotenv.config()
import {registerHypercoreService, appendBatch, transferTo, getCore} from './main.js'
import {Fluence, kras} from '@fluencelabs/js-client'
//@ts-ignore
import Hypercore from 'hypercore'

// Create a Hypercore instance for the Hyperbee
const core = new Hypercore(`./hypercore-storage-${process.env.PKEY}`, {
    valueEncoding: 'json'
})

function areArraysEqual(array1: any, array2: any) {
    // Check if the arrays are the same length
    if (array1.length !== array2.length) {
        return false;
    }

    // Compare each object in the arrays
    for (let i = 0; i < array1.length; i++) {
        const object1 = array1[i];
        const object2 = array2[i];

        // Compare each key in the object
        for (const key in object1) {
            if (object1.hasOwnProperty(key)) {
                if (!object2.hasOwnProperty(key) || object1[key] !== object2[key]) {
                    return false;
                }
            }
        }
    }

    return true;
}

;(async () => {

    await core.ready();

    await Fluence.connect(kras[4], {debug: {printParticleId: true}, keyPair: {type: 'Ed25519', source: new Uint8Array([
        Number(process.env.PKEY),  ...
    ])}});

    console.log('connected ',(await Fluence.getClient().getPeerId()))

    const list: any = []
    registerHypercoreService({
        appendBatch: async (payloads: any) => {
            for(let i = 0; i < payloads.length; i++) {
                await core.append(payloads[i])
            }
            const blob = []
            for await (const obj of core.createReadStream()) {
                blob.push(obj)
            }
            return blob
        },
        get: async () => {
            const blob = []
            for await (const obj of core.createReadStream()) {
                blob.push(obj)
            }
            return blob
        }
    })

    if(Number(process.env.PKEY) < 164){
        const res = await appendBatch('12D3KooWQ7P4MB1MStsUDBFn6XNv8SpteBC4V5YvW1qYr4PJ1ryw',[{content: 'wonder'}])
        
        // todo: time transfer per appended batch of kb
        const res1 = await transferTo('12D3KooWQ7P4MB1MStsUDBFn6XNv8SpteBC4V5YvW1qYr4PJ1ryw',"12D3KooWRBN6GicFJM6SaahpREyDmugDWKnLYzCeXF2s7DGRYCXi")
        
        
        const res2 = await getCore('12D3KooWRBN6GicFJM6SaahpREyDmugDWKnLYzCeXF2s7DGRYCXi')
        const res3 = await getCore('12D3KooWQ7P4MB1MStsUDBFn6XNv8SpteBC4V5YvW1qYr4PJ1ryw')
        
        // todo: works on first time around, next perform diff of logs 
        console.log(areArraysEqual(res2, res3))
    }
})()