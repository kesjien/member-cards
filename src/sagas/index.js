
import { call, put, fork, select, takeEvery } from 'redux-saga/effects';
import * as actions from '../actions/post.js';
import { getFormData, getId } from '../reducers/post.js';
import { getAll, get, create, push, remove, update, sync, CHILD_ADDED, CHILD_REMOVED } from 'firebase-saga';

function* fetchPosts() {
    try {
        alert('1')
        const posts = yield call(getAll, 'posts');
        alert('3')
        yield put(actions.postsReceived(posts));
    }
    catch (error) {
        alert('4')
        yield put(actions.fetchPostsFailed(error));
    }
}

function* syncPosts() {
    yield fork(sync, 'posts', {
        [CHILD_ADDED]: actions.syncPostAdded,
        [CHILD_REMOVED]: actions.syncPostRemoved
    });
}

function* fetchPost() {
    try {
        const postId = yield select(getId);
        const posts = yield call(get, 'posts', postId);
        yield put(actions.postReceived(Object.assign({}, posts, { id: postId })));
    }
    catch (error) {
        yield put(actions.fetchPostFailed(error));
    }
}

function* createPost() {
    try {
        const { id, title, body, timestamp } = yield select(getFormData);

        yield call(create, 'posts', () => ({[`posts/${id}`]: { title, body, timestamp }}));
        // Generates a new child location using a unique key
        // yield call(push, 'posts', () => ({
        //             title: formData.title,
        //             body: formData.body,
        //             timestamp: formData.timestamp
        //     })
        // );
        yield put(actions.postCreated());
    }
    catch (error) {
        yield put(actions.postCreationFailed(error));
    }
}

function* updatePost() {
    try {
        const { id, title, body, timestamp } = yield select(getFormData);

        yield call(update, 'posts', id, { title, body, timestamp });
        yield put(actions.postUpdated());
    }
    catch (error) {
        yield put(actions.postUpdatingFailed(error));
    }
}

function* deletePost() {
    try {
        const postId = yield select(getId);
        yield call(remove, 'posts', postId)
        yield put(actions.postDeleted());
        yield fetchPosts();
    }
    catch (error) {
        yield put(actions.postDeletionFailed(error));
    }
}

function* watchFetchPosts() {
    yield* takeEvery(actions.FETCH_POSTS, fetchPosts);
}

function* watchSyncPosts() {
    yield* takeEvery(actions.SYNC_POSTS, syncPosts);
}

function* watchFetchPost() {
    yield* takeEvery(actions.FETCH_POST, fetchPost);
}

function* watchCreatePost() {
    yield* takeEvery(actions.CREATE_POST, createPost);
}

function* watchUpdatePost() {
    yield* takeEvery(actions.UPDATE_POST, updatePost);
}

function* watchDeletePost() {
    yield* takeEvery(actions.DELETE_POST, deletePost);
}

export default function* root() {
    yield [
        fork(watchFetchPosts),
        fork(watchFetchPost),
        fork(watchCreatePost),
        fork(watchUpdatePost),
        fork(watchDeletePost),
        fork(watchSyncPosts)
    ]
}
