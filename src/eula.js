const fs = require('fs');

module.exports = () => {
  // This is all sync but that's ok because this program just started running at this point.
  if (fs.existsSync('eula.txt')) {
    if (
      !fs
        .readFileSync('eula.txt')
        .toString()
        .includes('eula=true')
    ) {
      console.error("Server cannot start as you haven't agreed to the EULA");
      
    }
  } else {
    fs.writeFileSync(
      'eula.txt',
      '# By changing this value to true you agree to the Minecraft EULA @ https://account.mojang.com/documents/minecraft_eula.\neula=true\n'
    );
    console.error('Please agree to the Minecraft EULA in eula.txt');
    
  }
};
