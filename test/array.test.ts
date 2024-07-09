describe('Array', () => {
  const names: string[] = ['Sofyan', 'Egi', 'Lesmana'];
  const ages: number[] = [23, 24, 25];
  const course: ReadonlyArray<string> = ['HTML', 'CSS', 'JavaScript'];

  it('should must declare', () => {
    expect(names).toEqual(['Sofyan', 'Egi', 'Lesmana']);
    expect(ages).toEqual([23, 24, 25]);
    expect(course).toEqual(['HTML', 'CSS', 'JavaScript']);

    expect(typeof names).toBe('object');
    expect(typeof ages).toBe('object');
    expect(typeof course).toBe('object');
    console.info(`Hello my name is ${names.join(' ')}, I'm ${ages[0]} years old. I'm learning ${course.join(', ')}.`);
  });

  it('should support tuple', () => {
    const person: readonly [string, number, boolean] = ['Sofyan', 23, false];
    // person[0] = 'Egi'; // Error: Index signature in type 'readonly [string, number, boolean]' only permits reading
    expect(person).toEqual(['Sofyan', 23, false]);
    expect(typeof person).toBe('object');
    console.info(`Hello my name is ${person[0]}, I'm ${person[1]} years old. I'm ${person[2] ? 'married' : 'not married'}.`);
  });
});
