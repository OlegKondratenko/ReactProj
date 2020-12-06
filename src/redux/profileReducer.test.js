const { default: profileReducer, profileACs } = require("./profileReducer");

let state = {
    posts: [
        { id: 0, message: "Some very clever phrase", likesCount: 11 },
        { id: 1, message: "My first post!!!", likesCount: 11 },
        { id: 2, message: "My first post!!!", likesCount: 21 },
        { id: 3, message: "My first post!!!", likesCount: 31 },
    ]
}

test('length of post shout increment', () => {
    //1. test data
    let action = profileACs.addPostActionCreator('itcamasutra')

    //2. action
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.posts.length).toBe(5);
});

