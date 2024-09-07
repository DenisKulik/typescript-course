class UserAuthProfile {
    githubToken: string
    jwtToken: string
}

interface AuthStrategy {
    auth(userProfile: UserAuthProfile): boolean
}

class Auth {
    constructor(private strategy: AuthStrategy) {
    }

    setStrategy(strategy: AuthStrategy) {
        this.strategy = strategy
    }

    public authUser(userProfile: UserAuthProfile): boolean {
        return this.strategy.auth(userProfile)
    }
}

class JWTStrategy implements AuthStrategy {
    auth(userProfile: UserAuthProfile): boolean {
        return !!userProfile.jwtToken
    }
}

class GithubStrategy implements AuthStrategy {
    auth(userProfile: UserAuthProfile): boolean {
        return !!userProfile.githubToken
    }
}

const userProfile = new UserAuthProfile()
userProfile.jwtToken = 'jwtToken'

const auth2 = new Auth(new JWTStrategy())
auth2.setStrategy(new GithubStrategy())
