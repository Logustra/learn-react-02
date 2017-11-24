const reminder = (action) => {
    return {
        id: Math.random(),
        text: action.text,
        dueDate: action.dueDate
    };
};

const deleteById = (state, id) => {
    const reminders = state.filter(reminder => reminder.id !== id);
    return reminders;
}

const remindersReducer = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case "ADD_REMINDER":
            reminders = [...state, reminder(action)];
            return reminders;
        case "DELETE_REMINDER":
            reminders = deleteById(state, action.id);
            return reminders;
        case "CLEAR_REMINDER":
            reminders = [];
            return reminders;
        default: 
            return state;
    }
};

export default remindersReducer;