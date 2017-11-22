const reminder = (action) => {
    return {
        id: Math.random(),
        text: action.text
    };
};

const remindersReducer = (state = [], action) => {
    let reminders = null;
    switch(action.type) {
        case "ADD_REMINDER":
            reminders = [...state, reminder(action)];
            return reminders;
        default: 
            return state;
    }
};

export default remindersReducer;