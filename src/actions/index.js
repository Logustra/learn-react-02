export function addReminder (text) {
    const action = {
        type: "ADD_REMINDER",
        text
    };
    return action;
    console.log('addReminder', action);
}