const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
  describe("catalogueService.countBooks", () => {
    test("returns the number of books in the list", () => {
      expect(catalogueService.countBooks()).toBe(20);
    });
  });
});

  describe("catalogueService.countBooksByFirstLetter", () => {
    test("returns the number of books beginning with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("W")).toBe(2);
    });
    test("returns 0 if no books begin with the given letter", () => {
      expect(catalogueService.countBooksByFirstLetter("X")).toBe(0);
    });
  });

describe("catologueService.countBooksByKeyword", () => {
  test("returns the number of books containing the given keyword", () => {
    expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
});
  test("returns the number of books containing the given keyword", () => {
    expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
  });
  //test("returns the number of books containing the given keyword", () => {
   // expect(catalogueService.countBooksByKeyword(3)).toBe(0);
});


describe("catalogueService.getBooksByAuthor", () => {
  test("returns a list of books by author", () => {
    expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual(
      [
        "A Tale of Two Cities by Charles Dickens",
        "Oliver Twist by Charles Dickens",
        "Great Expectations by Charles Dickens"
      ]
    )
  })
})