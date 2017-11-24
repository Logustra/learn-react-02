export function addReminder (text, dueDate) {
    const action = {
        type: "ADD_REMINDER",
        text,
        dueDate
    };
    return action;
}

export function deleteReminder (id) {
    return {
        type: "DELETE_REMINDER",
        id
    };
}

export function clearReminder () {
    return {
        type: "CLEAR_REMINDER"
    };
}