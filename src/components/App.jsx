import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addReminder } from "../actions";

import '../style.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
    }

    addReminder(text) {
        this.props.addReminder(text);
    }

    renderReminder() {
        const { reminders } = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map( reminder => {
                        return (
                            <li className="list-group-item" key={reminder.id}>
                                <div className="list-item">{reminder.text}</div>
                                <div className="list-item delete-button">&#x2715;</div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }

    render() {
        return (
            <div className="App">
                <div className="title">Murojaah Reminder Pro</div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="I have to..."
                            onChange={event => this.setState({text: event.target.value})}
                        />
                        <button 
                            className="btn btn-success"
                            onClick={() => this.addReminder(this.state.text)}>
                                Add Reminder
                        </button>
                        {this.renderReminder()}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reminders: state
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addReminder }, dispatch);
}

export default connect( mapStateToProps, mapDispatchToProps)(App);