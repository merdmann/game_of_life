import * as Common from "../lib/common.js";

describe('Basic tests', ()=>{
test('check board is empty',()=> {
    expect( Common.is_occupied( 0,0,10,10 )).toBe(1)
})

test('check board at the border',()=> {
    expect( Common.is_occupied( 10,10,10,10 )).toBe(1)
    })
})

describe('More border cases', ()=> {
    it('empty at the boarder',()=> {
        expect( Common.is_occupied( 10,10,0,0 )).toBe(1)
    })  
})