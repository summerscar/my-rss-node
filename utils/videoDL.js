const fs = require('fs')
const youtubedl = require('youtube-dl')
const path = require('path')

const format = process.env.FORMAT || '18'

// 249          webm       audio only tiny   51k , opus @ 50k (48000Hz), 1.63MiB
// 250          webm       audio only tiny   65k , opus @ 70k (48000Hz), 1.93MiB
// 251          webm       audio only tiny  115k , opus @160k (48000Hz), 3.40MiB
// 140          m4a        audio only tiny  130k , m4a_dash container, mp4a.40.2@128k (44100Hz), 4.16MiB
// 278          webm       256x144    144p  110k , webm container, vp9, 30fps, video only, 2.89MiB
// 160          mp4        256x144    144p  127k , avc1.4d400c, 30fps, video only, 2.88MiB
// 242          webm       426x240    240p  238k , vp9, 30fps, video only, 5.54MiB
// 133          mp4        426x240    240p  278k , avc1.4d4015, 30fps, video only, 6.64MiB
// 243          webm       640x360    360p  443k , vp9, 30fps, video only, 10.18MiB
// 134          mp4        640x360    360p  633k , avc1.4d401e, 30fps, video only, 13.59MiB
// 244          webm       854x480    480p  809k , vp9, 30fps, video only, 17.44MiB
// 135          mp4        854x480    480p 1143k , avc1.4d401f, 30fps, video only, 24.58MiB
// 247          webm       1280x720   720p 1603k , vp9, 30fps, video only, 33.57MiB
// 136          mp4        1280x720   720p 2284k , avc1.4d401f, 30fps, video only, 49.44MiB
// 248          webm       1920x1080  1080p 2648k , vp9, 30fps, video only, 56.07MiB
// 137          mp4        1920x1080  1080p 4749k , avc1.640028, 30fps, video only, 92.39MiB
// 18           mp4        640x360    360p  579k , avc1.42001E, mp4a.40.2@ 96k (44100Hz), 18.63MiB
// 22           mp4        1280x720   720p 1666k , avc1.64001F, mp4a.40.2@192k (44100Hz) (best)

function videoDL (url, filename, pathname) {
  return new Promise ((resolve, reject) => {
    const video = youtubedl(url, [`--format=${format}`])
    // Will be called when the download starts.
    video.on('info', function(info) {
      // console.log('Download started:' + filename)
      // console.log('filename: ' + info._filename)
      console.log('Download started: file size ' + (info.size / 1024 / 1024).toFixed(1) + 'mb')
    })
    video.on('error', function error(err) {
      reject(err)
      console.log('error 2:', err)
    })
    video.on('complete', function complete(info) {
      'use strict'
      console.log('filename: ' + info._filename + ' already downloaded.')
    })
     
    video.on('end', function() {
      console.log(`Download complete: ${filename}`)
      resolve()
    })
    console.log('Download started:' + filename)
    video.pipe(fs.createWriteStream(path.resolve(pathname, filename + '.mp4')))
  })
}

module.exports = videoDL