import {Person} from "../Objects";

export function objectParam3(isBig: boolean, person: Person): number {
    let result = person.age + person.height;
    let x : boolean = true;

    let y;

    y = 1;
    y = isBig;

    // let schoolRooms = person.school.numberRoom;
    if (person.age == 18 && person.school.numberRoom > 30) {
        if (person.height > 10 && y != true) {
            return 1;
        }
        else return 2;
    }
    return result;
}
