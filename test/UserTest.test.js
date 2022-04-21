const User = require('../model/User');

describe('User', () => {
    test('1) Created User', () => {
        const user = new User(1, 'username', 'David', 'bio', new Date(), new Date());
        expect(user.id).toBe(1);
        expect(user.username).toBe('username');
        expect(user.name).toBe('David');
        expect(user.bio).toBe('bio');
    });

    test('2) Created User with default date', () => {
        const user2 =  new User("patoFeliz", "David", "bio");
        expect(typeof(user2.lastUpdated)).toBe("object");
        
    });

    test('3) Getters from User', () => {
        const user = new User(1, 'username', 'David', 'bio');
        expect(user.getUsername()).toBe('username');
        expect(user.getBio()).toBe('bio');
        expect(user.getDateCreated()).toBeInstanceOf(Date);
    });

    test('4) Setters from User', () => {
        const user = new User(1, 'Pato', 'David', 'bio');
        user.setUsername('username2');
        user.setBio('bio2');
        expect(user.getUsername()).toBe('username2');
        expect(user.getBio()).toBe('bio2');
    });

});