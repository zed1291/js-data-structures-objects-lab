// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
    const source = {[key]: value}
    return Object.assign({}, driver, source)
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    const source = {[key]: value}
    return Object.assign(driver, source)
}

function deleteFromDriverByKey(driver, key) {
    const newObj = Object.assign({}, driver)
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    const newObj = Object.assign(driver)
    delete newObj[key]
    return newObj
}