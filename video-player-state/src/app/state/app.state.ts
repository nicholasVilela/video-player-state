import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UpdateVideoId } from '../actions/app.action';

export class AppModel {
    videoId: string;
    currentVideoTime: number;
}

@State<AppModel>({
    name: 'app',
    defaults: {
        videoId: '',
        currentVideoTime: 0
    }
})

export class AppState {
    @Selector()
    static getState(state: AppModel) {
        return state;
    }

    @Action(UpdateVideoId)
    updateVideoId({getState, patchState}: StateContext<AppModel>, {videoId}: UpdateVideoId) {
        const state = getState();

        patchState({
            videoId: videoId
        });
    }
}