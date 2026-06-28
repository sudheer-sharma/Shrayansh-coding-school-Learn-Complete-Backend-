import ImageKit from '@imagekit/nodejs';


const imageKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_URL_KEY
});


async function uploadFile(buffer) {

  // console.log(buffer)

  const result = await imageKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg"
  });
  return result;
}

export default uploadFile;