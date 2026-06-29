let getChildRepositories;
let resolvePath;

beforeAll(async () => {
  ({ getChildRepositories } = await import("../src/synchronize"));
  ({ resolve: resolvePath } = await import("node:path"));
});

describe("getChildRepositories", () => {
  test("finds this repository", async () => {
    const children = await getChildRepositories("..");
    expect(children).toContain(resolvePath("."));
  });
  test("finds no children of this repository", async () => {
    const children = await getChildRepositories(".");
    expect(children).toEqual([]);
  });
});
