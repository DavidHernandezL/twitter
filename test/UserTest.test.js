const User = require('../model/User');

describe('User', () => {
    test('1) Created User', () => {
        const user = new User(1, 'username', 'David', 'bio', new Date(), new Date());
        expect(user.id).toBe(1);
        expect(user.username).toBe('username');
        expect(user.name).toBe('name');
        expect(user.bio).toBe('bio');
    });
});