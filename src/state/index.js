import {
    atom,
} from 'recoil';
// post list
export const postListsState = atom({
    key: 'post/LIST_STATE', 
    default: [],
});
// post loading state
export const postLoadingState = atom({
    key: 'post/POST_LOADING', 
    default: false,
});

// create post modal
export const postModalOpenState = atom({
    key: 'post/MODAL_OPEN', 
    default: false,
});

const postState = {
    postListsState,
    postLoadingState,
    postModalOpenState
};
export default postState;