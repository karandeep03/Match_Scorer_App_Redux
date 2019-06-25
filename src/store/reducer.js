const initialState = {
    teams: [ {name: 'Team A', score: 0}, {name: 'Team B', score: 0} ],
    result: "Click 'Calculate' to see results"
}

const reducer = (state=initialState, action) => {
    let newState = {...state};
    let scoreA = state.teams[0].score,
        scoreB = state.teams[1].score;

    switch(action.type) {
        case 'UPDATE_SCORE':
            // if(action.id === 0) {
            //         console.log("scoreA clicked")
            //         console.log("action.value: " +action.value)
            //         console.log("ScoreA: " +scoreA)
                    return{
                        ...state,
                        // scoreA: state.teams[0].score + action.value
                        teams: state.teams.map((el,index)=> index===action.id?{...el, score: el.score+=2}:el )
                    }
            // }
            // else if(action.id === 1) {
            //     console.log("scoreB clicked")
            //         return{
            //             ...state,
            //             scoreB: state.teams[1].score + action.value,
            //             scoreA: state.teams[0].score,
            //             result: state.result
            //         }
            // }
            // console.log("State1: " +state)
        break;
        case 'SEE_RESULT':
            if(scoreA>scoreB) {
                let diff=scoreA-scoreB;
                return{
                    ...state,
                    result: "Team A won by: " +diff
                }
            }
            else if(scoreB>scoreA) {
                let diff=scoreB-scoreA;
                return{
                    ...state,
                    result: "Team B won by: " +diff
                }
            }
            break;
    }
    console.log("End of reducer")
    console.log("State2: " +state)
    return newState;
};

export default reducer;