function telephoneCheck(str) {return str.match((/^[0-9]{3}-[0-9]{3}-[0-9]{4}$|^[0-9]{10}$|^[0-9]{3} [0-9]{3} [0-9]{4}$|^[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4}$|^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$|^([0-9]){3} [0-9]{3}-[0-9]{4}$|^[1]{1} \([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[1]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}$|^[1]{1}\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/)) ? true: false;}

telephoneCheck("(555)555-5555");
