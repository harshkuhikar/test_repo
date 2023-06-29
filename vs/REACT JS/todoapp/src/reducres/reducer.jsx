const Intialdata = {
    list: []
}
const Alldata = (state = Intialdata, action) => {
    switch (action.type) {
        case 'ADDTODO':
            const id = action.payload.id;
            const data = action.payload.data;
            console.log(data);
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case 'DELETETODO':
            const list = state.list.filter((ele) => ele.id !== action.id)
            return {
                ...state,
                list: list
            }
        default: return state;
    }
}
export default Alldata;