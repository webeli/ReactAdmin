export function createArray(snap) {
    let array = [];
    Object.keys(snap.val()).forEach(key => {
        array.push({key:key,val:snap.val()[key]})
    });
    return array;
}
