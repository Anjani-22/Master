const obj = {
  abc: {
    xyz: {
      ijk: 123,
      fh: 99,
    },
    mno: "hello",
  },
};

const output = ["abc_xyz_ijk=123", "abc_mno=hello"];

//

function getResul(obj, result, keys) {
  if (typeof obj !== "Object") {
    result.push(`${keys}=${obj} `);
    return;
  }

  for (key of Object.keys(obj)) {
    keys += `_${key}`;
    getResult(obj[key], result, keys);
  }
}

result.map((value) => value.subString(1));
