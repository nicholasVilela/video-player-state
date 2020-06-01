export class UpdateVideoId {
    static readonly type = 'UPDATE_VIDEO_ID';

    constructor(public videoId: string) {}
}