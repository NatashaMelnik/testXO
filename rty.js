function pl(n, str) {
    return `${n} ${str}${n > 1 ? 's' : ''}`;
}

describe('plurialization', () => {
    it('has no effect with 1', () => {
        expect(pl(1, 'cat')).toBe('1 cat');
    });

    it('it add /s for 2 and more', () => {
        expect(pl(2, 'cat')).toBe('2 cats');
    });
})