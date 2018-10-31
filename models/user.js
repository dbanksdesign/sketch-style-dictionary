module.exports = function(opts = {}) {
  return {
    document: {
      pageListHeight: opts.pageListHeight || -1
    },
    [opts.pageID]: {
      scrollOrigin: opts.scrollOrigin || "{54, 54}",
      zoomValue: opts.zoomValue || 1
    }
  }
}