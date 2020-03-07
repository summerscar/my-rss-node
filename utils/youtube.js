const { google } = require('googleapis');
const key = process.env.YOUTUBEKEY

if (!key) throw 'YOUTUBEKEY not found!'
const youtube = google.youtube({
    version: 'v3',
    auth: key
});

const youtubeUtils = {
    getPlaylistItems: async (id, part) => {
        const res = await youtube.playlistItems.list({
            part,
            playlistId: id,
            maxResults: process.env.MAXResults || 10
        });
        return res;
    },
    getPlaylist: async (id, part) => {
        const res = await youtube.playlists.list({
            part,
            id: id,
        });
        return res;
    },
    getChannelWithId: async (id, part) => {
        const res = await youtube.channels.list({
            part,
            id: id,
        });
        return res;
    },
    getChannelWithUsername: async (username, part) => {
        const res = await youtube.channels.list({
            part,
            forUsername: username,
        });
        return res;
    },
    getThumbnail: (thumbnails) => thumbnails.maxres || thumbnails.standard || thumbnails.high || thumbnails.medium || thumbnails.default,
    formatDescription: (description) => description.replace(/(?:\r\n|\r|\n)/g, '<br>'),
};

module.exports = youtubeUtils;