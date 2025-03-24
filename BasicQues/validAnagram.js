//An anagram is a word that is formed by rearranging the letters of a different word.
//Ip: s="anagram"  t="nagaram" op: True

const isAnagram = (s, t) => {
    //BRUTE FORCE:
    // return s.split('').sort().join('') === t.split('').sort().join('')

    
    //USING OBJECTS:
    if(s.length !== t.length) return false;
    let obj1 = {}
    let obj2 = {}

    for(let i = 0; i < s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for (const key in obj1) {
        if (obj1[key] != obj2[key]) return false;
    }

    return true;
};

console.log(isAnagram("anagram", "nagaram"));
