import db from './db.json'

const section = 2
const column = 4

const subjectInColumn = db.subjects.filter(subj => {
    return subj.section == section &&
    subj.boxId.substring(1) == column.toString() 
}).sort( (a, b) => {
    if(a.title > b.title) return 1
    if(a.title < b.title) return -1
    return 0
} )

console.log("Наименование, ячейка")
subjectInColumn.forEach(subj => {
    console.log(`${subj.title}, ${subj.boxId}, ${subj.amount}`)
})

