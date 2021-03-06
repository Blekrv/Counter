const initialState = {
    counter: 0
}
const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                counter: state.counter += 1
            }
        case "MINUS":
            return {
                counter: state.counter -= 1
            }
        case "DIVIDE":
            return {
                counter: state.counter / 2
            }
        case "MULTIPLY":
            return {
                counter: state.counter * 2
            }
            case "ZERO":
                return {
                    counter: state.counter = 0
                }
        default:
            return state;
    }

}
export default CounterReducer