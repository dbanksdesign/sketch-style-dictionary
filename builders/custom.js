const fs = require("fs");
const JSZip = require("jszip");
const {Meta, User, Document} = require('../models');

/**
 * Custom Builder
 * Builds completely custom sketch files from scratch. You need to provide
 * Sketch Page models which you can find in ../models. This function makes it
 * easy to actually generate the proper files and zip them up.
 *
 * @param pages [] - An array of Page models
 */
module.exports = function(pages = [], destination = "out.sketch") {
  const zip = new JSZip();

  const user = User({
    pageID: pages[0].do_objectID,
    pageListHeight: 100
  });

  const pagesAndArtboards = pages.reduce((ret, page, i) => {
    return Object.assign({}, ret, {
      [page.do_objectID]: {
        name: page.name,
        artboards: page.layers
          .filter(layer => layer._class === 'artboard')
          .reduce((ret, layer) => {
            return Object.assign({}, ret, {
              [layer.do_objectID]: {
                name: layer.name
              }
            })
          }, {})
      }
    })
  }, {});

  const meta = Meta({
    pagesAndArtboards: pagesAndArtboards
  });

  const document = Document({
    pages: pages.map((page) => page.do_objectID)
  });

  zip.file("user.json", JSON.stringify(user));
  zip.file("meta.json", JSON.stringify(meta));
  zip.file("document.json", JSON.stringify(document));
  pages.forEach((page) => {
    zip.folder("pages").file(
      `${page.do_objectID}.json`,
      JSON.stringify(page)
    )
  });
  zip.folder("previews");

  zip
    .generateNodeStream({type:'nodebuffer',streamFiles:true})
    .pipe(fs.createWriteStream(destination))
    .on('finish', function () {
        // JSZip generates a readable stream with a "end" event,
        // but is piped here in a writable stream which emits a "finish" event.
        console.log(`${destination} built!`);
    });
}