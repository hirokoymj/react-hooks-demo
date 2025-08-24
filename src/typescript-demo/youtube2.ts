//https://www.youtube.com/watch?v=_e4m4DjnBCE

//type Param = Object;
// type Param = {};
//type Param = Record<string, unknown>;
type Param = {
  [index: string]: unknown;
};

function f(obj: Param) {
  return obj;
}

f({ name: 'Kyle' });
f(new Date());
