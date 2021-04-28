import Item from '../../models/item';

test('item model array value', () => {
    expect(() => new Item([0,1,2])).toThrow(/^Item text must be a string or a number$/);
    expect(() => new Item([0,1,2])).toThrow(TypeError);
});

test('item model null value', () => {
    expect(() => new Item(null)).toThrow(/^Item text must be a string or a number$/);
    expect(() => new Item(null)).toThrow(TypeError);
});

test("item model empty value", () => {
    expect(() => new Item("")).toThrow(/^Item text cannot be empty$/);
    expect(() => new Item("")).toThrow(TypeError);
})

test("item model whitespace string", () => {
    expect(() => new Item("      ")).toThrow(/^Item text cannot be empty$/);
    expect(() => new Item("      ")).toThrow(TypeError);
})

test("item model long string", () => {
    let longString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eleifend, lacus non tristique gravida.";
    expect(() => new Item(longString))
        .toThrow(/^Text is too long. It cannot pass 64 characters in length$/);
    expect(() => new Item(longString)).toThrow(TypeError);   
})

test("item model initializes", () => {
    let shortString = "Lorem ipsum blandit.";
    let item = new Item(shortString);
    expect(item.text).toBe(shortString);
});