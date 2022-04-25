let dataArr = [
    {
        id: 1,
        title: "hello world",
        content: '千里之外'
    },    {
        id: 2,
        title: "hello reacat",
        content: '本草纲目'
    },    {
        id: 3,
        title: "goodbye vue",
        content: '爱情悬崖'
    }
]
export function getDataList() {
    return dataArr
}
export function getValueById(id) {
    return dataArr.filter(item=> item.id === id)[0]
}