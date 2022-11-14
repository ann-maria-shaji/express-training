const knexInstance = require('../database/connection')

const getList = async () =>{
    const getResult = await knexInstance('list').select('*');
    console.log(getResult)
    return getResult
}

const postList = async (value) => {
    const postResult = await knexInstance('list').insert( {item: value})
    console.log(postResult)
    return postResult
}

const putList = async (itemId, updatedValue) => {
    const putResult = await knexInstance('list').where("id", itemId).update({item: updatedValue})
    console.log(putResult)
    return putResult
}

const deleteList = async (itemId) => {
    const deleteResult = await knexInstance('list').where("id", itemId).del()
    console.log(deleteResult)
    return deleteResult
}
module.exports = { getList , postList, putList, deleteList}