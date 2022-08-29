import sha256 from 'crypto-js/sha256';

export const Hash = (param)=> sha256(param).toString()