"use strict";
class UserAuthProfile {
}
class Auth {
    constructor(strategy) {
        this.strategy = strategy;
    }
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    authUser(userProfile) {
        return this.strategy.auth(userProfile);
    }
}
class JWTStrategy {
    auth(userProfile) {
        return !!userProfile.jwtToken;
    }
}
class GithubStrategy {
    auth(userProfile) {
        return !!userProfile.githubToken;
    }
}
const userProfile = new UserAuthProfile();
userProfile.jwtToken = 'jwtToken';
const auth2 = new Auth(new JWTStrategy());
auth2.setStrategy(new GithubStrategy());
