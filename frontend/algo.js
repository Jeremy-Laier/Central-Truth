// Constant for the cryptography.
const crypto = require('crypto');

// Input vector (a simple buffer).
const iv = Buffer.from('bufferDeMixiotes');

// Encripts a string to a 256 length
// hex string.
function encrypt(information, password)
{
	// Set the length of the information to fit 
	// and create a 256 length hash.
	information = information.padStart(112, ' ');

	// Hashes the password.
	let hash = crypto.createHash('md5').update(password).digest('hex');

	// Cipher for message encryption.
	let cipher = crypto.createCipheriv('aes-256-cbc', hash, iv);
	
	// The result hash that contains the information of the patient 
	// hidden.	
	let encrypted = cipher.update(information, 'utf-8', 'hex');
	encrypted += cipher.final('hex');
	return encrypted;
}

// Deencripts a 256 length hex string to a simple
// informative string.
function decrypt(message, password)
{
	// Hashes the password.
	let hash = crypto.createHash('md5').update(password).digest('hex');

	// Decipher for message deencryption.
	let decipher = crypto.createDecipheriv('aes-256-cbc', hash, iv);

	// The result hash that contains the information of the patient 
	// hidden.	
	let decrypted = decipher.update(message, 'hex', 'utf-8');
	decrypted += decipher.final('utf-8');
	
	// Adjust the patient information to its original size.
	decrypted = decrypted.trim();
	return decrypted;
}

var menssage = 'Mensajes de prueba de longitud'
var encryptedMessage = encrypt(message, 'A simple password');
var decryptedMessage = decrypt(encryptedMessage, 'A simple password');
