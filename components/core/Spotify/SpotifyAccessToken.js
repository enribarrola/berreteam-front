import SpotifyConstants from "./SpotifyConstants"

export default class SpotifyAccessToken {

    constructor() {
        this.access_token = "";
        this.contentType = "application/x-www-form-urlencoded";
    }

    getAccessToken();
}

SpotifyAccessToken.prototype.getAccessToken = () => {

}