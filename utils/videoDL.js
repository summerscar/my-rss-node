const fs = require('fs')
const youtubedl = require('youtube-dl')
const path = require('path')

function videoDL (url, filename, pathname) {
  return new Promise ((resolve, reject) => {
    const video = youtubedl(url)
    
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