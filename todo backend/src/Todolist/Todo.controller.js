const { getList, postList, putList, deleteList } = require('./Todo.service')

const read = async (req,res) =>{
    const foundList = await getList()
    res.json(foundList);
};

const write = async (req, res) => {
    const value = req.body.item
    await postList(value)
    res.json('added an item')
}

const updateList = async(req, res) =>{
    const itemId = req.params.id
    const updatedValue = req.body.item
    await putList(itemId, updatedValue)
    res.json('updated item')
}

const newList = async(req, res) => {
    const itemId = req.body.id
    await deleteList( itemId) 
    res.json('deleted')
}

module.exports = { read, write, updateList, newList };