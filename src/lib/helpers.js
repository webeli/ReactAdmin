export function createArray(snap) {
    let array = [];
    Object.keys(snap.val()).forEach(key => {
        array.push({key:key,val:snap.val()[key]})
    });
    return array;
}

export function getByKeys(dbRef, keys) {
    let array = [];
    Object.keys(keys).map(key => {
        dbRef.child(key).once('value', (snap) => {
            array.push(snap.val());
        })
    });
    return array;
}