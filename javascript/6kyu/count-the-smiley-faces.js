const isSmileyFace = (face) => /[\:\;][-~]?[D\)]/.test(face);

const countSmileys = (array) => array.filter(isSmileyFace).length;
