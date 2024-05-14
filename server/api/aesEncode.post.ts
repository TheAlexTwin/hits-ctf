import aesjs from 'aes-js';

function arrayBufferToBase64(buffer) {
    return Buffer.from(buffer).toString('base64');
}

export default defineEventHandler(async (event) => {
    const message = await readBody(event)

    const textEncoder = new TextEncoder();

    const keyString = "rayofsunshinexdd"
    const keyBytes = textEncoder.encode(keyString);

    const messageBytes = textEncoder.encode(message.message)

    var aesCbc = new aesjs.ModeOfOperation.cbc(keyBytes, keyBytes);
    var encryptedBytes = aesCbc.encrypt(messageBytes);

    var textDecoder = new TextDecoder()

    var result = aesjs.utils.utf8.fromBytes(encryptedBytes)

    return arrayBufferToBase64(encryptedBytes);
})