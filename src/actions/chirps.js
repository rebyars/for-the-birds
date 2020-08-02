import database from '../firebase/firebase';

export const addChirp = (chirp) => ({
    type: 'ADD_CHIRP',
    chirp
});

export const startAddChirp = (chirpData = {}) => {
    return (dispatch) => {
        const {
            subject= '',
            content= '',
            createdAt= 0
        } = chirpData;
        const chirp = { subject, content, createdAt };
        database.ref('chirps').push(chirp).then((ref) => {
            dispatch(addChirp({
                id: ref.key,
                ...chirp
            }));
        });
    };
};

export const removeChirp = ({ id }) => ({
    type: 'REMOVE_CHIRP',
    id
});

export const startRemoveChirp = ({ id }) => {
    return (dispatch) => {
        return database.ref(`chirps/${id}`).remove().then(() => {
            dispatch(removeChirp({id}));
        });
    };
};

export const editChirp = (id, updates) => ({
    type: 'EDIT_CHIRP',
    id,
    updates
});

export const startEditChirp = (id, updates) => {
    return (dispatch) => {
        return database.ref(`chirps/${id}`).update({
            ...updates
        }).then(() => {
            dispatch(editChirp(id, updates));
        });
    };
};

export const setChirps = (chirps) => ({
    type: 'SET_CHIRPS',
    chirps
});

export const startSetChirps = () => {
    return (dispatch) => {
        return database.ref('chirps').once('value').then((snapshot) => {
            const chirps = [];
            snapshot.forEach((chirp) => {
                chirps.push({
                    id: chirp.key,
                    ...chirp.val()
                });
            });
            dispatch(setChirps(chirps));
        });
    };
};