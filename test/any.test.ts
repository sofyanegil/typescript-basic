describe('any data type', () => {
  it('should support typescript', () => {
    const person: any = {
      name: 'John',
      age: 30,
    };
    expect(person.name).toBe('John');
    expect(person.age).toBe(30);
    expect(person.address).toBeUndefined();
    person.address = '123 Main St';
    expect(person.address).toBe('123 Main St');
  });
});
