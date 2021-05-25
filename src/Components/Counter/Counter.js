import React, { Fragment } from "react"
// connect Counter component to store
import { connect } from "react-redux"
import "./Counter.css"
// import actions
import { Plus, Minus, Divide, Multiply, Zero } from "../../Actions/CounterActions"


const Counter = ({ counter, Plus, Minus, Divide, Multiply, Zero }) => {

    return (

        <Fragment>
            <div className="container">
                <div className="row">

                    <div className="col-12 d-flex justify-content-center"> <button type="button" className="btn btn-success col-2 m-2" onClick={Plus}>Plus</button>
                        <button type="button" className="btn btn-danger col-2 m-2" onClick={Multiply}>Multiply</button>

                        <div id="counter" className="m-4">{counter}</div>
                        <button type="button" className="btn btn-warning col-2 m-2" onClick={Minus}>Minus</button>
                        <button type="button" className="btn btn-dark col-2 m-2" onClick={Divide}>Divide</button>


                    </div>
                    <div className="row justify-content-center"><button type="button" className="btn btn-info col-3 " onClick={Zero}>Zero</button></div>
                </div>
            </div>

        </Fragment>
    )
}

const mapStateToProps = ({ CounterReducer }) => {
    const { counter } = CounterReducer
    return { counter }
}
const mapDispatchToProps = {
    Plus,
    Minus,
    Divide,
    Multiply,
    Zero
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)