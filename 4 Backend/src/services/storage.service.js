import ImageKit from '@imagekit/nodejs';



const imafeKit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});



async function uploadFile(buffer) {

  console.log(buffer)

  const result = await imafeKit.files.upload({
    file: buffer.toString("base64"),
    fileName: "image.jpg"
  });
  return result;
}


export default uploadFile;
// module.exports = uploadFile;

