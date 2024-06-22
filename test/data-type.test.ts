describe('Data Type', () => {
  it('should must declare', () => {
    const name: string = 'Sofyan Egi Lesmana';
    const age: number = 23;
    const isMarried: boolean = false;

    expect(name).toBe('Sofyan Egi Lesmana');
    expect(age).toBe(23);
    expect(isMarried).toBe(false);

    expect(typeof name).toBe('string');
    expect(typeof age).toBe('number');
    expect(typeof isMarried).toBe('boolean');
    console.info(`Hello my name is ${name}, I'm ${age} years old. I'm ${isMarried ? 'married' : 'not married'}.`);
  });
});
