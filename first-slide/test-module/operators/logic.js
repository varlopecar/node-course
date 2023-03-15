const a = process.argv[2]
const b = process.argv[3] 

const or = (a, b) => a || b
const and = (a, b) => a && b

module.exports = {
    or,
    and
}