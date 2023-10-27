function download(url) {
    const a = document.createElement('a')
    a.href = url
    a.download = url.split('/').pop()
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
}

function downloadClickDesktop() {
    let url = 'file:///C:/workspace/PITSite/downloadArchive/horaDoRemedio.rar'
    download(url)
}

function downloadClickMobile() {
    let url = 'file:///C:/workspace/PITSite/downloadArchive/horaDoRemedio.rar'
    download(url)
}