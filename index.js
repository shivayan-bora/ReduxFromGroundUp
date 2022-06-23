function createStore() {
    // A store should have 4 parts
    // 1. State
    // 2. Get the state
    // 3. Listen to changes in the state
    // 4. Update the state

    let state;

    const getState = () => state;


    return {
        getState,
    }
}